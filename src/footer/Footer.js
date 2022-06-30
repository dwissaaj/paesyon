import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTwitter, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
  return (
    <div className='Ask'>
      <div className='sectionfooter'>
        <h1 className='askus'>Ask Us</h1>
        <div className='icons'> 
          <a className='icon1 icon--whatsapp' href='https://wa.me/'><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
          <a className='icon1 icon--twitter' href='https://twitter.com/'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
          <a className='icon1 icon--instagram' href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          <a className='icon1 icon--line' href='https://line.me/id/'><FontAwesomeIcon icon={faLine}></FontAwesomeIcon></a>
        </div>
        <p className='footerClass'>Self confident is your the best outfit</p>
      </div>
    </div>
  )
}
