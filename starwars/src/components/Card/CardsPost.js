import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import Card from "./Card.js"
import Form from './Form.js';
import Prev from  './Prev.js';
import Next from  './Next.js';

const CardsPosts = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [numberOfResults, setNumberOfResults] = useState();

    function MaxPage (){
        return Math.round(numberOfResults/10)
    }

    const StyledH3 = styled.h3`
    color:#FFE81F;
    `;

    useEffect( () => {
        axios
        .get(`https://swapi.co/api/people/?${search}page=${page}`)
        .then( response =>{
                setNumberOfResults(response.data.count);
                setData(response.data.results);
        })
        .catch(error => {
            console.log("No data recieved", error)
        });
    },[search, page])

        return (
            <div>
                <Form setSearch = {setSearch} />
                {data.map(element => {
                    return <Card data={element} key={element.name} />
                    
                })}
                <StyledH3>Page: {page} of {MaxPage()}</StyledH3>
                <Prev setPage={setPage} page={page} />
                <Next setPage={setPage} page={page} MaxPage={MaxPage} />
            </div>
        );
};

export default CardsPosts;