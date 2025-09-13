import React from "react";
import {NavLink} from "react-router-dom";
import style from "./SingleFlower.module.css";
import {defaultImage} from "../../utility/utility";

function SingleFlower(props){
    const {photo, name, number} = props;

    return(
        <NavLink to={`/fruits/${number}`} className={style.photoItem}>
            <img
                onError={(event) => defaultImage(event)}
                className={style.photos}
                src={photo}
                alt={name}
            />
            <div className={style.bgLabel}>
                <p className={style.label}>{name}</p>
            </div>
        </NavLink>
    )
}

export default SingleFlower;