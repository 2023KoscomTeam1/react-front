import { Button, styled } from "@mui/material";

function ColorButton({ text, size, w, t }) {
  const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: size,
    width: w,
    padding: "5px 8px",
    lineHeight: 1.5,
    backgroundColor: "#E37622",
    color: "white",
    borderColor: "white",
    borderRadius: 8,
    opacity: 0.8,
    
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
      <CustomButton varient="contained" type={t}>
        {text}
      </CustomButton>
    </div>
  );
}
export default ColorButton;
