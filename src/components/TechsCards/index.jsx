import { StyledCard } from "./StyledCard"

export const Techscards=({tech})=>{

    return(
        <StyledCard>
            
            <h1>{tech.img}</h1>
        <p>{tech.name}</p>
        </StyledCard>
    )
}