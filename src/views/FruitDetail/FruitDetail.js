import React from "react";
import {useParams} from "react-router-dom";
import defaultIcon from "../../assets/images/defaultIcon.png";
import defaultImage from "../../assets/images/defaultImage.png";
import fruitsData from "../../assets/data/fruityvice.json";
import fruitsImages from "../../assets/data/fruits.json";
import style from "./FruitDetail.module.css";

function FruitDetail(){
    let {number} = useParams();
    let id = parseInt(number);

    const currentFruitImages = fruitsImages.filter((fruit) => fruit.id === id)[0];
    const currentFruitData = fruitsData.filter((fruit) => fruit.id === id)[0];
    return(
        <main className="container-fluid">
            <div className="container">

                <h1>{currentFruitData.name}</h1>

                <div className="row pt-3 align-items-center">
                    <div className="order-md-2 col-md-5 offset-md-2" id={style.bgImgDetail}>
                        <img className="mx-auto" src={currentFruitImages.icon !== undefined || null ? currentFruitImages.icon :  defaultIcon } alt={currentFruitData.name}/>
                    </div>
                    <div className="order-md-1 col-md-4 pb-md-5">
                        <h2 className="mt-2">Informations</h2>
                        <div id={style.tableInfo} className="row">
                            <div className="col">
                                <p className={style.heading}>Genus</p>
                                <p>{currentFruitData.genus}</p>
                            </div>
                            <div>
                                <p className={style.heading}>Family</p>
                                <p>{currentFruitData.family}</p>
                            </div>
                            <div className="col">
                                <p className={style.heading}>Order</p>
                                <p>{currentFruitData.order}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h2 className="pt-5">Nutritions</h2>
                    <div className="col">
                        <div id={style.tableNutritions} className="row py-4 text-center">
                            <div className="col">
                                <p className={style.heading}>Carbohydrates</p>
                                <p className="mb-0">{currentFruitData.nutritions.carbohydrates} g</p>
                            </div>
                            <div className="col">
                                <p className={style.heading}>Protein</p>
                                <p className="mb-0">{currentFruitData.nutritions.protein} g</p>
                            </div>
                            <div className="col">
                                <p className={style.heading}>Fat</p>
                                <p className="mb-0">{currentFruitData.nutritions.fat} g</p>
                            </div>
                            <div className="col">
                                <p className={style.heading}>Calories</p>
                                <p className="mb-0">{currentFruitData.nutritions.calories} g</p>
                            </div>
                            <div className="col">
                                <p className={style.heading}>Sugar</p>
                                <p className="mb-0">{currentFruitData.nutritions.sugar} g</p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="bodySmall col mt-2 px-4">* Nutrition value of the Fruit (per 100g) in gramm</p>
                        </div>
                    </div>
                </div>

                <div className="row pb-5">
                    <h2 className="pt-5">Photos</h2>
                    <div className="col">
                        <div className="row" id={style.photos}>
                            <div className="col-md-4 text-center">
                                <h3>Plant</h3>
                                <img className="mb-5 mb-md-2" src={currentFruitImages.photos.plant !== undefined || null ? currentFruitImages.photos.plant :  defaultImage } alt={currentFruitData.name}/>
                            </div>
                            <div className="col-md-4 text-center">
                                <h3>Flower</h3>
                                <img className="mb-5 mb-md-2" src={currentFruitImages.photos.flower !== undefined || null ? currentFruitImages.photos.flower :  defaultImage } alt={currentFruitData.name}/>
                            </div>
                            <div className="col-md-4 text-center">
                                <h3>Fruit</h3>
                                <img className="mb-5 mb-md-2" src={currentFruitImages.photos.fruit !== undefined || null ? currentFruitImages.photos.fruit :  defaultImage } alt={currentFruitData.name}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default FruitDetail;