import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    async function getApi() {
        const response = await fetch('https://random-d.uk/api/random');
        return (await response.json());
    }

    useEffect(() => {
        getApi()
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [])


    return (
        <>
            {!loading && <div className="App">
                <img src={data.url} alt={''} />
            </div>}
        </>
    );
}

export default App;