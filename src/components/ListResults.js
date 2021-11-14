import { Stack } from "@mui/material";
import React from "react";
import Querys from "./Querys";

const ListResults = ({ data }) => {
  const arrayData = Object.entries(data);


  return (
    <Stack spacing={2}>
      {arrayData.map((item) => (
        <Querys title={item[1].title} extract={item[1].extract} categories={item[1].categories} description={item[1].description} key={item[0]} pageId={item[1].pageid}/>
      ))}
    </Stack>
  );
};

export default ListResults;
