import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home"
import Fruits from "../Fruits/Fruits";
import FruitDetail from "../FruitDetail/FruitDetail";
import Photos from "../Photos/Photos"
import logoFruitpedia from "../../assets/images/logoFruitpedia.png"
import ErrorNotFound from "../../components/ErrorNotFound/ErrorNotFound";
import Project from "../Project/Project";

function App() {

    const nav = [
        {url: "/", text:"Home", exact:true},
        {url: "/fruits", text:"Fruits", exact:false},
        {url: "/photos", text:"Photos", exact:true},
        {url: "/project", text:"Project", exact:true}
    ];

    return (
        <BrowserRouter>
            <MainTemplate
                logoFruitpedia = {logoFruitpedia}
                footerCourseName = "Applicazioni web progettazione e sviluppo"
                footerCourseLink = "https://elearning.unimib.it/course/view.php?id=44672"
                author = "Alessandra Torelli"
                navItems = {nav}
            >
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/fruits" element={<Fruits/>}/>
                    <Route path="/photos" element={<Photos/>}/>
                    <Route path="/fruits/:number" element={<FruitDetail/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="*" element={<ErrorNotFound/>}/>
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    );
}

export default App;