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
  let rows = [];
  // for (let i = 0; i < buyData.length + sellData.length; i++) {
  //   rows.push({ sell: 0, orderPrice: 0, buy: 0 });
  // }

  const [rowData, setRowData] = useState([{ sell: 0, orderPrice: 0, buy: 0 }]);

  function createBuyData(orderPrice, amount) {
    return { sell: 0, orderPrice, buy: amount };
  }

  function createSellData(orderPrice, amount) {
    return { sell: amount, orderPrice, buy: 0 };
  }

  const putData = useCallback(async () => {
    sellData.map((d) => rows.push(createSellData(...d)));
    buyData.map((d) => rows.push(createBuyData(...d)));
    setRowData(rows);
  }, []);

  useEffect(() => {
    // rows = [];
    putData();
    console.log("this is rows", rows);
    // setRowData(rows);
    console.log("rowData", rowData);
    // console.log(rows2);
    // rows2.push(createData("Frozen yoghurt", 159, 6.0, 24, 4.0));
  }, [rowData]);

  // useEffect(() => {}, [rowData]);

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
          {rowData.map((row) => (
            <TableRow>
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
