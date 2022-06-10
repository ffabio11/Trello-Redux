import { useTheme, createUseStyles } from "react-jss";
import { CommentsIcon } from "../../assets/icons";

const useStyles = createUseStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ececec",
    color: "black",
    padding: 14,
    margin: 12,
    maxWidth: 200,
    borderRadius: '12px',
    border: '1px solid black',
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  numberWrapper: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
    cursor: "pointer",
    '&:hover': {
      backgroundColor: '#569fab87',
      color: '#569fab',
      '& svg> path': {
        fill: '#569fab',
        
      }
    }
    
  },

  cardLabel: {
    backgroundColor: "orange",
    width: '50px',
    minHeight: '10px',
    borderRadius: 12,
  },
  cardDescr: {
    marginBottom: 12,
    fontSize: 14,
    color: '#424141'
  },
  
}));

function Card({ descr, title, actions, ...rest }) {
  const classes = useStyles();
  return (
    <div {...rest} className={classes.card}>
      <div className={classes.cardLabel}></div>
      <h4>{title}</h4>
      <div className={classes.cardDescr}>{descr}</div>
      <span className={classes.actions}>
        <span>A</span>
        <span style={{display: 'flex', gap: 8}}>
          <span className={classes.numberWrapper}>{actions.comments}<CommentsIcon/></span>
          <span className={classes.numberWrapper}>{actions.likes}</span>
          <span className={classes.numberWrapper}>{actions.attachments}</span>
        </span>
      </span>
    </div>
  );
}
export default Card;
