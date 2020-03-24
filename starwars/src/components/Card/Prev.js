import React from 'react';
import styled from 'styled-components';

const Prev = (props) => { 
    const StyledButton = styled.button`
    `;
    const setPage = props.setPage

    function setPreviousLimit (){
        if(props.page <= 1){
            setPage(1)
        }
        else{
            setPage(props.page - 1)
        }
    }

    return (
        <StyledButton onClick= {event => setPreviousLimit()}>Previous</StyledButton>
    );
}

export default Prev;