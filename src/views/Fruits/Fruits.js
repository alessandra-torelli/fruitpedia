import React, {useState} from "react";
import FruitTable from "../../components/FruitTable/FruitTable";
import FruitCardsGrid from "../../components/FruitCardsGrid/FruitCardsGrid";
import grid from  "../../assets/images/grid.svg";
import table from "../../assets/images/table.svg";
import style from "./Fruits.module.css";
import clsx from 'clsx';
import fruitIcons from "../../assets/data/fruits.json";
import fruitData from "../../assets/data/fruityvice.json";

function Fruits(){
    const [displayGrid, setdisplayGrid] = useState(true)
    return(
        <main className="container-fluid">
            <div className="container">

                <h1>Fruits</h1>

                <div className="row text-end">
                    <div className={`col p-0 mb-5 ${style.switch}`}>
                        <button className={clsx(style.control, {[style.active]: displayGrid})}
                                onClick={() => setdisplayGrid(true)}>
                            <img className="px-1" src={grid} alt="grid symbol"/>
                            <div className="d-none d-md-inline ps-2">Grid</div>
                        </button>
                        <button className={clsx(style.control, {[style.active]: !displayGrid})}
                                onClick={() => setdisplayGrid(false)}>
                            <img src={table} alt="table symbol"/>
                            <div className="d-none d-md-inline ps-2">Table</div>
                        </button>
                    </div>
                </div>

                <div className="row text-center justify-content-center">
                    {displayGrid ?
                        <FruitCardsGrid
                            fruitIcons={fruitIcons}
                            fruitData={fruitData}
                            col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                        /> :
                        <FruitTable
                            fruitIcons={fruitIcons}
                            fruitData={fruitData}
                        />}
                </div>
            </div>
        </main>
    )
}

export default Fruits;