import leaderboardfont from "../assets/Leaderboardfont.png";
import firstPlace from "../assets/FirstPlace.png";
import secondPlace from "../assets/SecondPlace.png";
import thirdPlace from "../assets/ThirdPlace.png";

// Test Spieler
const Score = () => {
  const players = [
    { rank: 1, name: "Frank", matches: 50, wins: 35 },
    { rank: 2, name: "Renke", matches: 45, wins: 30 },
    { rank: 3, name: "Sharon", matches: 40, wins: 25 },
    { rank: 4, name: "Siddhali", matches: 35, wins: 20 },
    { rank: 5, name: "Daniel", matches: 30, wins: 15 },
    { rank: 6, name: "Thomas", matches: 14, wins: 5 },
    { rank: 7, name: "Alex", matches: 37, wins: 21 },
    { rank: 8, name: "Sabrina", matches: 23, wins: 21 },
    { rank: 9, name: "Ali", matches: 20, wins: 15 },
    { rank: 10, name: "Michal", matches: 9, wins: 7 },
  ];
  // Sortiert die Spieler nach dem Verhältnis Wins / Matches. ( Überschreibt die vordefinierten Ränge oben.)
  players.sort((a, b) => b.wins / b.matches - a.wins / a.matches);
  // Hier wird der Rang vergeben basierend auf der Position im sortierten Array.
  players.forEach((player, index) => {
    player.rank = index + 1;
  });

  return (
    <div className='max-w-xl mx-auto my-5 p-4 pt-6 md:p-6 lg:p-12 bg-transparent rounded shadow-md'>
      <img
        src={leaderboardfont}
        alt='Leaderboard'
        className='w-2/3 pb-3 mx-auto '
      />
      <div className='overflow-y-auto h-64'>
        {" "}
        <ol className='list-none'>
          <li className='flex items-center mb-2 py-2 px-2 rounded-md bg-orange-400 text-black'>
            <span className='text-lg font-bold w-12 text-center underline  decoration-double'>
              Rank
            </span>
            <span className='flex-1 text-lg font-bold pl-4 underline  decoration-double '>
              Playername
            </span>
            <span className='text-lg w-24 font-bold text-center underline  decoration-double '>
              Matches
            </span>
            <span className='text-lg w-24 font-bold text-center underline  decoration-double'>
              Wins
            </span>
          </li>
          {players.map((player, index) => (
            <li
              key={index}
              className='flex items-center mb-2 bg-orange-200 text-black hover:bg-orange-300 cursor-pointer'
            >
              {/* Übergabe der Bilder von 1st bis 3rd Place */}
              <span className='text-lg font-bold w-12 text-center'>
                {player.rank === 1 ? (
                  <img
                    src={firstPlace}
                    alt='1st Place'
                    className='mx-auto size-9'
                  />
                ) : player.rank === 2 ? (
                  <img
                    src={secondPlace}
                    alt='2nd Place'
                    className='mx-auto size-9'
                  />
                ) : player.rank === 3 ? (
                  <img
                    src={thirdPlace}
                    alt='3rd Place'
                    className='mx-auto size-8'
                  />
                ) : (
                  player.rank
                )}
              </span>
              <span className='flex-1 text-lg pl-4'>{player.name}</span>
              <span className='text-lg w-24 text-center'>{player.matches}</span>
              <span className='text-lg w-24 text-center'>
                {player.wins} Wins
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Score;
