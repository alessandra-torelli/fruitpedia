import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "./FruitCard.module.css";
import {NavLink} from "react-router-dom";
import {defaultIcon} from "../../utility/utility";

function FruitCard(props){
    const {icon, name, family, order, number} = props;

    return(
        <NavLink to={`/fruits/${number}`}>
            <Card className={style.card}>
                <CardImg
                    onError={(event) => defaultIcon(event)}
                    className={style.icon}
                    src={icon}
                    alt={name}
                />
                <CardBody className="text-center pb-0">
                    <CardTitle tag="h3" className="mb-4 mt-3">{name}</CardTitle>
                    <CardText>
                        <p className="mb-0">
                            <span className={style.bodyStrong}>Family: </span>{family}
                        </p>
                    </CardText>
                    <CardText>
                        <p className="mb-0">
                            <span className={style.bodyStrong}>Order: </span>{order}
                        </p>
                    </CardText>
                </CardBody>
            </Card>
        </NavLink>
    )
}

export default FruitCard;