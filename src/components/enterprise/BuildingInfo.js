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
                <p className="value">충남 예산군 덕산면 덕산온천로 227</p>
            </span>
            <span className='sad'>
            <p>규모</p>
                <p className="value">1~2F </p>
            </span>
            <span className='sad'>
            <p>거래대상</p>
                <p className="value"> 1~2F </p>
            </span>
            <span className='sad'>
            <p>거래면적</p>
                <p className="value">55.71평 </p>
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

