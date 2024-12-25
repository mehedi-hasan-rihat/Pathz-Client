import { Table } from "ka-table";
import { SortingMode } from "ka-table/enums";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../Componenet/Loader";
import "./FeatureTable.css";

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
      <h1 className=" text-2xl font-medium text-gray-800 text-center py-20 bg-slate-100 mb-6">
        Featured Blogs
      </h1>
      <div className="mx-auto max-w-5xl rounded-lg shadow-xl ">
        <Table
          columns={[
            {
              key: "userInfo.name",
              style: {
                width: 220,
                textAlign: "center",

                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Name",
            },
            {
              key: "title",
              style: {
                width: 100,
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
                width: 180,
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
                width: 150,
                textAlign: "center",

                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Location",
            },
            {
              key: "userInfo.date",
              style: {
                width: 180,
                textAlign: "center",

                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Date",
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
                },
                title: `${rowData.title}: ${rowData.category}`,
              }),
            },
          }}
        />
      </div>
    </div>
  );
};

export default SortingDemo;
