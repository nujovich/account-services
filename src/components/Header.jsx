import { useState } from "react"
import { NavMenu } from "./NavMenu"

export const Header = () => {
    
    const [rightProp, setRightProp] = useState({right: "-100%"})

    return (
        <header>
            <h2 className="lg-logo">Marcos | Agustín</h2>
            <h2 className="sm-logo">M | A</h2>
            <input type="checkbox" id="check-button" onClick={() => rightProp['right'] === "0" 
            ? setRightProp({right: "-100%"}) : setRightProp({right: "0"})}></input>
            <label htmlFor="check-button" className="hamburguer-icon">
                <iconify-icon icon="eva:menu-outline" width="40" height="40"></iconify-icon>
            </label>
            <NavMenu style={rightProp} setRightProp={setRightProp}/>
        </header>
    )
}