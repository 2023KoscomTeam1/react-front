import * as React from 'react';
import Typography from '@mui/joy/Typography';
import "./BuildingInfo.css"


export default function InvestInfo() {
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
            <p>공모금액</p>
                <p className="value"> 490,000,000 원</p>
            </span>
            <span className='sad'>
            <p>공모가</p>
                <p className="value"> 13,000원 </p>
            </span>
            <span className="sad">
                <p>조각수</p>
                <p className="value">3770 조각 </p>
            </span>
            <span className="sad">
                <p>보유조각</p>
                <p className="value">2,000 조각</p>
            </span>
            <span className="sad">
                <p>지분비율</p>
                <p className="value">53.05% </p>
            </span>
        </div>
    );
}

