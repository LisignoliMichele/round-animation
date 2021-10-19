import React from "react";

import './full-round.styles.scss';

import Tm from '../../assets/tm.png'
import FullRoundSvg from '../../assets/roundfull.svg'
import FoundNow from "../found-now/found-now.component";

const FullRound = () => (
   <div className="fullRound-withBorder">
      <div className="content">
         <img className="fullRoundimg" src={FullRoundSvg} alt="FullRoundSvg"/>
         <img className="tm" src={Tm} alt="Tm" />
         <FoundNow />
         
      </div>
   </div>
)

export default FullRound