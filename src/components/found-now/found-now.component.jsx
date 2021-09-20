import React from 'react';

import './found-now.styles.scss';
import FoundFull from '../../assets/foundnow.svg'
import Now from '../../assets/now.svg'


const FoundNow = () => (
   <div>
      <img className="foundFull" src={FoundFull} alt="FoundFull" />
      <img className="now" src={Now} alt="Now" />
   </div>
)

export default FoundNow;