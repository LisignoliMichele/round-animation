import React from "react";
import './circles.styels.scss';

import { ReactComponent as Circle } from '../../assets/circle.svg'


const Circles = () => (
   <div className="circles">
      <div className="elements">
       <div><Circle /></div>
       <div><Circle /></div>
       <div><Circle /></div>
       <div><Circle /></div>
       <div><Circle /></div>
      </div>
   </div>
)

export default Circles;