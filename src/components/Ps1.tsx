import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span style={{ color: "#f14d50"}} className="text-light-yellow dark:text-dark-yellow">
        {config.ps1_username}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span style={{color: "#2392f1"}} className="text-light-green dark:text-dark-green">
        {config.ps1_hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
