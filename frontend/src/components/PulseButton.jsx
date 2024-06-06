import shuffleBtn from "../assets/fontshuffledealblk.png";
import fightBtn from "../assets/fontfightblk2.png";
import resultBtn from "../assets/fontviewscore.png";

function PulseButton({ view }) {
  console.log(view);
  let btn;
  if (view === "shuffle") btn = shuffleBtn;
  if (view === "fight") btn = fightBtn;
  if (view === "result") btn = resultBtn;
  return (
    <button className="my-8 max-w-48 mx-auto animate-pulse">
      <img src={btn} />
    </button>
  );
}

export default PulseButton;
