import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Person = ({ singleArray }) => {

 

  const _id = useParams();
  

  const url = 'https://api.fbi.gov/wanted/v1/list';


    /////GET DATA
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      const arrayValues = Object.values(data);

      let singleImages = '';
      let list = '';
      let titulo = '';
      //let singleArray = '';


      /////GET IMAGES

      for (let k = 0; k < arrayValues[1].length; k++) {
        //console.log('for k number arrayValues: ', k, arrayValues[1][k]);
        singleArray = arrayValues[1][k];


        //////MAKE DATA OBJECT

        // objeto = {
        //   id: singleArray.uid,
        //   files: singleArray.files,
        //   images: singleArray.images,
        //   title: singleArray.title,
        //   weight: singleArray.weight,
        //   age_range: singleArray.age_range,
        //   occupations: singleArray.occupations,
        //   field_offices: singleArray.field_offices,
        //   locations: singleArray.locations,
        //   reward_text: singleArray.reward_text,
        //   sex: singleArray.sex,
        //   hair: singleArray.hair,
        //   dates_of_birth_used: singleArray.dates_of_birth_used,
        //   caution: singleArray.caution,
        //   nationality: singleArray.nationality,
        //   scars_and_marks: singleArray.scars_and_marks,
        //   subjects: singleArray.subjects,
        //   aliases: singleArray.aliases,
        //   suspects: singleArray.suspects,
        //   publication: singleArray.publication,
        //   languages: singleArray.languages,
        //   complexion: singleArray.complexion,
        //   details: singleArray.details,
        //   status: singleArray.status,
        //   eyes: singleArray.eyes,
        //   person_classification: singleArray.person_classification,
        //   description: singleArray.description,
        //   possible_countries: singleArray.possible_countries,
        //   additional_information: singleArray.additional_information,
        //   url: singleArray.url,
        //   possible_states: singleArray.possible_states,
        //   race: singleArray.race,
        //   place_of_birth: singleArray.place_of_birth,
        //   poster_classification: singleArray.poster_classificati
        // }

        //console.log('valores: ', valores);
        // for(let l = 0; l < Object.values(objeto).length; l++){
        //   if(Object.values(objeto)[l] = null){
        //     console.log('not');
        //   }  
        // }

        if (arrayValues[1][k].uid === _id.id) {
          // console.log('id: ', k);
          // console.log('imagenes: ', arrayValues[1][k].images);

          titulo += singleArray.title;

          list += `<div style='color: azure; 
            display: flex;
            flex-wrap: wrap;
            margin-left: 80px;
            margin-right: 80px;
            margin-top:40px;
            margin-bottom:40px;
            padding:8px;
            font-family: 'Roboto', sans-serif;  
            justify-content: center;
            flex-direction: row;'>
            <div style='min-width: 380px;
            color: azure;
            text-align: left'>
            <p><span className='aliases'>Aliases: </span>${singleArray.aliases}</p><p><span style='text-transform: uppercase; color: beige;'>Age range: </span>${singleArray.age_range}<p></p><span style='text-transform: uppercase; color: beige;'>Nationality: </span>${singleArray.nationality}</p><p><span style='text-transform: uppercase; color: beige;'>Sex: </span>${singleArray.sex}</p><p><span style='text-transform: uppercase; color: beige;'>Hair: </span>${singleArray.hair}</p><p><span style='text-transform: uppercase; color: beige;'>Eyes: </span>${singleArray.eyes}</p><p><span style='text-transform: uppercase; color: beige;'>Complexion: </span>${singleArray.complexion}</p><p><span style='text-transform: uppercase; color: beige;'>Weight: </span>${singleArray.weight}</p><p><span style='text-transform: uppercase; color: beige;'>Scars and marks: </span>${singleArray.scars_and_marks}</p><p><span style='text-transform: uppercase; color: beige;'>Occupations: </span>${singleArray.occupations}</p><p><span style='text-transform: uppercase; color: beige;'>Languages: </span>${singleArray.languages}</p><p><span style='text-transform: uppercase; color: beige;'>Place of birth: </span>${singleArray.place_of_birth}</p><p><span style='text-transform: uppercase; color: beige;'>Details: </span>${singleArray.details}</p><p><span style='text-transform: uppercase; color: beige;'>Caution: </span>${singleArray.caution}</p><p><span style='text-transform: uppercase; color: beige;'>Suspects: </span>${singleArray.subjects}</p><p><span style='text-transform: uppercase; color: beige;'>Description: </span>${singleArray.description}</p><p><span style='text-transform: uppercase; color: beige;'>Classification: </span>${singleArray.person_classification}</p><p><span style='text-transform: uppercase; color: beige;'>Reward: </span>${singleArray.reward_text}</p><br />
            </div>
            </div>`;



          for (let i = 0; i < arrayValues[1][k].images.length; i++) {
            //console.log('individual: ', arrayValues[1][k].images[i].original);
            singleImages += `<div style='display:flex; padding:16px; flex-wrap: wrap; justify-content: center;
            flex-direction: row'>
              <div style='width: 380px;
              color: azure;'>
              <img width='240px' height='320px' src=${arrayValues[1][k].images[i].original} />
              </div>
            </div>`;
          }

        }
        //console.log('objeto: ', objeto);
      }

      document.getElementById('title').innerHTML = titulo;
      document.getElementById('row').innerHTML = singleImages;
      document.getElementById('description').innerHTML = list;
    };

    fetchData();


  return (
    <div>
      <div className="back-container">
        <Link className='back' to='/'>Back </Link>
      </div>


      <h3 id="title"></h3>
      <div id="row" className='card-row'></div>
      <div id="description" className='description'></div>
    </div>
  )
}
