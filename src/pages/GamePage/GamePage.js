import { useSelector } from 'react-redux';
import GameCover from '../../components/GameCover/GameCover';
import GameGenre from '../../components/GameGenre/GameGenre';
import GameBuy from '../../components/GameBuy/GameBuy';
import './GamePage.scss';

function GamePage() {
    const game = useSelector(state => state.game.currentGame);

    if (!game) return null; //чтобы при обновлении страницы не полетело

    return (
        <div className='game-page'>
            <h1 className="game-page-title">{game.title}</h1>
            <div className="game-page-content">
                <div className="game-page-left">
                <iframe
                    width="90%"
                    height="400px"
                    src={game.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
                </div>
                <div className="game-page-right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text">Популярные метки для этого продукта:</p>
                    {game.genres.map((genre) => (
                        <GameGenre genre={genre} key={genre} />
                    ))};
                    <div className="game-page-buy-game">
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamePage;