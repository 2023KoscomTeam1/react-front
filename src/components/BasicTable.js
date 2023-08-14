import { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// 파라미터로 rows 넣어야 함
export default function BasicTable({ data }) {
  const rows = [];
  function createData(sell, orderPrice, buy) {
    return { sell: sell ? sell : 0, orderPrice, buy: buy ? buy : 0 };
  }

  useEffect(() => {
    // console.log(data);
    console.log("data", data);
    // data.map((d) => rows.push(createData(...d)));
    // console.log("this is rows", rows);
  }, []);

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0),
  //   createData("Ice cream sandwich", 237, 9.0),
  //   createData("Eclair", 262, 16.0),
  //   createData("Cupcake", 305, 3.7),
  //   createData("Gingerbread", 356, 16.0),
  // ];
  return (
    <div></div>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 500 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell align="right">매도</TableCell>
    //         <TableCell align="center">호가</TableCell>
    //         <TableCell align="left">매수</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell align="right">{row.name}</TableCell>
    //           <TableCell align="center">{row.calories}</TableCell>
    //           <TableCell align="left">{row.fat}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
