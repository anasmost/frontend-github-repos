import React from "react";
import "./with-spinner.styles.scss";
import { ReactComponent as Spinner } from "./spinner.svg";

const WithSpinner = ({ isLoading, children }) => (
  <>
    {isLoading && <Spinner className="spinner" />}
    {children}
  </>
);

export default WithSpinner;
