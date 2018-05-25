import React, {Component} from 'react';


const Landing = () =>{

    return(
        <div style={{textAlign : 'center'}}>
            <h1>
                Survey Service
            </h1>
            Collect feedback from users
            <li key="10" style={{marginLeft: '16px'}}>
            <a href="/api/boxfiles"><button className="btn">Try Box</button></a>
            </li>
        </div>
    );
};

export default Landing;