import { ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountCircle } from "@mui/icons-material";
import styles from "./chat.module.css";

export const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick, handleDelChat }) {
  const s = useStyles();

  return (
    <>
      <ListItem
        className={s.item}
        button={true}
        selected={selected}
        onClick={handleListItemClick}
        data-testid="wrapper"
      >
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <div className={styles.description}>
          <ListItemText className={styles.text} primary={title} />
          <ListItemText className={styles.text} primary="12.30" />
        </div>
        <Button onClick={() => handleDelChat(title)}>X</Button>
      </ListItem>
    </>
  );
}
