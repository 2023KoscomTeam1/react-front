import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import "./BuildingInfo.css"

export default function LandInfo() {
  return (
    <div>
      <Typography
        id="basic-list-demo"
        level="body-xs"
        textTransform="uppercase"
        fontWeight="lg"
      >
      </Typography>
      <span className='sad'>
            <p>용도 지역</p>
                <p className="value">상가</p>
            </span>
            <span className='sad'>
            <p>전체 대지면적</p>
                <p className="value"> 75.84평 </p>
            </span>
            <span className='sad'>
            <p>거래 대지면적</p>
                <p className="value">75.84평 </p>
            </span>
    </div>
  );
}

