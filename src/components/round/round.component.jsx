import React from "react";

import { ReactComponent as RoundSVG } from '../../assets/røund.svg'
import WhiteLines from "../white-lines/white-lines.component";


import './round.styles.scss'


const Round = () => (
 <div className="round">
   <WhiteLines />
   <RoundSVG />
 </div>
);

export default Round;
