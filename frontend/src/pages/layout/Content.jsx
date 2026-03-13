import React, { useEffect, useState } from "react";
import Sidebar from "./../../components/Sidebar";
import { Outlet } from "react-router-dom";


const CoursesPage = () => {
    return (
        <>
            <div className="d-flex justify-content-start">
                <Sidebar />
                <div className="content_wrapper">
                     <Outlet />
                </div>
            </div>
        </>
    );
};

export default CoursesPage;