import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Personal = () => {
  const { id } = useParams();
  //Utilize React state to store and manage the fetched data, avoiding direct manipulation of the DOM.
  const [person, setPerson] = useState('Not available');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    //Implement error handling to handle fetch failures gracefully.
      try {
        const response = await fetch('https://api.fbi.gov/wanted/v1/list');
        const data = await response.json();
        const wantedPeople = Object.values(data)[1];
        const selectedPerson = wantedPeople.find(person => person.uid === id);

        if (!selectedPerson) {
          setError('Person not found');
          setLoading(false);
          return;
        }

        setPerson(selectedPerson);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div><h1>Loading...</h1></div>;
  if (error) return <div>Error: {error}</div>;
  if (!person) return null;

  return (
    <div>
      <div className="back-container">
        <Link className='back' to='/'>Back</Link>
      </div>

      <h3>{person.title}</h3>
      <div className='card-row'>
        {person.images.map(image => (
          <div className='card-image' key={image.original}>
            <div style={{ width: '380px', color: 'azure' }}>
              <img width='240px' height='320px' src={image.original} alt="Wanted Person" />
            </div>
          </div>
        ))}
      </div>
      <div className='description'>
        <div className='description-child'>
          <div className='description-table'>
            <p className='aliases'><span>Aliases:</span> {person.aliases}</p>
            <p className='age-range'><span>Age range:</span> {person.age_range}</p>
            <p className='nationality'><span>Nationality:</span> {person.nationality}</p>
            <p className='sex'><span>Sex: </span>{person.sex}</p>
            <p className='hair'><span>Hair: </span>{person.hair}</p>
            <p className='eyes'><span>Eyes: </span>{person.eyes}</p>
            <p className='complexion'><span>Complexion: </span>{person.complexion}</p>
            <p className='weight'><span>Weight: </span>{person.weight}</p>
            <p className='scars-and-marks'><span>Scars and marks: </span>{person.scars_and_marks}</p>
            <p className='occupations'><span>Occupations: </span>{person.occupations}</p>
            <p className='languages'><span>Languages: </span>{person.languages}</p>
            <p className='place-of-birth'><span>Place of birth: </span>{person.place_of_birth}</p>
            <p className='details'><span>Details: </span>{person.details}</p>
            <p className='caution'><span>Caution: </span>{person.caution}</p>
            <p className='subjects'><span>Suspects: </span>{person.subjects}</p>
            <p className='description'><span>Description: </span>{person.description}</p>
            <p className='person-classification'><span>Classification: </span>{person.person_classification}</p>
            <p className='reward-text'><span>Reward: </span>{person.reward_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
