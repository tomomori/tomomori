import { useState } from 'react';

const Form = () => {
    const [city, setCity] = useState("");
    return (
        <form >
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} />
            <div style={{"color":"red"}}> {city}</div>
            <button className="btn btn-primary bi bi-alarm" type="button" >Get Weather</button>
        </form>
    );
};

export default Form;
