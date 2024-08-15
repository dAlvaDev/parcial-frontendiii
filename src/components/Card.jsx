
// eslint-disable-next-line react/prop-types
function Card({ actor, character }) {
    return (
        <div className="card">
            <h2>{actor}</h2>
            <p>Personaje: {character}</p>
        </div>
    );
}

export default Card;