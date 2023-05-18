import {styled} from "styled-components"

export const StyledSectionProjects= styled.section`

display:flex;
flex-direction:column;

gap:20px;


ul{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(auto, 1fr);
grid-column-gap: 0px;
grid-row-gap: 20px;

max-width:100%;

@media(min-width:750px){
    grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(auto, 1fr);
}

@media screen {
    
}
@media(min-width:1145px){
    grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(auto, 1fr);
}

@media(min-width:1300px){
    grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(auto, 1fr);

}

}

`