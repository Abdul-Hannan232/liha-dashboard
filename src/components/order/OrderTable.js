import React from 'react';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';

import Status from '../table/Status';
import { FiZoomIn } from 'react-icons/fi'; 
import Tooltip from '../tooltip/Tooltip';
import SelectStatus from '../form/SelectStatus';
import EditDeleteButton from '../table/EditDeleteButton';

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {/* {console.log(orders)} */}
        {/* {JSON.parse(orders)?.map((order, i) => ( */}
        {orders?.map((order, i) => (
        
          <TableRow key={i + 1}>
              {console.log(order)}
            <TableCell>
              {/* <span className="font-semibold uppercase text-xs">{i + 1}</span> */}
              <span className="font-semibold uppercase text-xs">#uiagseu2</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
              Goat Steaks
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

            {/* <TableCell>
              <span className="text-sm">{order.address.substring(0, 25)}</span>
            </TableCell>
            <TableCell>
              {' '}
              <span className="text-sm">{order.contact}</span>{' '}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                {order.paymentMethod}
              </span>
            </TableCell> */}
            {/* <TableCell>
              {' '}
              <span className="text-sm font-semibold">
                ${Math.round(order.total)}.00
              </span>{' '}
            </TableCell> */}
            
            {/* <TableCell className="text-center"> */}
              {/* <SelectStatus id={order._id} order={order} /> */}
              {/* <SelectStatus id={order.id} order={order} />
            </TableCell> */}
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
                title={order.title}
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
