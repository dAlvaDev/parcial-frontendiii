import {useState} from "react";

// eslint-disable-next-line react/prop-types
function Form({ onSubmit }){
    const [actor, setActor] = useState('');
    const [character, setCharacter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(actor, character);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label>Ingresa nombre del actor</label>
                <input
                    type="text"
                    value={actor}
                    onChange={(e) => setActor(e.target.value)}
                    placeholder="Nombre del actor"
                />
            </div>
            <div className="form-group">
                <label>Ingresa nombre del personaje</label>
                <input
                    type="text"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    placeholder="Nombre del personaje"
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
export default Form;