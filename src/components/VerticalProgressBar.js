import React from 'react';
import '../App.css'; // 게이지 바 스타일을 정의한 CSS 파일을 import

const VerticalProgressBar = ({ percent }) => {
  return (
    <div className="vertical-progress-bar">
      <div className="filler" style={{ height: `${percent}%` }}>
        <div className="filler-text">{percent}%</div>
      </div>
    </div>
  );
};

export default VerticalProgressBar;