import React from 'react'
import './Login.css';

import { connect } from 'react-redux';
import { loginRequest } from '../../redux/actions/index';
import { Link } from 'react-router-dom';


const Login = ( props ) => {

  const [form, setForm] = React.useState({
    email: '',
  });

  const handleInput = ( event ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }

    return(
        <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={ handleSubmit } >
            <input className="input" name="email" type="text" placeholder="Correo" onChange={ handleInput }/>
            <input className="input" name="password" type="password" placeholder="Contraseña"/>
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame 
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={process.env.PUBLIC_URL + './google-icon.png'} alt="Icono de Google"/> Inicia sesión con Google</div>
            <div><img src={process.env.PUBLIC_URL + './twitter-icon.png'} alt="Icono de Twitter"/> Inicia sesión con Twitter </div>
          </section>
          <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
        </section>
      </section>
    );
}

const mapDispatchToProps = {
  loginRequest,
}

export default connect (null, mapDispatchToProps) (Login);
