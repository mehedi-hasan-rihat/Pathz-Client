import { Table } from "ka-table";
import { SortingMode, SortDirection } from "ka-table/enums";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../Componenet/Loader";
import PageTitle from "../Componenet/PageTitle";
import { Helmet } from "react-helmet-async";

const SortingDemo = () => {
  const {
    data: dataArray,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["topBlogs"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/feature`);
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="text-red-500 flex justify-center items-center my-24 text-xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="">
         <Helmet>
              <title>Pathz-| Featured page</title>
            </Helmet>
      <PageTitle title={"⭐ Featured Adventures"} subTitle={'Discover the top 10 must-read travel stories and guides handpicked for you. Explore the journeys that have inspired countless travelers around the world!'}/>
    <div className="">
    <div className="mx-auto w-[80%] overflow-x-auto border border-gray-300 mb-20 mt-10">
        <Table
          columns={[
            {
              key: "title",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 680,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Title",
            },
            {
              key: "category",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 380,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Category",
            },
            {
              key: "location",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 450,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Location",
            },
            {
              key: "userInfo.name",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 520,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Bloger Name",
            },
          ]}
          data={dataArray}
          rowKeyField="_id"
          sortingMode={SortingMode.Single}
          childComponents={{
            dataRow: {
              elementAttributes: ({ rowData }) => ({
                style: {
                  backgroundColor:
                    rowData.idx % 2 === 0
                      ? "#F9FAFB"
                      : "#FFFFFF", 
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                  overflowX: "auto"
                },
                title: `${rowData.title}: ${rowData.category}`,
              }),
            },
          }}
        />
      </div>
    </div>
    </div>
  );
};

export default SortingDemo;
