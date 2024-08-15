import './App.css'
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";
import {useState} from "react";

function App() {
    const [actorInfo, setActorInfo] = useState(null);
    const [error, setError] = useState('');

    const handleFormSubmit = (actor, character) => {
        if (actor.length < 3 || /^\s/.test(actor)) {
            setError('Por favor chequea que la información sea correcta.');
            return;
        }

        if (character.length < 6) {
            setError('Por favor chequea que la información sea correcta.');
            return;
        }

        setActorInfo({ actor, character });
        setError('');
    };

    return (
        <div className="app">
            <h1>Personajes de Deadpool 3</h1>
            <div className="form-container">
                <Form onSubmit={handleFormSubmit} />
            </div>
            {error && <p className="error">{error}</p>}
            {actorInfo && <Card actor={actorInfo.actor} character={actorInfo.character} />}
        </div>
    );
}

export default App
