import { styled } from "styled-components";

export const StyledSection=styled.section`


    display:flex;

    justify-content:center;
    align-items:center;
    img{
           width:380px;
                 max-height:100%;
                 max-width:100%;
                 border-radius:50%;
                 
        }
        div{
        width:50%;
        height:250px;
        max-width:100%;
    background-color:#47183A;
       
    
    }

@media(min-width:700px){
    div{

        height:400px;
    }
}

    .container__description{
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:40px;
        padding:20px;
       

        p{
            font-size:1rem;
        }
        h1{
            font-size:2rem;
            align-self:center;
            font-weight:900;
        }
        h2{
            font-size:1rem;
           
        }

    }

    .container__img{
       
        display:flex;
        justify-content:center;
        align-items:center;
        
     

        .internal__container__img{
           
            width:405px;
         
            display:flex;
        justify-content:center;
        align-items:flex-start;
      max-width:100%
        }
    }


@media(min-width:974px){

    div{
       
        height:500px;
        
    
       
    
    }
    .container__img{
        position:relative;
        padding:35px;
        justify-content:flex-end;
        .internal__container__img{
            background-color:#914567;
            opacity: 80%;
            height:90%;
            justify-content:flex-end;
            img{
        position:absolute;
          top:0px;
          right:0px ;
          border-radius:0px;
      
    
       }

        }
    }
    .container__description{

        
            p{
                    font-size:1.5rem;
                }
                h1{
                    font-size:3.5rem;
                    align-self:center;
                    font-weight:900;
                }
                h2{
                    font-size:2rem;
                    align-self:flex-end;
                }
    }
    
}




`