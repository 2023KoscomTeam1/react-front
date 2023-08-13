import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

export default function BasicList() {
  return (
    <div>
      <Typography
        id="basic-list-demo"
        level="body-xs"
        textTransform="uppercase"
        fontWeight="lg"
      >
      </Typography>
      <List aria-labelledby="basic-list-demo">
        
        <ListItem>자산 유형 : 상가</ListItem>
        <ListItem>세부 유형 : 음식점(카페)</ListItem>
        <ListItem>평가 금액 : 1,000,000(천원)</ListItem>
      </List>
    </div>
  );
}
