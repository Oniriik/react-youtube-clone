import React from 'react'
import NavBlock from './NavBlock'
import "../assets/styles/navbar.css"
export default function () {
    return (
        <nav>
            <NavBlock
                bBottom = {true}
                size={3}
                icons={[
                    "https://i.ibb.co/zN9xPzL/Home.png",
                    "https://i.ibb.co/2N4mvVM/Explore.png",
                    "https://i.ibb.co/Tq4mKZz/subscriptions.png"
                ]}
                names={[
                    "Home",
                    "Explore",
                    "Subscription"
                    ]}
                links={[
                    "#",
                    "#",
                    "#"
                ]}
            />
            <NavBlock
                bBottom = {true}
                size={3}
                icons={[
                    "https://i.ibb.co/4sMvcWq/bookshelf.png",
                    "https://i.ibb.co/cT4XXvr/past.png",
                    "https://i.ibb.co/Tq4mKZz/subscriptions.png"
                ]}
                names={[
                    "Library",
                    "History",
                    "Subscription"
                    ]}
                links={[
                    "#",
                    "#",
                    "#"
                ]}
            />
            <NavBlock
                bBottom = {true}
                size={4}
                icons={[
                    "https://i.ibb.co/5WsGVjL/bx-cog.png",
                    "https://i.ibb.co/ZzRyhy9/bx-flag.png",
                    "https://i.ibb.co/5rSzXH6/bx-question-mark.png",
                    "https://i.ibb.co/W0NvWg8/bx-message-error.png"
                ]}
                names={[
                    "Settings",
                    "Report history",
                    "help",
                    "Send feedback"
                    ]}
                links={[
                    "#",
                    "#",
                    "#",
                    "#"
                ]}
            />

        </nav>
    )
}

