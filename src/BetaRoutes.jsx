/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const BetaRoute = () => {
    const isBeta = import.meta.env.VITE_IS_BETA
    if (isBeta == 'true') {
        return <Navigate to='/wip' replace />;
    }

  return <Outlet />;
};

export default BetaRoute;
