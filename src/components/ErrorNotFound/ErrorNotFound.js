import React from "react";
import errorIcon from "../../assets/images/bananaError.png";
import {defaultIcon} from "../../utility/utility";
import style from "./ErrorNotFound.module.css";

function ErrorNotFound(){
    return(
        <div className="container-fluid" id={style.errorPage}>
            <div className="container">
                <h1 className={style.ciao}>Error 404 – Page not found</h1>
                <div className="row align-items-center pb-5">
                    <div className="col-6">
                        <h2>Right below you may find the problem that caused the error</h2>
                        <p>You may have entered an incorrect URL</p>
                        <p>The destination URL has been deleted or moved.</p>
                        <p>The connection is broken.</p>
                        <p>The web server that manages the site is down.</p>
                        <p>The domain no longer exists.</p>
                    </div>
                    <div className="col-6">
                        <div id={style.bgImgError}>
                            <img
                                onError={(event) => defaultIcon(event)}
                                src={errorIcon}
                                alt="error icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorNotFound;