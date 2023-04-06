import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { message } from 'antd';
import { useIntl } from 'react-intl';

import { useModels } from '../useModels/useModels';

import { toTimestamp } from './utils';
import { fixedFilters } from '../../components/DrawerFilter/utils';

import {
  FilterModelsContextI,
  FilterTagsI,
  FilterTagI,
  DateFieldI,
  TagResponseI,
  FilterToSetTagsI,
} from './types';
import {
  FilterOptionI,
  FilterOptionsI,
  FormValueI,
  FormValuesI,
} from '../../components/DrawerFilter/types';

const FilterModelsContext = createContext({} as FilterModelsContextI);

export function FilterModelsProvider({ children }: { children: ReactNode }) {
  const [filterAmount, setFilterAmount] = useState(0);

  const [isGetFilterOptionsLoading, setIsGetFilterOptionsLoading] =
    useState(false);

  const [lastFilter, setLastFilter] = useState<FormValuesI | undefined>(
    undefined,
  );

  const [filterTags, setFilterTags] = useState<FilterTagsI>([]);

  const [filterOptions, setFilterOptions] = useState<FilterOptionsI>([]);

  const intl = useIntl();

  const { fetchModels, getTags } = useModels();

  const filterModels = async (
    formValues: FormValuesI,
    teamId: string,
    successCallback?: () => void,
  ) => {
    try {
      const { status, date, tags } = formValues;

      const [startDate, endDate] = (date as DateFieldI) || [];

      const startDateTimestamp = startDate
        ? toTimestamp(startDate._d)
        : undefined;
      const endDateTimestamp = endDate ? toTimestamp(endDate._d) : undefined;

      await fetchModels(
        teamId || '',
        undefined,
        status as string[],
        startDateTimestamp,
        endDateTimestamp,
        tags as (string | number)[],
      );

      if (successCallback) {
        successCallback();
      }
    } catch (error) {
      message.error(intl.formatMessage({ id: 'DRAWER_FILTER_ERROR_FILTER' }));
    } finally {
      proxySetLastFilter(formValues);
    }
  };

  const removeFilterTag = async (filterTag: FilterTagI, teamId: string) => {
    try {
      const { type, value } = filterTag;

      const previousFieldValues = lastFilter
        ? (lastFilter[type] as (string | number)[])
        : [];

      const newFieldValue = previousFieldValues.filter(
        (eachValue: string | number) => eachValue !== value,
      );

      const newLastFilter = {
        ...lastFilter,
        [type]: newFieldValue,
      } as FormValuesI;

      await filterModels(newLastFilter, teamId);

      setLastFilter(newLastFilter);
    } catch (error) {
      console.log(intl.formatMessage({ id: 'DRAWER_FILTER_ERROR_REMOVE_TAG' }));
    }
  };

  const getValueName = (id: string | number) => {
    const allFilters = [...filterOptions, ...fixedFilters];

    const allOptions = allFilters.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc: FilterOptionI[], current: any) => {
        const currentOptions = current.options;

        return [...acc, ...currentOptions];
      },
      [],
    );

    const foundOption = allOptions.find(({ value }) => value === id);

    return foundOption?.name;
  };

  const getFilterOptions = async (teamId: string) => {
    try {
      setIsGetFilterOptionsLoading(true);

      const filters = [
        {
          categoryId: '1',
          title: intl.formatMessage({ id: 'DRAWER_FILTER_CLIENT' }),
          dotColor: '#FFDEBF',
        },
        {
          categoryId: '2',
          title: intl.formatMessage({ id: 'DRAWER_FILTER_PRODUCT' }),
          dotColor: '#FFD0D0',
        },
      ];

      const formattedFilters = [];

      for (const filter of filters) {
        const { categoryId, title, dotColor } = filter;

        const { tags } = (await getTags(categoryId, teamId || '')) || {
          tags: [],
        };

        const formattedTags = tags.map(({ name, id }: TagResponseI) => ({
          name,
          value: id,
          dotColor,
        }));

        const formattedFilter = {
          title,
          options: formattedTags,
        };

        formattedFilters.push(formattedFilter);
      }

      setFilterOptions([...formattedFilters]);
    } catch (error) {
      message.error(
        intl.formatMessage({ id: 'DRAWER_FILTER_ERROR_GET_FILTERS' }),
      );
    } finally {
      setIsGetFilterOptionsLoading(false);
    }
  };

  const getFilterAmount = () => {
    if (!lastFilter) {
      setFilterAmount(0);
      return;
    }

    const formValues = Object.entries(lastFilter);

    const fieldsToCountEachValue = ['status', 'tags'];

    const filterAmount = formValues.reduce(
      (
        accumulator: number,
        [fieldName, currentValue]: (string | FormValueI)[],
      ) => {
        const isInvalid = !currentValue;
        const isEmpty = currentValue?.length === 0;

        if (isInvalid || isEmpty) {
          return accumulator;
        }

        const shouldConsiderTheLength = fieldsToCountEachValue.includes(
          fieldName as string,
        );

        if (shouldConsiderTheLength) {
          const valueAmount = currentValue.length;

          return accumulator + valueAmount;
        }

        return accumulator + 1;
      },
      0,
    );

    setFilterAmount(filterAmount);
  };

  const updateFilterTags = () => {
    if (!lastFilter) {
      setFilterTags([]);
      return;
    }

    const { status, tags } = lastFilter;

    const filtersToSetTags = [
      { type: 'status', values: status },
      { type: 'tags', values: tags },
    ];

    const newFilterTags = filtersToSetTags.reduce(
      (accumulatedTags: FilterTagsI, currentFilter: FilterToSetTagsI) => {
        const { type, values } = currentFilter;

        const formattedTags = (values as string[])?.map((value) => {
          const name = getValueName(value) || '';

          return {
            type,
            value,
            name,
          };
        });

        return [...accumulatedTags, ...(formattedTags || [])];
      },
      [],
    );

    setFilterTags(newFilterTags);
  };

  const proxySetLastFilter = (newValue: FormValuesI | undefined) => {
    setLastFilter(newValue);
  };

  useEffect(() => {
    updateFilterTags();

    getFilterAmount();
  }, [lastFilter]);

  return (
    <FilterModelsContext.Provider
      value={{
        lastFilter,
        filterTags,
        filterOptions,
        filterAmount,
        isGetFilterOptionsLoading,

        proxySetLastFilter,
        getFilterOptions,
        removeFilterTag,
        filterModels,
      }}
    >
      {children}
    </FilterModelsContext.Provider>
  );
}

export function useFilterModels(): FilterModelsContextI {
  const context = useContext(FilterModelsContext);

  return context;
}
