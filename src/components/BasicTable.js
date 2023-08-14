import { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../App.css";
import { styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BasicTable({ buyData, sellData }) {
  let rows = [];

  const [rowData, setRowData] = useState([{ sell: 0, orderPrice: 0, buy: 0 }]);

  function createBuyData(orderPrice, amount) {
    return { sell: 0, orderPrice, buy: amount };
  }

  function createSellData(orderPrice, amount) {
    return { sell: amount, orderPrice, buy: 0 };
  }

  const putData = useCallback(async () => {
    if (rows.length !== buyData.length + sellData.length) {
      sellData.map((d) => rows.push(createSellData(...d)));
      buyData.map((d) => rows.push(createBuyData(...d)));

      setRowData(rows);
    }
  }, [rows]);

  useEffect(() => {
    putData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 100, minHeight: 600 }}
        aria-label="simple table"
        className={"tableHead"}
      >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="right" className={"tableHead"}>
              매도
            </StyledTableCell>
            <StyledTableCell align="center" className={"tableHead"}>
              호가
            </StyledTableCell>
            <StyledTableCell align="left" className={"tableHead"}>
              매수
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <StyledTableRow key={row.orderPrice}>
              <StyledTableCell align="right">{row.sell}</StyledTableCell>
              <StyledTableCell align="center">{row.orderPrice}</StyledTableCell>
              <StyledTableCell align="left">{row.buy}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
