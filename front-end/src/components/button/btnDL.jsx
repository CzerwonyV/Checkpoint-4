import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import './btn.css';

const BtnDL = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="BtnDLContent">
        <a
        href="https://github.com/CzerwonyV/CzerwonyV/files/4893408/Victor.veyrier.3.pdf"
        download
        className="ADL"
        >
        <img src="https://user-images.githubusercontent.com/57908921/86609745-ab73e200-bfac-11ea-8ab5-5e9cc2fd2689.png" alt="BtnDL" className="ImgDL" id="TooltipDownload" />
        </a>
        <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipDownload" toggle={toggle}>
            Télécharger le CV
        </Tooltip>
    </div>
  );
};

export default BtnDL;