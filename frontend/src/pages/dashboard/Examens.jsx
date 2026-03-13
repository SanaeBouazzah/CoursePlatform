import React, { useEffect, useState } from "react";
import Sidebar from "./../../components/Sidebar";
import Tabs from "../../components/Tabs";

const ExamensPage = () => {
    return (
        <>
            <div className="content_wrapper">
                <div>
                    <h1><i className="fa-solid fa-circle-exclamation" style={{ fontSize: "30px", color: "#CAAD69" }}></i> Dates Examens</h1>
                </div>
                <div>
                    <div className="section-00" style={{}}>
                        <div className="d-flex gap-5 align-items-center mb-3" style={{ background: "#F9FAFBCC", padding: "20px 25px", borderRadius: "15px", boxShadow: "1px 1px 3px #cccccc6e" }}>
                            <div className="icon-00" style={{ background: "#FFF7ED", color: "#CAAD69", padding: "20px", borderRadius: "10px", boxShadow: "1px 1px 2px #d4d4d48f" }}>
                                <i className="fa-solid fa-calendar"></i>
                            </div>
                            <div>
                                <p className="mb-2">Algorithmique <span style={{ background: "transparent", color: "#CAAD69", padding: "2px 10px 4px", fontSize: "14px", borderRadius: "15px", marginLeft: "10px", border:"1px solid #CAAD69"}}>Partial</span></p>
                                <div style={{ fontSize: "15px", color: "#6B747B", marginLeft: "-5px" }}>
                                    <span className="d-block mb-1"><i className="fa-solid fa-calendar" style={{marginRight:"5px"}}></i> 15 Fevrier 2026</span>
                                    <span className="d-block mb-1"><i className="fa-solid fa-circle-exclamation"  style={{marginRight:"5px"}}></i> 9:00 - 11:30</span>
                                    <span className="d-block mb-1"><i className="fa-solid fa-location-dot"  style={{marginRight:"5px"}}></i> Amphi A</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-5 align-items-center mb-3" style={{ background: "#F9FAFBCC", padding: "20px 25px", borderRadius: "15px", boxShadow: "1px 1px 3px #cccccc6e" }}>
                            <div className="icon-00" style={{ background: "#FFF7ED", color: "#CAAD69", padding: "20px", borderRadius: "10px", boxShadow: "1px 1px 2px #d4d4d48f" }}>
                                <i className="fa-solid fa-calendar"></i>
                            </div>
                            <div>
                                <p className="mb-2">Algorithmique <span style={{ background: "transparent", color: "#CAAD69", padding: "2px 10px 4px", fontSize: "14px", borderRadius: "15px", marginLeft: "10px", border:"1px solid #CAAD69"}}>Partial</span></p>
                                <div style={{ fontSize: "15px", color: "#6B747B", marginLeft: "-5px" }}>
                                    <span className="d-block mb-1"><i className="fa-solid fa-calendar" style={{marginRight:"5px"}}></i> 15 Fevrier 2026</span>
                                    <span className="d-block mb-1"><i className="fa-solid fa-circle-exclamation"  style={{marginRight:"5px"}}></i> 9:00 - 11:30</span>
                                    <span className="d-block mb-1"><i className="fa-solid fa-location-dot"  style={{marginRight:"5px"}}></i> Amphi A</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-5 align-items-center mb-3" style={{ background: "#F9FAFBCC", padding: "20px 25px", borderRadius: "15px", boxShadow: "1px 1px 3px #cccccc6e" }}>
                            <div className="icon-00" style={{ background: "#FFF7ED", color: "#CAAD69", padding: "20px", borderRadius: "10px", boxShadow: "1px 1px 2px #d4d4d48f" }}>
                                <i className="fa-solid fa-calendar"></i>
                            </div>
                            <div>
                                <p className="mb-2">Algorithmique <span style={{ background: "transparent", color: "#CAAD69", padding: "2px 10px 4px", fontSize: "14px", borderRadius: "15px", marginLeft: "10px", border:"1px solid #CAAD69"}}>Partial</span></p>
                                <div style={{ fontSize: "15px", color: "#6B747B", marginLeft: "-5px" }}>
                                    <span className="d-block mb-1"><i className="fa-solid fa-calendar" style={{marginRight:"5px"}}></i> 15 Fevrier 2026</span>
                                    <span className="d-block mb-1"><i className="fa-solid fa-circle-exclamation"  style={{marginRight:"5px"}}></i> 9:00 - 11:30</span>
                                    <span className="d-block mb-1"><i className="fa-solid fa-location-dot"  style={{marginRight:"5px"}}></i> Amphi A</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamensPage;