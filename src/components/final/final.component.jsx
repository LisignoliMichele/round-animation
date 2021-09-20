import React from "react";

import './final.styles.scss';

import Øfinal from '../../assets/øborders.svg';
import WorkInProgress from '../../assets/WIP.svg';
import Contacts from '../../assets/contacts.svg'

const Final = () => (
   <div>
      <img className="ø-final" src={Øfinal} alt="Øfinal"/>
      <img className="work-in-progress" src={WorkInProgress} alt="WorkInProgress"/>
      <img className="contacts" src={Contacts} alt="Contacts"/>
   </div>
);

export default Final;