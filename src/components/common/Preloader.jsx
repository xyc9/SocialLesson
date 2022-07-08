import React from "react";
import preloader from "../../img/preloader.gif";

let Preloader = () => {
    return (
        <div className="preloader-container">
            <img src={preloader} alt=""/>
        </div>
    )

}
export default Preloader;