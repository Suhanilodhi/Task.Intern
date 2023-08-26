import React from 'react'
import {FcGoogle } from "react-icons/fc";


import { useState } from 'react'
export default function Textform(){
    const [cards]=useState([
        {
            title:'Basic Info',
            text1:'pair created at    -   #7890', 
            text2:'symbol      -   ETH',
            text3:'Dex ID      -   Etherium',
            text4:'Pair Address    -     #6754',

        },
        {
            title:'Base Token',
            text1:'Name    -      Etherium',
            text2:'Symbol   -      ETH',
            text3:'Address   -      #7890'

        },
        {
             title:'Quote Token',
             text1:'Name -Etherium',
             text2:'Symbol - ETH',
             text3:'Address   -      #7890'

        },
        {
            title:'Basic Info' , 
            text1:'pair created at    -   #7890',             
            text2:'symbol      -   ETH',            
            text3:'Dex ID      -   Etherium',            
            text4:'Pair Address    -     #6754'

        },
        {
            title:'Base Token'  ,         
            text1:'Name    -      Etherium',            
             text2:'Symbol - ETH',            
             text3:'Address   -      #7890'
        },
        {
            title:'Quote Token' , 
            text1:'Name    -      Etherium',             
            text2:'Symbol - ETH',             
            text3:'Address   -      #7890'

        }

    ])
    return(
        
        <div>
            <section>
                <div className="container">
                    <h5>Pair Search Results</h5>
                    <div className="cards">
                        {
                            cards.map((card,i)=>(
                                <div key={i} class="card">
                                <h5>
                                  {card.title}
                                  <FcGoogle/>

                                </h5>
                                <p>{card.text1}</p>
                                <p>{card.text2}</p>
                                <p>{card.text3}</p>
                                <p>{card.text4}</p>
                                <p>{card.text5}</p>
                                </div>
                            ))

                        }


                    </div>
                </div>
            </section>
        </div>



            

    )

}