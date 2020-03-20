import React from 'react';
import styled from 'styled-components';

const Info = (props) => { 
    const Styleddiv = styled.div`
    
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-around;

    `;
const StyledInnerDiv = styled.div`
    display:flex;
    flex-direction:column;
    p{
        margin:0;
        padding:0;
    }
`
const StyledP = styled.p`
text-transform: capitalize;
color:#FFE81F;
padding:0;
margin:0;
`;

    return (
        <Styleddiv>
            <StyledInnerDiv><p>Gender</p><StyledP>{props.gender}</StyledP></StyledInnerDiv>
            <StyledInnerDiv><p>Birthday</p><StyledP>{props.birth_year}</StyledP></StyledInnerDiv>
            <StyledInnerDiv><p>Height</p><StyledP>{props.height}</StyledP></StyledInnerDiv>
            <StyledInnerDiv><p>Eye Color</p><StyledP>{props.eye_color}</StyledP></StyledInnerDiv>
            <StyledInnerDiv><p>Mass</p><StyledP>{props.mass}kg</StyledP></StyledInnerDiv>
            <StyledInnerDiv><p>Hair Color</p><StyledP>{props.hair_color}</StyledP></StyledInnerDiv>
            <StyledInnerDiv><p>Skin Color</p><StyledP>{props.skin_color}</StyledP></StyledInnerDiv>
        </Styleddiv>
    );
}

export default Info;