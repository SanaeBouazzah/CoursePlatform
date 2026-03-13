import React, { useEffect, useState } from "react";
import Tabs from "../../components/Tabs";

const CoursesPage = () => {
    return (
        <>
            <div className="content_wrapper">
                <div>
                    <div>
                        <h1>Ressources pédagogiques</h1>
                        <p>Accédez à tous vos cours, exercices et ateliers pratiques</p>
                    </div>
                    <Tabs />
                </div>
            </div>
        </>
    );
};

export default CoursesPage;