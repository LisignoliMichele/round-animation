import React from "react";

import './colors.styles.scss'

import mask from '../../assets/mask.svg';
import Colorssvg from '../../assets/colors.svg'

const Colors = () => (
   <div className="colors">
      <img className="colorssvg" src={Colorssvg} alt='Colorssvg' />
      <img className="masksvg" src={mask} alt='mask' />
   </div>
);

export default Colors;