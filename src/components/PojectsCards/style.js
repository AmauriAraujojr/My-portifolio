import {styled} from "styled-components"
export const StyledProjectCard= styled.li`

width:350px;
height:200px;
display: flex;
align-items:center;
background-color: #597992;
opacity:40%;
padding:10px;
border: 1px solid #1EC0A0;
border-radius:4px;

a{
    border: 1px solid #1EC0A0;
    padding:2px;
    
}
    
div{
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    background:none;
}
img{
    max-width:90%;
    max-height:50%;
    height:50%;
    background:none;
}
p{
    font-size:0.85rem;
}
h3{
    background:none;
    border-bottom: 1px solid #1EC0A0;
}

.right{
    align-items:center;
   
    height:100%;
}
.links{
    flex-direction:row;
    gap:10px;
    height:50%;
    justify-content:center;
       align-items:center;
    
}
`