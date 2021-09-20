import React from 'react';

import './round-border.styles.scss';
import RoundBorderSVG from '../../assets/white_border.svg'

const RoundBorder = () => (
   <div className="round-border">
      <div className="content">
         <img src={RoundBorderSVG} alt="RoundBorderSVG" />
       </div>
   </div>
)

export default RoundBorder;