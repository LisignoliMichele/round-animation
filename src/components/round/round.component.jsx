import React from "react";

import WhiteLines from "../white-lines/white-lines.component";
import FullDot from "../full-dot/full-dot.component";
import Circles from "../circles/circles.component";
import RoundBorder from "../round-border/round-border.component";
import RoUnd from "../r-und-white/r-und-white.component";
import Ø from "../ø/Ø.component";
import RGBlines from "../rgb-lines/rgb-lines.component";
import FullRoUndNoBorder from "../full-round-noBorder/full-round-noBorder.component";
import FullRound from "../full-round/full-round.component";
import Placeholder from "../../assets/found.svg"
import Final from "../final/final.component";

import './round.styles.scss'


const Round = () => (
 <div className="round">
 <img className="placeholder" src={Placeholder} alt="Placeholder" />
   <FullDot />
   <WhiteLines />
   <Circles />
   <RoundBorder />
   <Ø />
   <FullRound />
   <FullRoUndNoBorder />
   <RoUnd />
   <RGBlines />
   <div className="glass" />
   <Final />
 </div>
);

export default Round;
