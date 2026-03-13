import React, { useEffect, useState } from "react";
import Sidebar from "./../../components/Sidebar";
import Tabs from "../../components/Tabs";

const CoursesPage = () => {
    return (
        <>
            <div className="content_wrapper">
                <div>
                    <div className="d-flex align-items-start">
                        <i className="fa-solid fa-bullhorn mt-1" style={{
                            color: "#CAAD69", background: "#FAF7F0",
                            padding: "20px 40px 20px 20px", borderRadius: "5px", fontSize: "18px", marginRight: "10px"
                        }}></i>
                        <div>
                            <h1 className="mb-0">Annonces officielles</h1>
                            <p>Restez informé des actualités et événements importants</p>
                        </div>
                    </div>
                    <div className="mb-4" style={{border:"1px solid #CAAD69", borderLeftWidth:"6px", padding:"20px",
                        borderRadius:"8px"
                    }}>
                        <div className="d-flex justify-content-between">
                            <p><i className="fa-solid fa-thumbtack" style={{color:"#CAAD69"}}></i> Modification de l'emploi du temps - Semaine 7 
                            <span style={{color:"#CAAD69", border:"1px solid #CAAD69", background:"#FFF7ED", marginLeft:"25px",
                                padding:"0px 15px 4px", borderRadius:"20px"
                            }}>Épinglé</span></p>
                            <span style={{color:"#B91C1C", background:"#FEE2E2", padding:"3px 15px 0px", 
                                borderRadius:"20px", display:"inline-block", height:"34px"}}>Important</span>
                        </div>
                        <p>En raison d'un événement spécial, le cours d'algorithmique du lundi 17 février est déplacé au mercredi 19 février à 14h00 en Amphi
                            B. Merci de prendre note de ce changement.</p>
                        <div style={{color:"#6B747B"}}>
                            <i className="fa-solid fa-clock" style={{marginRight:"10px"}}></i>
                            <span style={{marginRight:"10px"}}>12 Février 2026 à 14:30</span>
                            <b style={{marginRight:"10px"}}>.</b>
                            <span>Direction des Études</span>
                        </div>
                    </div>
                    <div className="mb-4" style={{border:"1px solid #CAAD69", borderLeftWidth:"6px", padding:"20px",
                        borderRadius:"8px"
                    }}>
                        <div className="d-flex justify-content-between">
                            <p><i className="fa-solid fa-thumbtack" style={{color:"#CAAD69"}}></i> Modification de l'emploi du temps - Semaine 7 
                            <span style={{color:"#CAAD69", border:"1px solid #CAAD69", background:"#FFF7ED", marginLeft:"25px",
                                padding:"0px 15px 4px", borderRadius:"20px"
                            }}>Épinglé</span></p>
                            <span style={{color:"#B91C1C", background:"#FEE2E2", padding:"3px 15px 0px", 
                                borderRadius:"20px", display:"inline-block", height:"34px"}}>Important</span>
                        </div>
                        <p>En raison d'un événement spécial, le cours d'algorithmique du lundi 17 février est déplacé au mercredi 19 février à 14h00 en Amphi
                            B. Merci de prendre note de ce changement.</p>
                        <div style={{color:"#6B747B"}}>
                            <i className="fa-solid fa-clock" style={{marginRight:"10px"}}></i>
                            <span style={{marginRight:"10px"}}>12 Février 2026 à 14:30</span>
                            <b style={{marginRight:"10px"}}>.</b>
                            <span>Direction des Études</span>
                        </div>
                    </div>
                    <div className="mb-4" style={{border:"1px solid #CAAD69", borderLeftWidth:"6px", padding:"20px",
                        borderRadius:"8px"
                    }}>
                        <div className="d-flex justify-content-between">
                            <p><i className="fa-solid fa-thumbtack" style={{color:"#CAAD69"}}></i> Modification de l'emploi du temps - Semaine 7 
                            <span style={{color:"#CAAD69", border:"1px solid #CAAD69", background:"#FFF7ED", marginLeft:"25px",
                                padding:"0px 15px 4px", borderRadius:"20px"
                            }}>Épinglé</span></p>
                            <span style={{color:"#B91C1C", background:"#FEE2E2", padding:"3px 15px 0px", 
                                borderRadius:"20px", display:"inline-block", height:"34px"}}>Important</span>
                        </div>
                        <p>En raison d'un événement spécial, le cours d'algorithmique du lundi 17 février est déplacé au mercredi 19 février à 14h00 en Amphi
                            B. Merci de prendre note de ce changement.</p>
                        <div style={{color:"#6B747B"}}>
                            <i className="fa-solid fa-clock" style={{marginRight:"10px"}}></i>
                            <span style={{marginRight:"10px"}}>12 Février 2026 à 14:30</span>
                            <b style={{marginRight:"10px"}}>.</b>
                            <span>Direction des Études</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesPage;