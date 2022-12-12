import React from 'react';
import SearchForm from './SearchForm';
import ShoeList from './ShoeList';


const SearchShoe = (props) => {
    console.log('props with update single shoe ', props);
      return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults} />

            <ShoeList shoeList={props.shoeList} onClick={props.updateSingleShoe}/>
        </div>
      );
};

export default SearchShoe;