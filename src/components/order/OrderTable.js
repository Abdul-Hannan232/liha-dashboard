import React from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import Status from "../table/Status";
import SelectStatus from "../form/SelectStatus";
import EditDeleteButton from "../table/EditDeleteButton";
import MainModal from "../modal/MainModal";

const OrderTable = ({ orders }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} title={title} />
      <TableBody>
        {orders?.map((order, i) => (
          <TableRow key={order.id}>
           
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                #on{order.invoice}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {JSON.parse(order.cart).map(item => item.title).join(", ")}


                {/* {dayjs(order.createdAt).format('MMM D, YYYY')} */}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm"> ${Math.round(order.total)}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm"> {order.email}</span>
            </TableCell>

            <TableCell className="text-center text-xs">
              <Status status={order.status} />
            </TableCell>

           

            <TableCell className="text-center">
              <SelectStatus id={order.id} order={order} />
            </TableCell>
            {/* <TableCell className="text-right flex justify-end">
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                {' '}
                <Link to={`/order/${order.id}`}>
                  <Tooltip
                    id="view"
                    Icon={FiZoomIn}
                    title="View Invoice"
                    bgColor="#34D399"
                  />
                </Link>
              </div>
            </TableCell> */}
            <TableCell>
              <EditDeleteButton
                id={order.id}
                title={order.id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                action="orderAction"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
