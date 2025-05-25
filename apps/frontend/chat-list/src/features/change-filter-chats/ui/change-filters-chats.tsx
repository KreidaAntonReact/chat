import { memo } from 'react';

import { ListOptionsFilters } from '@/features/change-filter-chats/lib';
import { useChangeFilters } from '@/features/change-filter-chats/model';
import { Radio } from '@/shared';


const MemoRadio = memo(Radio);

export const ChangeFiltersChats = () => {
  const [currentOption, handleOnChange] = useChangeFilters({
    defaultValue: 'all'
  });

  return (
    <div className='
        list:flex list:items-center
        list:justify-around list:gap-5
        list:bg-black list:rounded-2xl
        list:px-2 list:py-1 list:w-full
        list:dark:bg-dark
    '>
      { ListOptionsFilters.map((option) => (
        <MemoRadio
          key={option.id}
          name={option.value}
          label={option.label}
          value={option.value}
          isChecked={currentOption === option.value}
          onChange={handleOnChange}
          className="list:grow list:basis-0"
        />
      ))}
    </div>
  );
};
