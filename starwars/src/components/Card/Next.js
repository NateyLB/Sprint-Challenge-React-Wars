import React from 'react';
import styled from 'styled-components';

const Next = (props) => { 
    const StyledButton = styled.button`
    `;
    const setPage = props.setPage

    return (
        <StyledButton onClick= {event => setPage(props.page + 1)}>Next</StyledButton>
    );
}

export default Next;