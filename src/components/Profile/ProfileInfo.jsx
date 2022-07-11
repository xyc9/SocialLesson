import React from 'react';
import Preloader from "../common/Preloader";
import avatar from "../../img/avatar-default.jpg";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader/>
    }

    return(

        <div className="profile_info">
            <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt=""/>
            <p>{props.profile.fullName}</p>
            <p>Обо мне:</p>
            <p>{props.profile.aboutMe}</p>
        </div>
    )
}
export default ProfileInfo;