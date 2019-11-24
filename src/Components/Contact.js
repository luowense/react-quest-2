import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false
        };
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.nameavatar} alt="user-picture"/>
                    <div className="status">
                    <h3 className="name">{this.props.name}</h3>
                    <span
                    className={this.state.online ? 'status-online' : 'status-offline'}
                        onClick={event => {
                        const newOnline = !this.state.online;
                        this.setState({ online: newOnline });
                        }}></span>
                        {this.state.online ? 'status-online' : 'status-offline'}                   
                    </div>
            </div>
        );
    }
}


export default Contact;