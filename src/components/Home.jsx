import React, { useEffect, useState } from 'react';

export const Home = () => {

    const [wantedPeople, setWantedPeople] = useState([]);
    const url = 'https://api.fbi.gov/wanted/v1/list';

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const { items } = await response.json();
            setWantedPeople(items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='card-row'>
            {wantedPeople.map(person => (
                <div key={person.uid} className='person-card'>
                    <h3>{person.title}</h3>
                    <a href={`/person/${person.uid}`}>
                        <img src={person.images[0]?.original} alt={person.images[0]?.caption} width='280px' height='330px' loading='lazy' />
                    </a>
                </div>
            ))}
        </div>
    )
}


