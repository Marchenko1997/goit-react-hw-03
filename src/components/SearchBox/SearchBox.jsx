
import PropTypes from 'prop-types';
const SearchBox = ({filter, onFilterChange}) => {
   
  
    const handleChange = (evt) => {
      const text=evt.target.value;
      onFilterChange(text);
    };
  
    return (
      <div>
        <input type="text" value={filter} onChange={handleChange} />
     
      </div>
    );
  };

  SearchBox.propTypes = { 
    filter: PropTypes.string.isRequired, 
    onFilterChange: PropTypes.func.isRequired, 
  };
  
  export default SearchBox;