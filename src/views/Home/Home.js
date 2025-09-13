import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Home.module.css";
import iconHome from "../../assets/images/coverFruits.png";
import fruitIcons from "../../assets/data/fruits.json";
import fruitData from "../../assets/data/fruityvice.json";
import FruitCardsGrid from "../../components/FruitCardsGrid/FruitCardsGrid";

function Home(){
    const fruitsHome = fruitIcons.filter((fruit) => fruit.id === 1 || fruit.id === 2 || fruit.id === 3 || fruit.id === 4);
    return(
        <main className="container-fluid mb-0">
            <div className="container">

                <h1>Homepage</h1>

                <div className="row align-items-center pb-5">
                    <div className="col-md-4">
                        <h2> What is Fruitpedia</h2>
                        <p>
                            Visit this website to find out interesting information about a vast number of fruits.
                            You will be able to discover details about the order, family and nutritional values on a vast number of fruits and to see how their plants and flowers look like.
                        </p>
                        <p>
                            The project was built starting from the Fruityvice API.
                        </p>
                        <NavLink to={"/project"} className={style.btnHome}>About the project</NavLink>
                    </div>
                    <div className="d-none d-md-block col-md-7 offset-md-1">
                        <div id={style.bgImgHome}>
                            <img src={iconHome} alt="fruits"/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center pb-5">
                    <FruitCardsGrid
                        fruitIcons={fruitsHome}
                        fruitData={fruitData}
                        col={{xs:1, sm:1, md:2, lg:4, xl:4}}
                    />
                    <NavLink id={style.btnHomeDown} className={`mb-2 ${style.btnHome}`} to={"/fruits"}>Browse all fruits</NavLink>
                </div>

            </div>
        </main>
    )
}

export default Home;