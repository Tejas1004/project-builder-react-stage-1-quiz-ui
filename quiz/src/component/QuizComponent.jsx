import React, { Component } from 'react'
import './QuizCompo.css';

export default class QuizComponent extends Component {
    render() {
        return (
            <div class="container">
                <h1>Quetion</h1>
                     <div id="quetion">
                         <p>4 of 15  </p>
                         <p>Which is the only mamal that can't jump?</p>
                     </div>
                     <div id="option">
                         <p id="opt">Dog</p>
                         <p id="opt">Goat</p>
                         <p id="opt">Elephant</p>
                         <p id="opt">Lion</p>
                     </div>
                     <div className="process">
                         <button className="button1">Previous</button>
                         <button className="button1">Next</button>
                         <button className="button1">Skip</button>
                     </div>
            </div>
        
        )
    }
}
