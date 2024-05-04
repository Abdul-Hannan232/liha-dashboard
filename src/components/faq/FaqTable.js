import React from "react";
// import { TableCell, TableBody, TableRow, Avatar } from "@windmill/react-ui";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
// import ProductDrawer from "../drawer/ProductDrawer";
// import ShowHideButton from "../table/ShowHideButton";
import EditDeleteButton from "../table/EditDeleteButton";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import FaqDrawer from "../drawer/FaqDrawer";

const FaqTable = () => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <FaqDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        <TableRow>
        <TableCell>
              <span className="text-xs capitalize font-semibold">
                {" "}
                question...
              </span>
            </TableCell>
            <TableCell>
              <span className="text-xs capitalize font-semibold">
                {" "}
                ans...
              </span>
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id="1"
                title="{product.title}"
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default React.memo(FaqTable);
