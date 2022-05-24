import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBlock(props) {
    if (props.size !== props.links.length || props.size !== props.icons.length || props.size !== props.names.length) {
        return (
            <p>error : element != size</p>
        )
    }
    
    return (
        <div className="NavBlock">
            {props.title && <h1>{props.title}</h1>}
            <div className="NavBlock-links-container">
                {props.names.map((name, index) => (
                    <Link to={props.links[index]} className='NavBlock-link' key={index} style={{cursor:"pointer"}}>
                        <img src="#" alt="img" />
                        <p key={index}>{name}</p>
                    </Link>
                    
                ))}
            </div>

        </div>


    )
}
