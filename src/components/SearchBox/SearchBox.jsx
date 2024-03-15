import  { useState } from 'react';
import PropTypes from 'prop-types';
const SearchBox = ({filter}) => {
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (evt) => {
      setInputValue(evt.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>{inputValue}</p>
      </div>
    );
  };
  export default SearchBox;