import cardBackImg from "../assets/pokecardbackground.jpg";

function CardBack() {
  return (
    <div className="rounded-xl overflow-hidden max-w-40 rotate-180">
      <img src={cardBackImg} alt="image cardback" />
    </div>
  );
}

export default CardBack;
