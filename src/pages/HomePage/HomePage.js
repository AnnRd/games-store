import './HomePage.scss';
import games from '../../gamesStore/games';

function HomePage() {
    return (
        <div className='home-page'>
            {games.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    );
}

export default HomePage;