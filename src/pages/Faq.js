// import React, { useContext, useEffect, useState } from "react";
import React, { useContext} from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  // Select,
  // Input,
  Button,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";
import { FiPlus } from "react-icons/fi";
import useAsync from "../hooks/useAsync";
import useFilter from "../hooks/useFilter";
import NotFound from "../components/table/NotFound";
import Loading from "../components/preloader/Loading";
import ProductServices from "../services/ProductServices";
import { SidebarContext } from "../context/SidebarContext";
import MainDrawer from "../components/drawer/MainDrawer";
import ProductDrawer from "../components/drawer/ProductDrawer";
import FaqTable from "../components/faq/FaqTable";
import faqData from "../utils/faq";

const Faq = () => {
  const {
    toggleDrawer,
    currentPage,
    handleChangePage,
    searchText,
    category,
    // setSearchText,
    // setCategory,
    // searchRef,
    // setSortedField,
    handleSubmitForAll,
    sortedField,
    limitData,
  } = useContext(SidebarContext);

  const { data, loading } = useAsync(
    () =>
      ProductServices.getAllProducts({
        page: currentPage,
        limit: limitData,
        category: category,
        title: searchText,
        price: sortedField,
      }),
    []
  );



  // function to clear filters

  // const { serviceData } = useFilter(data?.products);
  const { serviceData } = useFilter(faqData);
// console.log("serviceData",serviceData);
  return (
    <>
      <MainDrawer>
        <ProductDrawer />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitForAll}
            className="py-3  justify-between grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <h1 className="text-slate-600 text-2xl font-bold">Faq</h1>

            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button
                onClick={toggleDrawer}
                className=" w-full rounded-md h-12"
              >
                <span className="mr-3">
                  <FiPlus />
                </span>
                Add Faq
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {/* </Card> */}

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Question</TableCell>
                <TableCell>Answer</TableCell>
                <TableCell>View</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <FaqTable faqs={faqData} />
            {/* <FaqTable faqs={data?.products} /> */}
          </Table>
          <TableFooter>
            <Pagination
              totalResults={faqData.length}
              // totalResults={data?.totalDoc}
              resultsPerPage={15}
              onChange={handleChangePage}
              label="Product Page Navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Product" />
      )}
    </>
  );
};

export default Faq;
