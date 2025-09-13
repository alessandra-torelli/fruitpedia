import React, { useState } from 'react';
import {NavLink as RouterLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';
import style from "./Header.module.css";

function Header(args){
    const {logo, navItems} = args;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const linkHeader = navItems.map((item) => {
        let activeClassName = "activeNav";
        return(
            <linkHeader className={style.itemMenu}>
                <RouterLink to={item.url}
                            key={item.exact}
                            className={({isActive}) =>
                                isActive ? activeClassName: undefined
                            }>
                    {item.text}
                </RouterLink>
            </linkHeader>
        )
    });



    return(
        <header className="container-fluid sticky-top">
            <Navbar {...args} expand="md" className="container">
                <NavbarBrand>
                    <RouterLink to="/">
                        <img id={style.logoHeader} src={logo} alt="logo Fruitpedia"/>
                    </RouterLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto text-center" navbar>
                        {linkHeader}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header;