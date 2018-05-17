import React, {Component} from 'react';
import {connect} from 'react-redux';


class Header extends Component{

    renderContent(){
        switch (this.props.auth) {

            case null:
                return;
            case false:
                return (<li><a href="/auth/google">Login with Google</a></li>);
            default:
                return (<li><a href="/api/logout">LogOut</a></li>);
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">FirstFullStack</a>
                    <ul className="right">
                        <li><a>{this.renderContent()}</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
/*function mapStateToProps(state) {
    return{auth:state.auth};
}*/

function mapStateToProps({auth}) {
    return{auth};
}

export default connect (mapStateToProps)(Header);