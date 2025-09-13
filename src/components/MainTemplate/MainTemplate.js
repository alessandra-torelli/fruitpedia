import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainTemplate(props){
    const {
        logoFruitpedia,
        children,
        footerCourseName,
        footerCourseLink,
        author,
        navItems
    } = props;

    return(
        <>
            <Header
                logo = {logoFruitpedia}
                navItems = {navItems}
            />

            {children}

            <Footer
                courseName={footerCourseName}
                courseLink={footerCourseLink}
                author={author}
                navItems={navItems}
            />
        </>
    );
}

export default MainTemplate;