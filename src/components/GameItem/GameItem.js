import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GameBuy from '../GameBuy/GameBuy';
import GameCover from '../GameCover/GameCover';
import GameGenre from '../GameGenre/GameGenre';
import { setCurrentGame } from "../../redux/games/reducer";

import './GameItem.scss';

function GameItem ({game}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`app/${game.title}`);
    }
    return (
        <div className='game' onClick={handleClick}>
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