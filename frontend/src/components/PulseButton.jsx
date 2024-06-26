import startBtn from "../assets/fontstart.png";
import shuffleBtn from "../assets/fontshuffledealblk.png";
import fightBtn from "../assets/fontfightblk2.png";
import resultBtn from "../assets/fontviewscore.png";
import newRoundBtn from "../assets/fontnewround.png";
import gameOverBtn from "../assets/fontnewround.png";
import playAgainBtn from "../assets/fontplayagain.png";

function PulseButton({view, handleClick, newRound = false, gameOver = false}) {

	let btn;
	if (view === "start") btn = startBtn;
	if (view === "shuffle") btn = shuffleBtn;
	if (view === "fight") btn = fightBtn;
	if (view === "fight" && newRound === true) btn = newRoundBtn;
	if (view === "fight" && gameOver === true) btn = gameOverBtn;
	if (view === "result") btn = resultBtn;
	if (view === "score") btn = playAgainBtn;

	return (
		<button className="my-4 mx-auto animate-pulse" onClick={handleClick}>
			<img src={btn} className="h-16 w-auto" alt="#"/>
		</button>
	);
}

export default PulseButton;
