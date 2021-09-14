import React from "react";

import WhiteLines from "../white-lines/white-lines.component";
import FullDot from "../full-dot/full-dot.component";
import Circles from "../circles/circles.component";
import RoundBorder from "../round-border/round-border.component";

import './round.styles.scss'


const Round = () => (
 <div className="round">
   <FullDot />
   <WhiteLines />
   <Circles />
   <RoundBorder />
 </div>
);

export default Round;
