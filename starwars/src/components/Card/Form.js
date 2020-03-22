import React from "react";


const Form = (props) => { 
const setSearch = props.setSearch;

function makeSearch (){
  const searchString = document.getElementById('input').value;
  const newSearchString = searchString.replace(/ /g,"+");
  setSearch(`?search=${newSearchString}`);   
}

    return(

        <form>
        <label>
          Search for a Character:
          <input id="input" type="text" />
          <input type="button" value="Submit" onClick= {event => makeSearch()} />
        </label>
      </form>

    );
}

export default Form;