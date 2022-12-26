import { useContext, useState } from 'react';
import Context from '../../context/context';
import StyledCategoryFilter from './CategoryFilter.style';
const CategoryFilter = (): JSX.Element => {
  //context
  const value = useContext(Context);
  const categories = value.categories;
  const setCategory = value.setCategory;

  return (
    <StyledCategoryFilter>
      <div>
        <ul>
          {categories?.map((cat) => {
            return (
              <li
                onClick={async () => {
                  setCategory(cat);
                }}
                key={cat}>
                {cat}
              </li>
            );
          })}
          <li
            onClick={() => {
              setCategory(undefined);
            }}>
            All catégories
          </li>
        </ul>
      </div>
    </StyledCategoryFilter>
  );
};
export default CategoryFilter;
