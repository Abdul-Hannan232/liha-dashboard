import React, { useState } from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ShowHideButton from "../table/ShowHideButton";
import CategoryDrawer from "../drawer/CategoryDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";

const CategoryTable = ({ categories }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  // const [defaultVal , setDefaultVal] = useState('')
  // console.log('defaultVal------------ ', defaultVal);
  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <CategoryDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {/* {console.log('c----------', categories)} */}
        {categories?.map((parent) => (
          <TableRow key={parent?.id || "fallbackKey"}>
            {/* <TableCell className="font-semibold uppercase text-xs">
              {parent?.id}
            </TableCell> */}
            <TableCell className="font-semibold uppercase text-xs">
              {/* Category {parent?.id} */}
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

            {/* <TableCell className="font-medium text-sm">
              <div className="flex flex-row">
                <span
                  className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                >
                  {parent.children}
                </span>
              </div>
            </TableCell> */}
            <TableCell className="text-sm ">
              {parent.children?.length ?? 0}
            </TableCell>

            {/* <TableCell className="text-sm">{parent.type}</TableCell> */}
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
