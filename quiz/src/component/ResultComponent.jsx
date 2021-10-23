import React, { Component } from 'react'
import './Resultcompo.css';
/*import {CheckCircleOutlineOutlinedIcon} from '@mui/icons-material/CheckCircleOutlineOutlined';*/

export default class ResultComponent extends Component {
    render() {
        return (
            <div className="result_Container">
            <div className="head">
            <i class="fas fa-check-circle"></i>
                <h3>Result</h3>
            </div>
            <div className="body">
                <p className="h1">You need more practice!</p>
                <p className="h2">Your Score is : 20%</p>
                <div>
                    <p>Total number of questions:</p>
                    <p>15</p>
                </div>
                <div>
                    <p>Number o attempted questions:</p>
                    <p>9</p>
                </div>
                <div>
                    <p>Number of correct answers:</p>
                    <p>3</p>
                </div>
                <div>
                    <p>Number of wrong answers:</p>
                    <p>6</p>
                </div>
            </div>
            <div className="bottom">
                <button> Play Again</button>
                <button>Back to Home</button>
            </div>

        </div>
        )
    }
}
