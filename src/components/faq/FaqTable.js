import React from "react";
import {
  TableCell,
  TableBody,
  TableRow,
  Avatar,
} from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ProductDrawer from "../drawer/ProductDrawer";
import ShowHideButton from "../table/ShowHideButton";
import EditDeleteButton from "../table/EditDeleteButton";
import useToggleDrawer from "../../hooks/useToggleDrawer";

const FaqTable = () => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <ProductDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
      </TableBody>
    </>
  );
};

export default React.memo(FaqTable);
