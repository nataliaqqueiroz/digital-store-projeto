import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NotFoudPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 150px;
    background-color:  #ededed;

`;
const PageNotFoud = styled.h1`
   text-align: center;
   width: 500px;
   height: 400px;
   padding: 50px;
`;


const NotFound = () => {
    return (
        <NotFoudPage>
        <PageNotFoud>
            <div>
            <h1>Ops... Página não encontrada! :(</h1>
            <br />
            <h6><Link to ={"/"}>Voltar para Home</Link></h6>
            </div>
        </PageNotFoud>
        </NotFoudPage> 
     );
}
 
export default NotFound;