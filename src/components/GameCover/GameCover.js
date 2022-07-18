import './GameCover.scss';

function GameCover ({image = ''}) {
    return (
        <div className="game-cover" style={{backgroundImage: `url(${image})`}}/>
    )
}

export default GameCover;