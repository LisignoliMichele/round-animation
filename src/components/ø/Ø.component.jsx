import React from 'react';

import './Ø.styles.scss';

import Osvg from '../../assets/ø.svg';
import Colors from '../colors/colors.component';

const Ø = () => (
  <div className="ø" >
    <div className="container">
      <Colors />
      <img className="mainø" src={Osvg} alt="Osvg" />
    </div>
  </div> 
)

export default Ø