import React from 'react';
import '../App.css'; // 아래에 작성한 CSS 파일을 불러옵니다.

const ProgressBar = ({ percent }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%` }}>
        <div className="percent-text" style={{marginLeft: `${percent*1.2}%`}}>{percent}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;