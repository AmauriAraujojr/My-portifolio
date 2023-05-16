import { useState } from "react"
import { StyledContainer } from "../../styles/grid"
import { StyledHeader } from "./style"
export const Header=()=>{

    const[isOpen,setIsOpen]=useState(false)
    return(
        <StyledHeader >


            <StyledContainer>
           
                <div className="headerInternalContainer">

                <h1>Portifólio Amauri</h1>
 
              <button onClick={()=>setIsOpen(!isOpen)}>Abrir menu</button>
              
                <nav>
                 
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Tecnologies</li>
                    </ul>
                </nav>
                </div>
                {isOpen?(<div className="DropDownMenu">
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Tecnologies</li>
                    </ul>
                </div>):(null)}
            </StyledContainer>
        </StyledHeader>
    )
}