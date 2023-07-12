import React, { useState } from "react";
import { Paginator } from "primereact/paginator";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

export default function BasicPaginator({
  currentPage,
  totalPages,
  data,
  onPageChange,
  first,
  rows,
}) {
  return (
    <Paginator
      first={first}
      rows={20}
      totalRecords={data.total_results}
      onPageChange={onPageChange}
    />
  );
}
