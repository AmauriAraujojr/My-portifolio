import { styled } from "styled-components";

export const StyledSection=styled.section`
display:flex;
flex-direction:column;
width:100%;
@media(min-width:800px){
   
    flex-direction:row;
}

.container__description{
   
    width:100%;
    height:200px;
   display:flex;
   flex-direction:column;

gap :30px;
p{
    color:#597992;
   font-size:1rem
}
strong{
    font-size:1.5rem;
}

  
   
@media(min-width:800px){
   
    width:50%
}
}
.container__img{

    display:flex;
    align-items:end;
    width:100%;
    height:200px;
    
padding-left:50px;
justify-content:space-between;

    @media(min-width:800px){
   
        width:50%
    }
}

button{
    padding:10px;
}
.internal__container__img{
  
    display:flex;
    align-items:center;
 
    height:100%;
   
}
img{
    max-height:100%;
border-radius:50% 0% 50% 0%;
  
    
}

`