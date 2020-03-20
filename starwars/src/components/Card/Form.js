import React from "react";


const Form = (props) => { 
const setSearch = props.setSearch;
    return(

        <form>
        <label>
          Enter 1-10 to search for a character:
          <input type="text" onChange={event => setSearch(event.target.value)} />
        </label>
      </form>

    );
}

export default Form;