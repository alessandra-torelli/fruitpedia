import React, {useState} from "react";
import fruitPhotos from "../../assets/data/fruits.json";
import fruitNames from "../../assets/data/fruityvice.json";
import style from "../Fruits/Fruits.module.css";
import clsx from "clsx";
import Plants from "../../components/Plants/Plants";
import Flowers from "../../components/Flowers/Flowers";
import defaultImage from "../../assets/images/defaultImage.png";
import grid from "../../assets/images/grid.svg";
import table from "../../assets/images/table.svg";
import flower from "../../assets/images/flowerLight.svg";
import plant from "../../assets/images/plantLight.svg";

function Photos(){
    const [displayPlants, setdisplayPlants] = useState(true)

    return(
        <main className="container-fluid">
            <div className="container">
                <h1 className="mb-0 pb-3">Photos</h1>
                <p className="text-center subtitle mb-5">Learn how to recognize fruit plants and flowers</p>
                <div className="row text-center">
                    <div className={`col p-0 mb-5 ${style.switch}`}>
                        <button className={clsx(style.control, {[style.active]: displayPlants})}
                                onClick={() => setdisplayPlants(true)}>
                            <img className={`px-1 ${style.iconSwitch}`} src={plant} alt="plant symbol"/>
                            <div className="d-none d-md-inline ps-2">Plants</div>
                        </button>
                        <button className={clsx(style.control, {[style.active]: !displayPlants})}
                                onClick={() => setdisplayPlants(false)}>
                            <img className={style.iconSwitch} src={flower} alt="flower symbol"/>
                            <div className="d-none d-md-inline ps-2">Flowers</div>
                        </button>
                    </div>
                </div>

                <div className="row text-center justify-content-center">
                    {displayPlants ?
                        <Plants
                            col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                            photos={fruitPhotos}
                            names={fruitNames}
                            defaultImage={defaultImage}
                        /> :
                        <Flowers
                            col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                            photos={fruitPhotos}
                            names={fruitNames}
                        />
                    }
                </div>

            </div>
        </main>
    )
}

export default Photos;