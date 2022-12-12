import React from "react";
import { useNavigate } from "react-router-dom";

const OneShoe = (props) => {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/");
    }
    return (
        <div className='card'>
            <h2>Shoe Details for {props.shoe.name}</h2>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{props.shoe.name}</h5>
                            <p className='card-text'>{props.shoe.color}</p>
                            <p className='card-text'>{props.shoe.price}</p>
                            <p className='card-text'>{props.shoe.size}</p>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-9">
                    <div className='card'>
                    <p className='card-text'>{props.shoe.color}</p>
                    </div>
                    <div className='card'>
                    <p className='card-text'>{props.shoe.size}</p>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-light" onClick={handleExit}>Exit</button>
        </div>
    );
};
export default OneShoe;