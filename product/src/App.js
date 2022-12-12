import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { createMemoryHistory } from 'history';
import NavBar from './NavBar';
import './App.css'
import dataSource from './dataSource';
import SearchShoe from './SearchShoe';
import EditShoe from './EditShoe';
import OneShoe from './OneShoe';
import 'bootstrap/dist/js/bootstrap.bundle';

const App = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [shoeList, setShoeList] = useState([]);
    const [currentlySelectedShoeId, setCurrentlySelectedShoeId] = useState(0);
    let refresh = false;

    const loadShoes = async () => {
        const response = await dataSource.get('/shoes');

        setShoeList(response.data);
    };

    // Setup initialization callback
    useEffect(() => {
        // Update the album list
        loadShoes();
    }, [refresh]);

    const updateSearchResults = async (phrase) => {
        console.log('phrase is ' + phrase);
        setSearchPhrase(phrase);





    };

    const updateSingleShoe =(id, navigate, uri) => {
        console.log('Update Single Shoe = ', id);
        console.log('Update Single Shoe = ', navigate);
        var indexNumber = 0;
        for (var i = 0; i < shoeList.length; ++i) {
            if (shoeList[i].id === id) indexNumber = i;
        }
        setCurrentlySelectedShoeId(indexNumber);
        let path = uri + indexNumber;
        console.log('path', path);
        navigate(path);
    };
    
    console.log('shoeList', shoeList);
    const renderedList = shoeList.filter((shoe) => {
            if (
                shoe.name.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === ''
            
            ) {
                return true;
            }
            return false;
    });

    console.log('renderedList', renderedList);


    const onEditShoe = (navigate) => {
        loadShoes();
        navigate("/")
    }
    return (
        <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SearchShoe
                            updateSearchResults={updateSearchResults}
                            shoeList={renderedList}
                            updateSingleShoe={updateSingleShoe}
                        />
                    }
                />
                <Route exact path='/new' element={<EditShoe onEditShoe={onEditShoe}/>} />
                <Route
                    exact
                    path='/edit/:shoeId'
                    element={<EditShoe onEditShoe={onEditShoe} shoe={shoeList[currentlySelectedShoeId]} />}
                />
                <Route
                    exact
                    path='/show/:shoeId'
                    element={<OneShoe shoe={shoeList[currentlySelectedShoeId]} />}
                />
            </Routes>
            
        </BrowserRouter>
        </>
    );
}

export default App;