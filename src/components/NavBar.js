import React from 'react'
import NavBlock from './NavBlock'
import "../assets/styles/navbar.css"
export default function () {
    return (
        <nav>
            <NavBlock
                size={3}
                icons={[
                    "1",
                    "2",
                    "3"
                ]}
                names={[
                    "name1",
                    "name2",
                    "name3"]}
                links={[
                    "link1",
                    "link2",
                    "link3"
                ]}
            />
            

        </nav>
    )
}

