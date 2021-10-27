import React from 'react';
import '../styles/Form.css';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input type="text" value={props.userCity} onChange={props.change} placeholder="Wpisz miasto..." />
            <button className="confirm"><i className="fas fa-meteor"></i></button>
        </form>
    );
}

export default Form;