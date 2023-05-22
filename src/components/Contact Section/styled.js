import { styled } from "styled-components";

export const StyledContactSection= styled.section`
display:flex;
   
    justify-content:space-between;
    flex-direction:column;
    gap:20px;

    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        gap:10px;
    }

    a{
        font-size:3rem;
    }
    button{
        font-size:3rem;
        border:none;
        cursor:pointer;
    }
`