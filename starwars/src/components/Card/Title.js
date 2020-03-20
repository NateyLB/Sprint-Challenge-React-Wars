import React from 'react';
import styled from 'styled-components';

const Title = (props) => { 
    const StyledH1 = styled.h1`
    color:#FFE81F;
    `;

    return (
        <StyledH1>{props.name} </StyledH1>
    );
}

export default Title;