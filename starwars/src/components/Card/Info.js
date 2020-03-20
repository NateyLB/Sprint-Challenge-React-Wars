import React from 'react';
import styled from 'styled-components';

const Info = (props) => { 
    const Styleddiv = styled.div`
    
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-around;

    `;
const StyledP = styled.p`
text-transform: capitalize;
color:#FFE81F
`;

    return (
        <Styleddiv>
            <StyledP>{props.gender}</StyledP>
            <StyledP>{props.birth_year}</StyledP>
            <StyledP>{props.height}</StyledP>
            <StyledP>{props.mass}</StyledP>
            <StyledP>{props.hair_color}</StyledP>
            <StyledP>{props.skin_color}</StyledP>
            <StyledP>{props.eye_color}</StyledP>

        </Styleddiv>
    );
}

export default Info;