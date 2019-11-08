import React from 'react';
import './Header.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import gravatar from '../../utils/gravatar';
import { logoutRequest } from '../../redux/actions/index'

const Header = ( props ) => {

    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const logout = () => {
        props.logoutRequest({});
    }

    return(
        <header>
             <header className="header">
                <Link to="/"><img className="header__img" src={process.env.PUBLIC_URL + './logo-platzi-video-BW2.png'} alt="Platzi Video" /></Link>
                <div className="header__menu">
                <div className="header__menu--profile">
                <img src={hasUser ? gravatar(user.email) :  process.env.PUBLIC_URL + './user-icon.png'} alt="Img User"/>
                    <p>{ hasUser ? user.email : 'Perfil'}</p>
                </div>
                <ul>
                    {hasUser ?
                    <>
                        <li><Link to="/">Cuenta</Link></li>
                        <li><Link to='/login' onClick={logout} > Cerrar Sesión </Link></li>
                        </>
                        : <li><Link to='/login' onClick={ logout }> Iniciar Sesión </Link></li>
                    }
                </ul>
                </div>
            </header>
        </header>
    )
}

const mapStateToProps = ( state ) => {
    return{
        user: state.user,
    }
}

const mapDispatchToProps = {
    logoutRequest,
}


export default connect (mapStateToProps, mapDispatchToProps) (Header);