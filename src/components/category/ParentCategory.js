import React from 'react';

import useAsync from '../../hooks/useAsync';
import CategoryServices from '../../services/CategoryServices';


const ParentCategory = ({ register, setValue }) => {
  const { data } = useAsync(CategoryServices.getAllCategory); 

  React.useEffect(() => {
    if (data && data.length > 0) {
      setValue('category_id', data[0].id); // Set the value of the select element
    }
  }, [data, setValue]);
  return (
    <>
    {data?.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </>
  );
};

export default ParentCategory;
