import React, { ReactNode } from "react";
import "./with-spinner.styles.scss";
import { ReactComponent as Spinner } from "./spinner.svg";

type WithSpinnerProps = {
  isLoading: boolean;
  children: ReactNode;
};

const WithSpinner = ({ isLoading, children }: WithSpinnerProps) => (
  <>
    {isLoading && <Spinner className="spinner" />}
    {children}
  </>
);

export default WithSpinner;
