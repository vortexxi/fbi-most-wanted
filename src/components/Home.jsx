import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
                    <h3 className='person-title'>{person.title}</h3>
                    <motion.div 
                    whileHover={{
                        scale: 1.05,
                        // transition: { duration: 0.5 },
                      }}
                      transition={{ ease: 'easeInOut'}}
                    
                    >
                        <a href={`/person/${person.uid}`}>
                            <img src={person.images[0]?.original} alt={person.images[0]?.caption} width='280px' height='330px' loading='lazy' />
                        </a>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}


