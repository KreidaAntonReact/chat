import { memo } from 'react';

import { ListOptionsFilters } from '@/features/change-filter-chats/lib';
import { useChangeFilters } from '@/features/change-filter-chats/model';
import { Radio } from '@/shared/ui/radio';


const MemoRadio = memo(Radio);

export const ChangeFiltersChats = () => {
  const [currentOption, handleOnChange] = useChangeFilters({
    defaultValue: 'all'
  });

  return (
    <div className='
        chat:flex chat:items-center
        chat:justify-around chat:gap-5
        chat:bg-brown/30 chat:rounded-2xl
        chat:px-2 chat:py-1 chat:w-full
        chat:dark:bg-dark
    '>
      { ListOptionsFilters.map((option) => (
        <MemoRadio
          key={option.id}
          name={option.value}
          label={option.label}
          value={option.value}
          isChecked={currentOption === option.value}
          onChange={handleOnChange}
          className="chat:grow chat:basis-0"
        />
      ))}
    </div>
  );
};
