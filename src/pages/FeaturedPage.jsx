import { Table } from "ka-table";
import { SortingMode } from "ka-table/enums";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../Componenet/Loader";

const SortingDemo = () => {
  const {
    data: dataArray,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["topBlogs"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/feature`);
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
      <h1 className=" text-2xl font-medium text-gray-800 text-center py-20 bg-slate-100 mb-3">
        Featured Blogs
      </h1>
    <div className="">
    <div className="mx-auto w-[98%] overflow-x-auto border border-gray-300 mb-20 mt-10">
        <Table
          columns={[
            {
              key: "title",
              style: {
                width: 550,
                textAlign: "center",

                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Title",
            },
            {
              key: "category",
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
