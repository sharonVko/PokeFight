import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../utils/context";
import PulseButton from "../components/PulseButton";
import CardBack from "../components/CardBack";
import defeat from "../assets/defeat.png";
import victory from "../assets/victory.png";

function Result() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-4 w-[80%] mx-auto">
        <div className="flex justify-center">
          <div className="mx-auto max-w-56 animate-pulse">
            <img src={victory} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto max-w-56 animate-pulse">
            <img src={defeat} />
          </div>
        </div>
        <div className="flex justify-center">
          <CardBack />
        </div>
        <div className="flex justify-center">
          <CardBack />
        </div>
      </div>
      <PulseButton view="result" />
    </div>

    // {/* // <>
    // // 	<div>RESULT</div>
    // // 	<button onClick={() => navigate('/score')}>Click</button>
    // // </> */}
  );
}

export default Result;
