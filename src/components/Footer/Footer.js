import React from "react";
import style from "./Footer.module.css";
import logoFruitpedia from "../../assets/images/logoFruitpedia.png";
import logoUnimib from "../../assets/images/logoUnimib.svg";
import {NavLink} from "react-router-dom";

function Footer(props){
    const {courseName, courseLink, author, navItems} = props;

    const itemList = navItems.map((item) => {
        let activeClassName = "activeNav";
        return(
            <li key={item.url}>
                <NavLink to={item.url}
                         ClassName={({isActive}) =>
                            isActive ? activeClassName : undefined
                        }
                >
                    {item.text}
                </NavLink>
            </li>
        )
    });

    return(
        <footer className="container-fluid">
            <div className="container">

                <div className="row align-items-end pt-3">
                    <div className="d-none d-md-block col-md-3">
                        <nav>
                            <ul className={style.navList}>
                                {itemList}
                            </ul>
                        </nav>
                    </div>

                    <div className="col-md-6 text-center pb-3">
                        <NavLink to="/">
                            <img id={style.logoFooter} src={logoFruitpedia} alt="logo Fruitpedia"/>
                        </NavLink>
                        <p className="mb-0">API used to implement this project: Fruityvice</p>
                        <a href="https://fruityvice.com/doc/index.html" target="_blank" rel="noreferrer">Read documentation</a>
                    </div>

                    <div className="col-md-3 text-center text-md-end mt-3 mt-md-0 pb-3">
                        <div className="row align-items-end">
                            <div className="col-md-8 text-md-end">
                                <a className="mb-0 align-self-end" href={courseLink} target="_blank" rel="noreferrer">
                                    {courseName}
                                </a>
                            </div>
                            <div className="col-md-4 mt-2 mt-md-0">
                                <a href="https://www.unimib.it/" target="_blank" rel="noreferrer">
                                    <img id={style.logoUniversity} src={logoUnimib} alt="unimib"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center mt-2 justify-content-center">
                    <div className="col-md-8">
                        <p id={style.author} className="bodySmall">This project was created by {author}</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;