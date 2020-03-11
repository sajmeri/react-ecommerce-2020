import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/diretcory-menu.component";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`;


const Homepage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
    
)
export default Homepage;