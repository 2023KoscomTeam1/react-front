import { Button, styled } from "@mui/material";

function ColorButton({ text, size }) {
  const ColorButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: size,
    padding: "5px 8px",
    lineHeight: 1.5,
    backgroundColor: "#E37622",
    color: "white",
    borderColor: "white",
    borderRadius: 8,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#72787F",
      borderColor: "#white",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#72787F",
      borderColor: "#white",
    },
  });
  return (
    <div>
      <ColorButton varient="contained">{text}</ColorButton>
    </div>
  );
}
export default ColorButton;
