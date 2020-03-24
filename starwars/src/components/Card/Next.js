import React from 'react';
import styled from 'styled-components';

const Next = (props) => { 
    const MaxPage= props.MaxPage;
    const StyledButton = styled.button`
    `;
    const setPage = props.setPage

    function setNextLimit (){
        if(props.page >= MaxPage()){
            setPage(MaxPage());
        }
        else{
            setPage(props.page + 1)
        }
    }

    return (
        <StyledButton onClick= {event => setNextLimit()}>Next</StyledButton>
    );
}

export default Next;