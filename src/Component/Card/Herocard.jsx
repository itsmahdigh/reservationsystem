import React from 'react'
import barberdata from '../../assets/barberdata'
import './card.css'
export default function card(props) {


        return (
                <div className='card-info'>
                        <div className="image">
                                <img src={props.image} alt="" />
                        </div>
                        <div id="text">
                                <div className="barbername">{
                                        props.name
                                }</div>
                                <div className="leftt">
                                        {props.id}
                                </div>
                        </div>
                </div>
        )
}
