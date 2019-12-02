import React from 'react'

export default  function Navbar (){
    return (
        <header className>
                <nav>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>team</li>
                        <li>services</li>
                        <li>Pages<i className="fas fa-sort-down"></i></li>
                        <li>blog</li>
                        <button>submit project</button>
                    </ul>
                </nav>
        </header>
        )
}

