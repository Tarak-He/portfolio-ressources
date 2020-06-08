import React from 'react';
import { Chip } from 'react-mdl';


export class Home extends React.Component {

    render(){
        return(
            <div className="home">
                <div>
                    <svg version="1.0" id="Calque_1" x="0px" y="0px" viewBox="0 0 172.1 195.3" enable-background="new 0 0 172.1 195.3" xml-space="preserve"> <polygon fill="#32AFB2" points="5.1,4.6 167.6,4.6 152.5,171.3 86.1,190.2 19.3,170.9 "/> <polygon fill="#288989" points="86.1,15 86.1,180.4 145.1,163.6 158.5,15 "/><path fill="#FFFFFF" d="M129.5,52.9V24.5H43.2v28.5h28.2c-6.8,33.4,3.1,65.4,25.8,81.3c11.4,8,23.6,10.3,32.3,10.8c0-9.4,0-18.9,0-28.3c-4.5-0.1-8-1.2-10.7-2.5c-15.6-7.5-22.6-32.1-18.8-61.3H129.5z"/></svg>
                    

                </div>
                <div id="intro-title">
                    <h1>Tarak-Hentati<span style={{fontSize:'24px'}}>.web.app</span></h1>
                    <p>Full-Stack Junior Web Developer</p>
                </div>
            </div>
        )
    }

}

export default Home;