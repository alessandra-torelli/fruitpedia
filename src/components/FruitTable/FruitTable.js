import React from "react";
import style from "./FruitTable.module.css";
import {NavLink} from "react-router-dom";
import icon from "../../assets/images/defaultIcon.png";
import {defaultIcon} from "../../utility/utility";

function FruitTable(props){
    const {fruitIcons, fruitData} = props;

    const fruitTr = fruitIcons.map((fruit) => {

        let id = fruit.id;
        const currentFruitInfo = fruitData.filter((fruitInfo) => fruitInfo.id === id)[0];

        return(
            <tr key={fruit.id} className="row align-items-center py-3 mb-2">
                <td className="col-3">
                    <img
                         onError={(event) => defaultIcon(event)}
                         src={fruit.icon !== undefined || null ? fruit.icon :  icon }
                         alt="fruit icon"
                         loading="lazy"
                    />
                </td>
                <td className="col-2">{currentFruitInfo.name}</td>
                <td className="col-2">{currentFruitInfo.family}</td>
                <td className="col-2">{currentFruitInfo.order}</td>
                <td className="col-3">
                    <NavLink to={`/fruits/${fruit.id}`} className={style.btnTable}>View detail</NavLink>
                </td>
            </tr>
        )
    }
    )

    return(
        <table className="text-center mb-5 col">
            <thead>
                <tr className="row align-items-center pb-4">
                    <th className="col-3">Image</th>
                    <th className="col-2">Name</th>
                    <th className="col-2">Family</th>
                    <th className="col-2">Order</th>
                    <th className="col-3">More</th>
                </tr>
            </thead>
            <tbody>
                {fruitTr}
            </tbody>
        </table>
    )
}

export default FruitTable;