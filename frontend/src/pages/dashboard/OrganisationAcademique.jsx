import React, { useEffect, useState } from "react";


const CoursesPage = () => {
    return (
        <>
            <div className="content_wrapper">
                <div>
                    <div>
                        <h1>Organisation Académiques</h1>
                        <p>Consultez votre emploi du temps et les dates importantes</p>
                    </div>
                </div>
                <div>
                     <h3 style={{fontSize:"20px", color:"#22303A", marginBottom:"25px"}}><i className="fa-solid fa-clock" style={{fontSize:"20px"}}></i> Emploi du temps hebdomadaire</h3>
                     <div className="section-00" style={{paddingLeft:"30px", borderLeft:"4px solid #0E7872"}}>
                        <span style={{marginBottom:"20px", display:"block",color:"#22303A"}}>Lundi</span>
                        <div className="d-flex gap-5 align-items-center mb-2" style={{background: "#F9FAFBCC", padding:"20px 25px", borderRadius:"15px", boxShadow:"1px 1px 3px #cccccc6e"}}>
                            <p style={{color: "#6B747B"}}>08:00 - 10:00</p>
                            <div>
                                <p className="mb-1">Algorithmique <span style={{background:"#B4D5D3", color:"#004953", padding:"2px 10px 4px", fontSize:"14px", borderRadius:"3px", marginLeft:"10px"}}>Cours</span></p>
                                <p className="mb-0" style={{fontSize:"15px", color: "#6B747B", marginLeft:"-5px"}}><i className="fa-solid fa-location-dot"></i>Amphi A</p>
                            </div>
                        </div>
                        <div className="d-flex gap-5 align-items-center mb-2" style={{background: "#F9FAFBCC", padding:"20px 25px", borderRadius:"15px", boxShadow:"1px 1px 3px #cccccc6e"}}>
                            <p style={{color: "#6B747B"}}>08:00 - 10:00</p>
                            <div>
                                <p className="mb-1">Algorithmique <span style={{background:"#B4D5D3", color:"#004953", padding:"2px 10px 4px", fontSize:"14px", borderRadius:"3px", marginLeft:"10px"}}>Cours</span></p>
                                <p className="mb-0" style={{fontSize:"15px", color: "#6B747B", marginLeft:"-5px"}}><i className="fa-solid fa-location-dot"></i>Amphi A</p>
                            </div>
                        </div>
                        <div className="d-flex gap-5 align-items-center mb-2" style={{background: "#F9FAFBCC", padding:"20px 25px", borderRadius:"15px", boxShadow:"1px 1px 3px #cccccc6e"}}>
                            <p style={{color: "#6B747B"}}>08:00 - 10:00</p>
                            <div>
                                <p className="mb-1">Algorithmique <span style={{background:"#B4D5D3", color:"#004953", padding:"2px 10px 4px", fontSize:"14px", borderRadius:"3px", marginLeft:"10px"}}>Cours</span></p>
                                <p className="mb-0" style={{fontSize:"15px", color: "#6B747B", marginLeft:"-5px"}}><i className="fa-solid fa-location-dot"></i>Amphi A</p>
                            </div>
                        </div>
                     </div>
                     <div className="section-00" style={{paddingLeft:"30px", borderLeft:"4px solid #0E7872"}}>
                        <span style={{marginBottom:"20px", display:"block",color:"#22303A"}}>Mardi</span>
                        <div className="d-flex gap-5 align-items-center mb-2" style={{background: "#F9FAFBCC", padding:"20px 25px", borderRadius:"15px", boxShadow:"1px 1px 3px #cccccc6e"}}>
                            <p style={{color: "#6B747B"}}>08:00 - 10:00</p>
                            <div>
                                <p className="mb-1">Algorithmique <span style={{background:"#B4D5D3", color:"#004953", padding:"2px 10px 4px", fontSize:"14px", borderRadius:"3px", marginLeft:"10px"}}>Cours</span></p>
                                <p className="mb-0" style={{fontSize:"15px", color: "#6B747B", marginLeft:"-5px"}}><i className="fa-solid fa-location-dot"></i>Amphi A</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </>
    );
};

export default CoursesPage;