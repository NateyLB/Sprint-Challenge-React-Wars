import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Title from "./Title.js";
import Info from "./Info.js";

const Card = (props) => { 
 const data = props;
 console.log(data.data,'from cards')

 const Styleddiv = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 border: 3px solid black;
 margin-bottom:5%;
 `;
    
 return(
     <Styleddiv>

        <Title name = {data.data.name} />
        <Info 
        gender = {data.data.gender}
        birth_year = {data.data.birth_year}
        height = {data.data.height}
        mass = {data.data.mass}
        hair_color = {data.data.hair_color}
        skin_color = {data.data.skin_color}
        eye_color = {data.data.eye_color}
        />
     </Styleddiv>
 );
}

export default Card;