import React from "react";
import FruitCard from "../FruitCard/FruitCard";
import defaultIcon from "../../assets/images/defaultIcon.png";

function FruitCardsGrid(props){

    const {fruitIcons, col, fruitData} = props;

    const fruitCardsCol = fruitIcons.map((fruit) => {

        let id = fruit.id;
        const currentFruitInfo = fruitData.filter((fruitInfo) => fruitInfo.id === id)[0];

        return(
            <div key={fruit.id} className="col p-0">
                <FruitCard
                    number={fruit.id}
                    icon={fruit.icon !== undefined || null ? fruit.icon :  defaultIcon}
                    name={currentFruitInfo.name}
                    family={currentFruitInfo.family}
                    order={currentFruitInfo.order}
                />
            </div>
        )
    })
    return(
        <div className={`row
                row-cols-${col.xs}
                row-cols-sm-${col.sm}
                row-cols-md-${col.md}
                row-cols-lg-${col.lg}
                row-cols-xl-${col.xl}
                mb-5
                p-0
        `}>
            {fruitCardsCol}
        </div>
    )
}

export default FruitCardsGrid;