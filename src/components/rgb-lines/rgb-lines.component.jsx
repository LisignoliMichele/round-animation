import React from "react";

import './rgb-lines.stylesheet.scss'

const RGBlines = () => (
   <div className='rgb-lines'>
      <div className='redline' />
      <div className='greenline'><span className='line' /></div>
      <div className='blueline'><span className='line' /></div>
   </div>
);

export default RGBlines;