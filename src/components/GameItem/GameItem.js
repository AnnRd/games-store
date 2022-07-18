import games from '../../gamesStore/games';
import GameBuy from '../GameBuy/GameBuy';
import GameCover from '../GameCover/GameCover';
import GameGenre from '../GameGenre/GameGenre';
import './GameItem.scss';

function GameItem ({game}) {
    return (
        <div className='game'>
            <GameCover image={game.image}/>
            <div className="game-details">
                <span className="game-title">{game.title}</span>
                <div className="game-genres">
                    {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
                </div>
                <div className="game-button">
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    )
}

export default GameItem;