import React from "react";

import './final.styles.scss';

import Øfinal from '../../assets/øborders.svg';
import WorkInProgress from '../../assets/WIP.svg';
import Contacts from '../../assets/contacts.svg'

const Final = () => (
   <div>
      <img className="ø-final" src={Øfinal} alt="Øfinal"/>
      <img className="work-in-progress" src={WorkInProgress} alt="WorkInProgress"/>
      <div className="contacts">
         <img  src={Contacts} alt="Contacts"/>
         <div className="contactslinks">
            <a className="phone" href="tel:+41(0)919951122"><div/></a>
            <a className="email" href="mailto:info@round-sgi.com"><div/></a> 
         </div>
      </div>
      
      
   </div>
);

export default Final;