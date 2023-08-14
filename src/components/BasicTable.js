import { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// 파라미터로 rows 넣어야 함
export default function BasicTable({ buyData, sellData }) {
  let rows = [{ sell: 0, orderPrice: 0, buy: 0 }];
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  // let rows2 = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];

  function createBuyData(orderPrice, amount) {
    return { sell: 0, orderPrice, buy: amount };
  }

  function createSellData(orderPrice, amount) {
    return { sell: amount, orderPrice, buy: 0 };
  }

  useEffect(() => {
    rows = [];
    buyData.map((d) => rows.push(createBuyData(...d)));
    sellData.map((d) => rows.push(createSellData(...d)));
    console.log("this is rows", rows);
    // console.log(rows2);
    // rows2.push(createData("Frozen yoghurt", 159, 6.0, 24, 4.0));
  }, [rows]);
  useEffect(() => {}, [createBuyData]);

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0),
  //   createData("Ice cream sandwich", 237, 9.0),
  //   createData("Eclair", 262, 16.0),
  //   createData("Cupcake", 305, 3.7),
  //   createData("Gingerbread", 356, 16.0),
  // ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, minHeight: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">매도</TableCell>
            <TableCell align="center">호가</TableCell>
            <TableCell align="left">매수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              {/* <TableCell>lineHeight</TableCell> */}
              <TableCell align="right">{row.sell}</TableCell>
              <TableCell align="center">{row.orderPrice}</TableCell>
              <TableCell align="left">{row.buy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
