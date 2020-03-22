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
                setData(response.data.results);
        })
        .catch(error => {
            console.log("No data recieved", error)
        });
    },[search])

        return (
            <div>
                <Form setSearch = {setSearch} />
                {data.map(element => {
                    return <Card data={element} key={element.name} />
                    {console.log(element,"IN MAP")}
                })}
            </div>
        );
};

export default CardsPosts;