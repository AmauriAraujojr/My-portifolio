import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`


*{
    font-family: 'Inter', sans-serif;
    margin:0;
   padding:0;
    box-sizing:border-box;
    background-color:#11172B;
 color:#1EC0A0;
   line-height:150%;
}

ul,ol{
    list-Style:none

}
a{text-decoration:none;
    
}
a:hover{
        color:#597992;
    }


h1,
h2,
p{
    background: none;
}


main{
    display:flex;
    flex-direction:column;
    gap:125px;

    @media(min-width:950px){
        gap:70px;
    }
   

}
h2{font-size:1.5rem}

.black__role{
    width:100vw;
    height:100%;
    background-color:#12121480;
  z-index:1;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
  top:1530px;
  @media(min-width:800px){
    top:530px;
  }
}
`;;
