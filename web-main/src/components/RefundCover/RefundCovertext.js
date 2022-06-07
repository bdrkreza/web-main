import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

function RefundCovertext(props) {
    return (
        <CoverPic>
             <Container maxWidth="lg">
                    <div className="text">
                        <h1>{(props.langVariables !== null) ? ((props.langVariables['rp_refund_pol']) ? props.langVariables['rp_refund_pol'].lang_content : "RETURN & REFUND POLICY") : "RETURN & REFUND POLICY"}</h1>
                    </div>
            </Container>
        </CoverPic>
    )
}


const CoverPic = styled.div`
font-family: 'Open Sans', sans-serif;
margin-top: 158px;
display: flex;
flex-direction: row;
.text{
    margin-left: 30px;
    margin-top: 50px;
    h1{
        color: black;
        font-size: 30px;
        font-weight: 800;
    }
}

@media(max-width: 768px){
    margin-top: 85px;
}



@media(max-width: 425px){
    margin-top: 105px;
    margin-left: 5px;
    .text{
        margin-top: 30px;
        h1{
            font-size: 20px;
        }
    }
}
`;

export default RefundCovertext;
