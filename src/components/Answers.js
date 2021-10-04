import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Text Answer 1" />
    </div>
  );
}

export default Answers;
