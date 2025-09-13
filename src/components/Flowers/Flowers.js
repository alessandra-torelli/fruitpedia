import React from "react";
import SingleFlower from "../SingleFlower/SingleFlower";
import {defaultImage} from "../../utility/utility";

function Flower(props){
    const {photos, names, col} = props;

    const flowers = photos.map((fruit) => {
        let id = fruit.id;
        const currentFruit = names.filter((fruitName) => fruitName.id === id)[0];
        return(
            <div key={fruit.id} className="col p-0">
                <SingleFlower
                    photo={fruit.photos.flower !== undefined || null ? fruit.photos.flower :  defaultImage }
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
            {flowers}
        </div>

    )
}

export default Flower;