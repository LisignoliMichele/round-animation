import React from "react";

import './circles.styels.scss';

import Circle from '../../assets/circle.svg'


const Circles = () => (
   <div className="circles">
      <div className="elements">
         <div><img src={Circle} alt="Circle"/></div>
         <div><img src={Circle} alt="Circle"/></div>
         <div><img src={Circle} alt="Circle"/></div>
         <div><img src={Circle} alt="Circle"/></div>
         <div><img src={Circle} alt="Circle"/></div>
      </div>
   </div>
)

export default Circles;