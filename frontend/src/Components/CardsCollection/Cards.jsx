import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import shopify from "../../utils/images/shopify.png";
import dokan from "../../utils/images/dokan.png";
import zid from "../../utils/images/zid.png";
import panda from "../../utils/images/panda.png";
import woocommere from "../../utils/images/woocommerce.png";
import magneto from "../../utils/images/magneto.png";
import opencart from "../../utils/images/opencart.png";
import slla from "../../utils/images/salla.png";
import amazon from "../../utils/images/amazon.png";
import flipkart from "../../utils/images/flipkart.png";
import myntra from "../../utils/images/myntra.png";
import datas from "../../../src/data/cards.json";
import Card from './Card';

const Cards = () => {
    const {text} = useParams();
    const [active,setActive] = useState('Integrated');
    const arr = ['Integrated','AllChannels','ComingSoon'];
    console.log(text);
    console.log(datas);
    return (
        <>
        <div className='dropdowntext'>
            <h1>{text}</h1>
        </div>
            <div className='navbar'>
                {
                    arr.map((item, index) => {
                        return (
                           <h3 style={active===item?{borderBottom:"2px solid blue",color:"blue"}:{borderBottom:"2px solid transparent"}} onClick={()=>setActive(item)}>{item}</h3>
                        )
                    })
                }
            </div>
            <div className='cardsContainer'>
                {
                datas.map((item, index)=><Card key={index} item={item} image={shopify}/>)
                //    return (<div>
                //         <h3>{data.title}</h3>
                //            {data.cards && <div>
                //             {                            
                //             data.cards((item,i)=>{
                //                 return(
                //                     <div>
                //                        <span>{item.active}</span>
                //                        <div><img src={item.img} alt={`${item.company}`}/></div>
                //                        <p>{item.name}</p>
                //                        <p>{item.compnay}</p>
                //                     </div>

                //                 )
                //             })
                //             }
                //             </div> }
                //         </div>)
                // })
                    
                // }
            }
               
            </div>
        </>
    );
};

export default Cards;