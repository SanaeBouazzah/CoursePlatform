import "./../index.css";
import API from "./../services/ApiHelper";
import { useState, useEffect } from "react";
import { MdMenuBook } from "react-icons/md";
import { MdDownload } from "react-icons/md";

const Tabs = () => {
    const [courses, setCourses] = useState([]);
    const [syllabuses, setSyllabuses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("courses");
    const fetchCourses = async () => {
        try {
            const res = await API.get("/acceuil/resources_pedagogique/cours");
            setCourses(res.data);
        } catch (err) {
            console.error("Failed to fetch courses:", err);
            setCourses([]);
        }
    };
    const fetchSyllabuses = async () => {
        try {
            const res = await API.get("/acceuil/resources_pedagogique/syllabus");
            setSyllabuses(res.data);
        } catch (err) {
            console.error("Failed to fetch syllabuses:", err);
            setSyllabuses([]);
        }
    };

    useEffect(() => {
        fetchCourses();
        fetchSyllabuses();
    }, []);


    const getFilteredData = () => {
        if (activeTab === "courses") {
            return courses.filter(course =>
                course.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (activeTab === "syllabuses") {
            return syllabuses.filter(syllabus =>
                syllabus.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        // if (activeTab === "workshops") {
        //     return workshops.filter(w =>
        //         w.name.toLowerCase().includes(searchTerm.toLowerCase())
        //     );
        // }
        // if (activeTab === "td") {
        //     return tdList.filter(td =>
        //         td.name.toLowerCase().includes(searchTerm.toLowerCase())
        //     );
        // }
        // if (activeTab === "tp") {
        //     return tpList.filter(tp =>
        //         tp.name.toLowerCase().includes(searchTerm.toLowerCase())
        //     );
        // }
        // if (activeTab === "ateliers") {
        //     return ateliers.filter(a =>
        //         a.name.toLowerCase().includes(searchTerm.toLowerCase())
        //     );
        // }
        return [];
    };
    const filteredCourses = getFilteredData();
    const filteredSyllabuses = getFilteredData();

    return (
        <>
            <div className="search_input">
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Rechercher dans les ressources..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
            <div className="tabs-container">

                <div className="tabs-header">
                    <button
                        className={activeTab === "courses" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("courses")}
                    >
                        Cours
                    </button>

                    <button
                        className={activeTab === "syllabuses" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("syllabuses")}
                    >
                        Syllabus
                    </button>

                    <button
                        className={activeTab === "td" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("td")}
                    >
                        TD
                    </button>

                    <button
                        className={activeTab === "tp" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("tp")}
                    >
                        TP
                    </button>

                    <button
                        className={activeTab === "ateliers" ? "tab active" : "tab"}
                        onClick={() => setActiveTab("ateliers")}
                    >
                        Ateliers
                    </button>
                </div>

                {/* Tabs content */}
                <div className="tabs-content">

                    {activeTab === "courses" && (
                        <div>
                            <h4>Cours de classe : </h4>
                            {filteredCourses.length === 0 ? (
                                <p>No courses yet. Add some courses in the backend first.</p>
                            ) : (
                                <div>
                                    {filteredCourses.map(course => (
                                        <div className="d-flex justify-content-between align-items-center course-ee mt-3">
                                            <div className="d-flex justify-content-start align-items-center gap-3 ">
                                                <div className="icon-ee">
                                                    <MdMenuBook size={20} style={{ marginRight: "8px" }} />
                                                </div>
                                                <div className="text-ee">
                                                    <h5>Cours {course.order} - {course.name}<strong></strong></h5>
                                                    <p className="mt-2"><strong>{course.document}</strong> <span> . </span>
                                                        <small>
                                                            {new Date(course.createdAt).toLocaleDateString("fr-FR", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric"
                                                            })}
                                                        </small> <span> . </span><b>{course.size} MB</b>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <MdDownload
                                                    size={20}
                                                    style={{ cursor: "pointer", marginRight: "10px", color: "#6B747B" }}
                                                    onClick={() => window.open(course.fileUrl, "_blank")}
                                                />
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "syllabuses" && (
                        <div>
                            <h4>Syllabus de classe : </h4>
                            {filteredSyllabuses.length === 0 ? (
                                <p>No syllabus yet. Add some syllabus in the backend first.</p>
                            ) : (
                                <div>
                                    {filteredSyllabuses.map(syllabus => (
                                        <div className="d-flex justify-content-between align-items-center course-ee mt-3">
                                            <div className="d-flex justify-content-start align-items-center gap-3 ">
                                                <div className="icon-ee">
                                                    <MdMenuBook size={20} style={{ marginRight: "8px" }} />
                                                </div>
                                                <div className="text-ee">
                                                    <h5>{syllabus.title}<strong></strong></h5>
                                                    <p className="mt-2"><strong>{syllabus.description}</strong> <span> . </span>
                                                        <small>
                                                            {new Date(syllabus.createdAt).toLocaleDateString("fr-FR", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric"
                                                            })}
                                                        </small> <span> . </span><b>{syllabus.size} MB</b>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <MdDownload
                                                    size={20}
                                                    style={{ cursor: "pointer", marginRight: "10px", color: "#6B747B" }}
                                                    onClick={() => window.open(syllabus.fileUrl, "_blank")}
                                                />
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "td" && (
                        <div>
                            <h4>Syllabus de classe : </h4>
                            {filteredSyllabuses.length === 0 ? (
                                <p>No syllabus yet. Add some syllabus in the backend first.</p>
                            ) : (
                                <div>
                                    {filteredSyllabuses.map(syllabus => (
                                        <div className="d-flex justify-content-between align-items-center course-ee mt-3">
                                            <div className="d-flex justify-content-start align-items-center gap-3 ">
                                                <div className="icon-ee">
                                                    <MdMenuBook size={20} style={{ marginRight: "8px" }} />
                                                </div>
                                                <div className="text-ee">
                                                    <h5>{syllabus.title}<strong></strong></h5>
                                                    <p className="mt-2"><strong>{syllabus.description}</strong> <span> . </span>
                                                        <small>
                                                            {new Date(syllabus.createdAt).toLocaleDateString("fr-FR", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric"
                                                            })}
                                                        </small> <span> . </span><b>{syllabus.size} MB</b>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <MdDownload
                                                    size={20}
                                                    style={{ cursor: "pointer", marginRight: "10px", color: "#6B747B" }}
                                                    onClick={() => window.open(syllabus.fileUrl, "_blank")}
                                                />
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "tp" && (
                        <div>
                            <h3>Ateliers pratiques</h3>
                            <p>Workshops content here.</p>
                        </div>
                    )}

                    {activeTab === "ateliers" && (
                        <div>
                            <h3>Ateliers pratiques</h3>
                            <p>Workshops content here.</p>
                        </div>
                    )}

                </div>

            </div>
        </>
    );
};

export default Tabs;