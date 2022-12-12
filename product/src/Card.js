import React from 'react';
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const Card = (props) => {
    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ' + props.shoeId);
        props.onClick(props.shoeId, uri)
    }

    const navigate = useNavigate();


    const deleteShoe = async (shoe) => {
        
        const response = await dataSource.delete('/shoes', shoe);

        console.log(response);
        console.log(response.data);
        props.onEditShoe(navigate);
    };

    return (
        <div className="card" style={{ width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">{ props.shoeName }</h5>
            <p className="card-text">
                
                Price: {props.shoePrice}
            </p>
            <p>Color: {props.shoeColor} </p>
            <p>Size: {props.shoeSize}</p>
            <button className="btn btn-primary"
                onClick={() => handleButtonClick(props.shoeId, '/show/')}
            >
                {props.buttonText}
            </button>
            <button className="btn btn-secondary"
                onClick={() => handleButtonClick(props.shoeId, '/edit/')}
            >
                Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={deleteShoe}>Delete</button>
        </div>
      </div>
    )
}
export default Card;