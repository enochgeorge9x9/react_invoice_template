import React from 'react';

const Header = () => {
  return (
    <div className="border border-dark d-flex justify-content-between gap-4">
      <img src="./assets/LOGO_V4.png" className="h-100" alt="Kevin Management Consulting Logo" />

      <div className="company-address">
        <div className="text-end border border-dark h-100 pt-2 fs-6">
          {/* Changed font size to fs-6 */}
          Kevin Management Consulting W.L.L Corporate Office, Office No. 217, Rd. 1030, Bldg. 1418, Blk. 1010, Kingdom
          of Bahrain, C.R.No 118717-1
        </div>
      </div>
    </div>
  );
};

export default Header;
