import React from "react";

import WhiteLines from "../white-lines/white-lines.component";
import FullDot from "../full-dot/full-dot.component";
import Circles from "../circles/circles.component";
import RoundBorder from "../round-border/round-border.component";
import RoUnd from "../r-und-white/r-und-white.component";
import Ø from "../ø/Ø.component";
import RGBlines from "../rgb-lines/rgb-lines.component";
import WhiteO from "../whiteø/whiteø.component";


import './round.styles.scss'


const Round = () => (
 <div className="round">
    <FullDot />
    <WhiteLines />
    <Circles />
    <RoundBorder />
    <Ø />
    <RoUnd />
    
    {/* <WhiteO />   */}
    <RGBlines />
    
 </div>
);

export default Round;
