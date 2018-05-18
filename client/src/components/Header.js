import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {

    renderContent() {
        switch (this.props.auth) {

            case null:
                return;
            case false:
                return (<li><a href="/auth/google"><button className="btn">Google Login</button></a></li>);
            default:
                return ([
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{marginLeft: '16px'}}>
                        <button className="btn">
                        Credits : {this.props.auth.credits}
                        </button>
                    </li>,
                    <li key="3"><a href="/api/logout"><button className="btn">Logout</button></a></li>

                ]);
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >Logo</Link>
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
    return {auth};
}

export default connect(mapStateToProps)(Header);