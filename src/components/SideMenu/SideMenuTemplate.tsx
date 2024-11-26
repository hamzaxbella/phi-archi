'use client';

import { SideMenuProps } from '@/lib/interface';
import { useFilter } from '@/context/FilterContext';

const SideMenuTemplate = ({ filters }: SideMenuProps) => {
  const { selectedFilter, setSelectedFilter } = useFilter();

  return (
    <div>
      <ul>
        {filters.map((filter, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              selectedFilter === filter.slug.current ? 'text-blue-500' : ''
            }`}
            onClick={() => setSelectedFilter(filter.slug.current)}
          >
            {filter.slug.current}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenuTemplate;
