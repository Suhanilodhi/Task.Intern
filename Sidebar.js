import React from 'react'
import {GiAbstract050} from "react-icons/gi";
import {FiAperture} from "react-icons/fi";
import{FiSlack} from "react-icons/fi";


export default function Sidebar(){
    return(
        <div class="sidenav">
            <h1><FiSlack/>nFTify</h1>
            <button class="btn"><FiAperture/>Pass  Addressed</button>
            <button class="btn"><GiAbstract050/>Tokens</button>

        </div>

    )
}