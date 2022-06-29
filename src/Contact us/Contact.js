import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage,faEnvelope,faUser } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div className='ContactUs'>
      <div className='containerkotak'/>
        <h1 className='contact1'>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form action="mailto:paesyon@gmail.com" method="post" enctype="text/plain">
          <div className="form-input">
            <div className="input-group">
              <input className="input1" id="name" type="te~xt"/>
              <label for="name">
                <span className="icon"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span> Nama
              </label>
            </div>
            <div className="input-group">
              <input className="input1" type="email" placeholder="email@domain.com" id="email"/>
              <label for="email">
                <span className="icon"><FontAwesomeIcon icon={faEnvelope} className="fa-solid fa-envelope"></FontAwesomeIcon></span> Email 
              </label>
            </div>
            <div className="input-group">
              <textarea className="input2" name="Pesan" id="pesan" cols="37" rows="7" type="text"></textarea>
              <label for="pesan">
                <span className="icon"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></span> Pesan
              </label>
            </div>
            <button className="send" type='submit'><a href="#">Kirim</a></button>
            <input className='reset' type="reset" value="Reset"></input>
          </div>
        </form>
      </div> 
  )
}