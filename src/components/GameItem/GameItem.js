import games from '../../gamesStore/games';
import './GameItem.scss';

function GameItem ({game}) {
    return (
        <div className='game'>
            <div className="game-details">
                <span className="game-title">{game.title}</span>
                <div className="game-genre">
                    {game.genres.map(genre => genre)}
                </div>
                <div className="game-button">Buy</div>
            </div>
        </div>
    )
}

export default GameItem;