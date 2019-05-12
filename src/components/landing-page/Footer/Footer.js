import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {

    render() {
        return (
           <footer>
               <div className="page_container">
                   <div className="footer__content_wrapper">
                       <div className="footer_content__left">
                           saraems&copy;
                       </div>
                       <div className="footer_content__right">
                           <p>Polityka prywatnosci</p>
                           <p>Kontakt</p>
                       </div>
                   </div>
               </div>
           </footer>
        );
    }
}

export default Footer;