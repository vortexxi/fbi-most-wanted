import React from 'react'


export const Form = () => {

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

        // for(const [key, value] of Object.entries(data)){
        //     console.log('key:', key);
        //     console.log('value: ', value);
        //     console.log('data key', data[key]);
        // }

        const arrayValues = Object.values(data);
      
        // for(let i = 0; i < arrayValues.length; i++){
        //     console.log('for i number arrayValues: ',i, arrayValues[i]);
        // }

        let single = '';

        let list = '';
        let text1 = '';


        for (let k = 0; k < arrayValues[1].length; k++) {
            //console.log('for k number arrayValues: ', k, arrayValues[1][k]);
            let singleArray = arrayValues[1][k];

            // for(let i = 0; i <= arrayValues[1].length; i++){
            //     console.log('i: ', i,  Object.values(singleArray));
            // };
            // if(Object.values(singleArray).length > 1){
            //     console.log('mayor: ', Object.values(singleArray).length );
            // }

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
                color: azure;'>
                    <h3>${objeto.title}</h3> <br /> 
                    <a href='${objeto.id}'><img width='250px' src=${objeto.images[0].original}  alt='${objeto.images[0].caption}' height='300px'/></a>
                    
                </div>
            </div>
            `;

            list += `<div style='color: azure; display: flex;
            flex-wrap: wrap;
            margin-left: 80px;
            margin-right: 80px;
            justify-content: center;
            flex-direction: row;'>
            <div style='width: 380px;
            color: azure;'>
            <h3>${objeto.title}</h3> <br /> <img width='250px' src=${objeto.images[0].original}  height='300px'/><p>Aliases: ${objeto.aliases}</p><p>Age range: ${objeto.age_range}<p></p>Nationality: ${objeto.nationality}</p><p>Sex: ${objeto.sex}</p><p>Hair: ${objeto.hair}</p><p>Eyes: ${objeto.eyes}</p><p>Complexion: ${objeto.complexion}</p><p>Weight: ${objeto.weight}</p><p>Scars and marks: ${objeto.scars_and_marks}</p><p>Occupations: ${objeto.occupations}</p><p>Languages: ${objeto.languages}</p><p>Place of birth: ${objeto.place_of_birth}</p><p>Details: ${objeto.details}</p><p>Caution: ${objeto.caution}</p><p>Suspects: ${objeto.subjects}</p><p>Description: ${objeto.description}</p><p>Classification: ${objeto.person_classification}</p><p>Reward: ${objeto.reward_text}</p><br />
            </div>
            </div>`;

        }
        document.getElementById('row').innerHTML = single;

        // arrayValues.forEach((element, index, array) => {
        //     console.log('for each element, index, array: ', element, index, array);
        // console.log('for each element: ', element);
        // console.log('for each index: ', index);
        // console.log('for each array: ', array);
        // })

        // arrayItems.forEach((element, index, array) => {
        //     console.log('array items: ', element[1]);
        //let arrayFiles = element[1].files;

        //console.log('main: ', arrayFiles);   
        // })


        // Object.entries(data).forEach(([key, value]) => {
        //     console.log(`<p>key: ${key}</p> : <p>value: ${value}</p>`);
        // })

        // .then(data => console.log('data: ', data.items[0].files[0].url))
    };

    //JSON.stringify(value, replacer, space)
    //fetch(resource, options)

    return (
        <div className='container'>
            <button onClick={fetchData}>Get data</button>
            <div id='row' className='card-row'>
                
            </div>
        </div>
    )
}
