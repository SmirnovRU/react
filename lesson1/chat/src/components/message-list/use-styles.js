import { makeStyles } from "@mui/styles";
// import { color, padding } from "@mui/system";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      border: "1px solid red",
      padding: "15px",
    },
    input: {
      color: "var(--new-color)",
      padding: "10px 15px",
      fontSize: "15px",
    },
    icon: {
      color: "var(--main-color)",
      cursor: "pointer",
    },
  };
});
