import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
    return (
        // below stops the searchbar being full width and also sets 10px from top
        <div className="ui container" style={{ marginTop: '10px'}}>   
            <SearchBar />
            </div>
    );
};

export default App;