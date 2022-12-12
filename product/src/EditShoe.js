import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";
const EditShoe = (props) => {

    let shoe = {
        name: '',
        color: '',
        price: '',
        size: '',
        materials: [],
    };
    let newShoeCreation = true;

    if (props.shoe) {
        shoe = props.shoe;
        newShoeCreation = false;
    }
    // Album is now setup as an edited or new album
    const [shoeName, setShoeName] = useState(shoe.name);
    const [color, setColor] = useState(shoe.color);
    const [price, setPrice] = useState(shoe.price);
    const [size, setSize] = useState(shoe.size);
    const navigate = useNavigate();
    
    
    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        const editedShoe = {
            shoeId: shoe.shoeId,
            name: shoeName,
            color: color,
            price: price,
            size: size,
            materials: [],
        };
        console.log(editedShoe);

        saveShoe(editedShoe);
    };

    const saveShoe = async (shoe) => {
        let response;
        if (newShoeCreation)
            response = await dataSource.post('/shoes', shoe);
        else
            response = await dataSource.put('/shoes', shoe);
        console.log(response);
        console.log(response.data);
        props.onEditShoe(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    }

    const updateName = (event) => {
        setShoeName(event.target.value);
    };
    const updateColor = (event) => {
        setColor(event.target.value);
    };
    const updatePrice = (event) => {
        setPrice(event.target.value);
    };
    const updateSize = (event) => {
        setSize(event.target.value);
    };


    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>{newShoeCreation ? "Create New" : "Edit "}Shoe</h1>
                <div className="form-group">
                    <label htmlFor="shoeName">Shoe Name</label>
                    <input type="text" className="form-control" id="shoeName" placeholder="Enter Shoe Name" onChange={updateName}/>

                    <label htmlFor="shoeColor">Shoe Color</label>
                    <input type="text" className="form-control" id="shoeColor" placeholder="Enter Shoe Color" onChange={updateColor}/>

                    <label htmlFor="shoePrice">Shoe Price</label>
                    <input type="text" className="form-control" id="shoePrice" placeholder="Enter Shoe Price" onChange={updatePrice}/>

                    <label htmlFor="shoeSize">Shoe Size</label>
                    <input type="text" className="form-control" id="shoeSize" placeholder="Enter Shoe Size" onChange={updateSize}/>

                    
                </div>
                <div align="center">
                    <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EditShoe;