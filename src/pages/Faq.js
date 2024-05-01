import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
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
import ProductTable from "../components/product/ProductTable";
import MainDrawer from "../components/drawer/MainDrawer";
import ProductDrawer from "../components/drawer/ProductDrawer";
import FaqTable from "../components/faq/FaqTable";

const Faq = () => {
  const {
    toggleDrawer,
    currentPage,
    handleChangePage,
    searchText,
    setSearchText,
    category,
    setCategory,
    searchRef,
    handleSubmitForAll,
    sortedField,
    setSortedField,
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

  const { serviceData } = useFilter(
    data?.products
  );


  return (
    <>
      {/* <PageTitle>Products</PageTitle> */}
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
              <Button onClick={toggleDrawer} className="bg-[#50d71e] w-full rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                Add Product
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
                <TableCell>NAME</TableCell>
                <TableCell>IMAGES</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>PRODUCT DETAILS</TableCell>
                <TableCell>TAGS</TableCell>
                <TableCell className="text-center">ENABLES</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <FaqTable faqs={data?.products} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={data?.totalDoc}
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
