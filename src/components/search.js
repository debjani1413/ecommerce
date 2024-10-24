import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [value,setValue] = useState("");

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/products?search=${value}`);
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') handleSearch();
    }

    return (
        <div className="searchbar">
            <SearchOutlined className="searchbar-icon" />
            <input
                className="search-input searchbar-input"
                type="text"
                placeholder='Search product...'
                onChange={(e)=>{
                    setValue(e.target.value);
                }}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default Search;
