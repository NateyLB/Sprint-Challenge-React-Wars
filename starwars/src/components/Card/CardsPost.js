import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from "./Card.js"
import Form from './Form.js';

const CardsPosts = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () => {
        axios
        .get(`https://swapi.co/api/people/${search}`)
        .then( response =>{
            if(search == ''){
                setData(response.data.results);
            }
            else{
                setData(response.data);
                
            }
        })
        .catch(error => {
            console.log("No data recieved", error)
        });
    },[search])
    if(search == ''){
        return (
            <div>
                <Form setSearch = {setSearch} />
                {data.map(element => {
                    return <Card data={element} key={element.name} />
                    {console.log(element,"IN MAP")}
                })}
            </div>
        );
    }

    else{
        return(
        <div>
                <Card data={data} key={data.name} />
            </div>
        );
    }
    

};

export default CardsPosts;