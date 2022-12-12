import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const ShoeList = (props) => {

    const handleSelectionOne = (shoeId, uri) => {
        console.log('Select ID is ' + shoeId);
        props.onClick(shoeId, navigator, uri);
    };

    console.log('props shoeList', props);
    const navigator = useNavigate();
    const shoes = props.shoeList.map((shoe) => {
        return (
            <Card
                key={shoe.id}
                shoeId={shoe.id}
                shoeName={shoe.name}
                shoeColor={shoe.color}
                shoeSize={shoe.size}
                shoePrice={shoe.price}
                buttonText='View'
                onClick={handleSelectionOne}
            />
        );
    });
    return <div className='container'>{shoes}</div>;
};

export default ShoeList;