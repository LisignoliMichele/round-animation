import React from "react";

import './full-round.styles.scss';

import Tm from '../../assets/tm.svg'
import FullRoundSvg from '../../assets/roundfull.svg'
import FoundNow from "../found-now/found-now.component";
import Final from "../final/final.component";

const FullRound = () => (
   <div className="fullRound-withBorder">
      <div className="content">
         <img className="fullRoundimg" src={FullRoundSvg} alt="FullRoundSvg"/>
         <img className="tm" src={Tm} alt="Tm" />
         <FoundNow />
         <Final />
      </div>
   </div>
)

export default FullRound