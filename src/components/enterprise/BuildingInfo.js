import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import "./BuildingInfo.css"


export default function BuildingInfo() {
    return (
        <div>
            <Typography
                id="basic-list-demo"
                level="body-xs"
                textTransform="uppercase"
                fontWeight="lg"
            >
            </Typography>
            <span className="sad">
                <p>주소</p>
                <p className="value">서울시 강남구 테헤란로 51길 14</p>
            </span>
            <span className='sad'>
            <p>규모</p>
                <p className="value">B2~13F </p>
            </span>
            <span className='sad'>
            <p>거래대상</p>
                <p className="value"> B2~13F </p>
            </span>
            <span className='sad'>
            <p>거래면적</p>
                <p className="value">215.71평 </p>
            </span>
            <span className="sad">
                <p>건폐율</p>
                <p className="value">58.90% </p>
            </span>
            <span className="sad">
                <p>용적률</p>
                <p className="value">196.71% </p>
            </span>
            <span className="sad">
                <p>주용도</p>
                <p className="value">상가건물 </p>
                </span>
        </div>
    );
}

