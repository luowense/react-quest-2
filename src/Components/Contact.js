import React from "react";
import "./Contact.css";

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.nameavatar} alt="user-picture"/>
                <div className="status">
                <h3 className="name">{props.name}</h3>
                <span className={props.online ? 'status-online' : 'status-offline'}></span>
                    {props.online ? 'Online' : 'Offline'}
                </div>
        </div>
    );
}

export default Contact;