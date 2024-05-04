import React, { useContext } from 'react';
// import { CSVDownloader } from 'react-papaparse';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  // Select,
  // Input,
  Card,
  CardBody,
  Pagination,
} from '@windmill/react-ui';
// import { IoCloudDownloadOutline } from 'react-icons/io5';

// import orderData from '../utils/orders';
import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
import NotFound from '../components/table/NotFound';
import OrderServices from '../services/OrderServices';
import Loading from '../components/preloader/Loading';
import OrderTable from '../components/order/OrderTable';
// import PageTitle from '../components/Typography/PageTitle';
import { SidebarContext } from '../context/SidebarContext';
// import { FaFilterCircleXmark } from "react-icons/fa6";


const Orders = () => {
  const {
    time,
    currentPage,
    // setTime,
    // setSearchText,
    // searchRef,
    // setSortedField,
    // setStatus,
    status,
    searchText,
    handleChangePage,
    handleSubmitForAll,
    resultsPerPage,
  } = useContext(SidebarContext);

  const { data, loading } = useAsync(() =>
    OrderServices.getAllOrders({
      contact: searchText,
      status,
      page: currentPage,
      limit: resultsPerPage,
      day: time,
    })
  );

  const { dataTable, serviceData } = useFilter(data.orders);

  // function to clear filters
  // const handleClearFilters = () => {
  //   // console.log("Clearing filters");
  //   setSearchText('')
  //   setStatus('')
  //   setTime(null)
  // };

  return (
    <>
      {/* <PageTitle>Orders</PageTitle> */}
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitForAll}
            // className="py-3 justify-between grid gap-4 lg:gap-6 xl:gap-6 md:grid-cols-4 xl:grid-cols-4"
            className="py-3 justify-between grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
                        <h1 className="text-slate-600 text-2xl font-bold">Orders</h1>
                        <h1 className="base-color text-xl font-bold">Total Value: $13422</h1>

            {/* <div>
              <Input
                ref={searchRef}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="search"
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                placeholder="Search by phone"
              />
            </div>
            <div>
              <Select
                onChange={(e) => setStatus(e.target.value)}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
              >
                <option value="Status" defaultValue hidden>
                  Status
                </option>
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Cancel">Cancel</option>
              </Select>
            </div>
            <div>
              <Select
                onChange={(e) => setTime(e.target.value)}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
              >
                <option value="Order limits" defaultValue hidden>
                  Order limits
                </option>
                <option value="5">Last 5 days orders</option>
                <option value="7">Last 7 days orders</option>
                <option value="15">Last 15 days orders</option>
                <option value="30">Last 30 days orders</option>
              </Select>
            </div>
            <div
              onClick={handleClearFilters}
              className={` cursor-pointer flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500`}
            >
              <FaFilterCircleXmark />
            </div> */}

            {/* <div>
              <CSVDownloader data={orderData} filename={'orders'}>
                <button
                  type="button"
                  className="flex items-center justify-center text-sm leading-5 h-12 text-center transition-colors duration-150 font-medium focus:outline-none px-6 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto"
                >
                  Download all Orders
                  <span className="ml-2 text-base">
                    <IoCloudDownloadOutline />
                  </span>
                </button>
              </CSVDownloader>
            </div> */}
          </form>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                {/* <TableCell>SR NO</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Shipping Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell className="text-center">Status</TableCell>
                <TableCell className="text-center">Action</TableCell>
                <TableCell className="text-right">Invoice</TableCell> */}
                 <TableCell>ORDER NUMBER</TableCell>
                <TableCell>PRODUCTS</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>CUSTOMER EMAIL</TableCell>
                <TableCell className="text-center">STATUS</TableCell>
                <TableCell className="text-center">Actions</TableCell>
              </tr>
            </TableHeader>
            <OrderTable orders={dataTable} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={data?.totalDoc}
              resultsPerPage={10}
              onChange={handleChangePage}
              label="Table navigation"
              
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Order" />
      )}
    </>
  );
};

export default Orders;
