import { useNavigate } from "react-router-dom";
import pikaSign from "../assets/pikasign.png";
import enterArenaFont from "../assets/fontenterarena.png";
import nameUnderline from "../assets/fontlineinput.png";
import PulseButton from "../components/PulseButton";
import brickwall from "../assets/darkbrickentrance.jpg";
import music from "../assets/pokemon-gym-made-with-Voicemod.mp3";
import loudspeaker from "../assets/loudspeaker.png";

const Start = () => {
  const navigate = useNavigate();
  const goToArena = () => {
    navigate("/arena");
  };

  // will start playing music by clicking the loudspeaker button
  function play() {
    new Audio(music).play();
  }

  return (
    <div className="brick-background relative">
      <img
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        src={brickwall}
      />
      <div className=" w-full h-full flex justify-center relative z-10 bg-black/60">
        <div className="grid grid-cols-1">
          <div>
            <img className="mx-auto w-full max-w-80" src={pikaSign} />
          </div>
          <div>
            <img className="mx-auto w-full max-w-64" src={enterArenaFont} />
          </div>
          <div>
            <input
              name="myInput"
              placeholder="INSERT NAME"
              className="bg-transparent mx-16 text-amber-500 placeholder:text-amber-500/70"
            />
          </div>
          <div>
            <img className="mx-auto w-full max-w-52 mb-0" src={nameUnderline} />
          </div>

          <PulseButton view="start" />
          <div>
            <button onClick={play}>
              <img className="max-w-8 mr-4" src={loudspeaker} />
            </button>
          </div>
          <div>
            Startview
            <p onClick={goToArena}>Entrance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
