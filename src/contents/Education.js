import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering"  where="College Of Engineering Roorkee" from ="July 2003" to ="2007"/>
            <Widecard title="SSLC | HSC" where="JIC"/>
            </div>
            )
        }
    }
    
export default Education
    