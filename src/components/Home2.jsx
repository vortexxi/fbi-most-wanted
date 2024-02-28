import React, { useEffect } from 'react';

export const Home2 = () => {

    const url = 'https://api.fbi.gov/wanted/v1/list';

    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
        })
    }

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();

        const arrayKeys = Object.keys(data);
        const arrayValues = Object.values(data);
        const arrayItems = Object.entries(data.items);

        let single = '';

        for (let k = 0; k < arrayValues[1].length; k++) {
            //console.log('for k number arrayValues: ', k, arrayValues[1][k]);
            let singleArray = arrayValues[1][k];

            let objeto = {
                id: singleArray.uid,
                files: singleArray.files,
                images: singleArray.images,
                title: singleArray.title,
                weight: singleArray.weight,
                age_range: singleArray.age_range,
                occupations: singleArray.occupations,
                field_offices: singleArray.field_offices,
                locations: singleArray.locations,
                reward_text: singleArray.reward_text,
                sex: singleArray.sex,
                hair: singleArray.hair,
                dates_of_birth_used: singleArray.dates_of_birth_used,
                caution: singleArray.caution,
                nationality: singleArray.nationality,
                scars_and_marks: singleArray.scars_and_marks,
                subjects: singleArray.subjects,
                aliases: singleArray.aliases,
                suspects: singleArray.suspects,
                publication: singleArray.publication,
                languages: singleArray.languages,
                complexion: singleArray.complexion,
                details: singleArray.details,
                status: singleArray.status,
                eyes: singleArray.eyes,
                person_classification: singleArray.person_classification,
                description: singleArray.description,
                possible_countries: singleArray.possible_countries,
                additional_information: singleArray.additional_information,
                url: singleArray.url,
                possible_states: singleArray.possible_states,
                race: singleArray.race,
                place_of_birth: singleArray.place_of_birth,
                poster_classification: singleArray.poster_classificati
            }

            single += `<div 
            style='color: azure; 
            display: flex;
            flex-wrap: wrap;
            margin-left: 80px;
            margin-right: 80px;
            justify-content: center;
            flex-direction: row;'>
                <div style='width: 380px;
                margin-bottom:100px;
                color: azure;'>
                    <h3>${objeto.title}</h3> <br /> 
                    <a href='/person/${objeto.id}'><img width='280px' height='330px' src=${objeto.images[0].original}  alt='${objeto.images[0].caption}' height='300px'/></a>
                    
                </div>
            </div>
            `;
        }
        //document.getElementById('files-array').innerHTML = text1;
        document.getElementById('row').innerHTML = single;
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div id='row' className='card-row'>
            </div>
        </div>

    )
}
