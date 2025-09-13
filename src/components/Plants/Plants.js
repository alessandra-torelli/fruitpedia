import React from "react";
import SinglePlant from "../SinglePlant/SinglePlant";
import {defaultImage} from "../../utility/utility";

function Plants(props){
    const {photos, names, col} = props;

    const plants = photos.map((fruit) => {
        let id = fruit.id;
        const currentFruit = names.filter((fruitName) => fruitName.id === id)[0];
        return(
            <div key={fruit.id} className="col p-0">
                <SinglePlant
                    photo={fruit.photos.plant !== undefined || null ? fruit.photos.plant :  defaultImage }
                    name={currentFruit.name}
                    number={fruit.id}
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
            {plants}
        </div>

    )
}

export default Plants;