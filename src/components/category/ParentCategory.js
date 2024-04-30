import React from 'react';

import useAsync from '../../hooks/useAsync';
import CategoryServices from '../../services/CategoryServices';


const ParentCategory = () => {
  const { data } = useAsync(CategoryServices.getAllCategory); //   console.log(value);
  return (
    <>
       {/* {console.log('ctegory', parent)} */}
     {data?.map((parent) => (
     
        <option key={`${parent.id}`} value={parent.parent}>
        {/* <option key={`${parent._id}-${parent.parent}`} value={parent.parent}> */}
          {parent?.parent}
        </option>
      ))}
    </>
  );
};

export default ParentCategory;
