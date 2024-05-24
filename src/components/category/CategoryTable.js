// import React, { useEffect, useState } from "react";
// import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";

// import MainModal from "../modal/MainModal";
// import MainDrawer from "../drawer/MainDrawer";
// import ShowHideButton from "../table/ShowHideButton";
// import CategoryDrawer from "../drawer/CategoryDrawer";
// import useToggleDrawer from "../../hooks/useToggleDrawer";
// import EditDeleteButton from "../table/EditDeleteButton";
// import ProductServices from "../../services/ProductServices";
// import useAsync from "./../../hooks/useAsync";

// const CategoryTable = ({ categories }) => {
//   const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
//   const [id, setiD] = useState(null);
//   const { data, loading } = useAsync(() =>
//     ProductServices.getProductsByCategory(id, "type")
//   );

//   const abc = (d) => {
//     setiD(d);
//     return data.length
//   };

//   // useEffect(() => {
//   //   categories.forEach((category) => {
//   //  useAsync(ProductServices.getProductsByCategory(category.id, "type").then(
//   //         (data) =>{
//   //           setProductData((prevData) => ({
//   //             ...prevData,
//   //             [category.id]: data,
//   //           }))
//   //         }
//   //  ))

//   //       getDtaat()

//   //   });
//   // }, [categories]);

//   return (
//     <>
//       <MainModal id={serviceId} title={title} />
//       <MainDrawer>
//         <CategoryDrawer id={serviceId} />
//       </MainDrawer>

//       <TableBody>
//         {/* {console.log('c----------', categories)} */}
//         {categories?.map((parent) => (
//           <TableRow key={parent?.id || "fallbackKey"}>
//             {/* <TableCell className="font-semibold uppercase text-xs">
//               {parent?.id}
//             </TableCell> */}
//             <TableCell className="font-semibold uppercase text-xs">
//               {/* Category {parent?.id} */}
//               {parent.name}
//             </TableCell>
//             <TableCell>
//               <Avatar
//                 size="large"
//                 className="hidden mr-3 md:block bg-gray-50 p-1"
//                 src={parent.icon}
//                 alt={parent.parent}
//               />
//             </TableCell>

//             <TableCell className="text-sm ">{abc(parent.id)} </TableCell>
//             {/* <TableCell className="text-sm ">{} 00</TableCell> */}

//             <TableCell>
//               <ShowHideButton id={parent.id} status={parent.status} />
//             </TableCell>

//             <TableCell>
//               <EditDeleteButton
//                 id={parent.id}
//                 title={parent.parent}
//                 handleUpdate={handleUpdate}
//                 handleModalOpen={handleModalOpen}
//               />
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </>
//   );
// };

// export default CategoryTable;


import React, { useEffect, useState } from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ShowHideButton from "../table/ShowHideButton";
import CategoryDrawer from "../drawer/CategoryDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import ProductServices from "../../services/ProductServices";

const CategoryTable = ({ categories }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataForCategory = async (categoryId) => {
      setLoading(true);
      try {
        const data = await ProductServices.getProductsByCategory(categoryId, "type");
        // console.log(data);
        setProductData((prevData) => ({
          ...prevData,
          [categoryId]: data.length,
        }));
      } catch (error) {
        console.error("Error fetching data for category:", categoryId, error);
      } finally {
        setLoading(false);
      }
    };

    categories.forEach((category) => {
      fetchDataForCategory(category.id);
    });
  }, [categories]);

  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <CategoryDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {categories?.map((parent) => (
          <TableRow key={parent?.id || "fallbackKey"}>
            <TableCell className="font-semibold uppercase text-xs">
              {parent.name}
            </TableCell>
            <TableCell>
              <Avatar
                size="large"
                className="hidden mr-3 md:block bg-gray-50 p-1"
                src={parent.icon}
                alt={parent.parent}
              />
            </TableCell>

            <TableCell className="text-sm ">
              {loading ? "Loading..." : productData[parent.id] || 0}
            </TableCell>

            <TableCell>
              <ShowHideButton id={parent.id} status={parent.status} />
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={parent.id}
                title={parent.parent}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CategoryTable;
