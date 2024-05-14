import React from 'react'
import Barberdata from '../../assets/barberdata'
import Card from '../Card/Herocard'
import './Popular.css'
export default function Popular() {
        return (
                <div>
                        <h2>
                                محبوب ترین ها
                        </h2>
                        <div className="populardata">
                                {Barberdata.map((i, index) => {
                                        return <Card key={i} id={index.id} name={index.name} img={index.img} />
                                })}
                        </div>
                </div>
        )
}
