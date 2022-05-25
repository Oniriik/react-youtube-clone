import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBlock(props) {
    if (props.size !== props.links.length || props.size !== props.icons.length || props.size !== props.names.length) {
        return (
            <p>error : element != size</p>
        )
    }
    
    return (
        <div className="nav-block">
             {props.bTop && <hr/>}
            {props.title && <h1>{props.title}</h1>}
            <div className="links-container">
                {props.names.map((name, index) => (
                    <Link to={props.links[index]} className='link' key={index} style={{cursor:"pointer"}}>
                        <img src={props.icons[index]} alt="img" />
                        <p key={index}>{name}</p>
                    </Link>
                    
                ))}
            </div>
            {props.bBottom && <hr/>}
        </div>


    )
}
