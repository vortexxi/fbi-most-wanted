import React from 'react'



export const Imagenes = async () => {

    const url = 'https://api.fbi.gov/wanted/v1/list';
    let objeto = {};
    let singleImage = '';

    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
        })
    }

    const res = await fetch(url);
    const data = await res.json();


    const arrayKeys = Object.keys(data);
    const arrayValues = Object.values(data);
    const arrayItems = Object.entries(data.items);


    for (let k = 0; k < arrayValues[1].length; k++) {

        let singleArray = arrayValues[1][k];
        //console.log('single array: ', singleArray);

        objeto = {
            id: singleArray.uid,
            images: singleArray.images,
        }

        
        console.log('imagenes: ', objeto.images);
        
        for(let i = 0; i < objeto.images.length; i++){
            console.log('image 0: ', objeto.images[i].original);
            singleImage += `<p> ${objeto.images[i].original}  </p>`;
            
        }
        document.getElementById('card').innerHTML = singleImage;
    }

    
    
    return (
        <div className='container'>
            <button>Get data</button>
            <div id='row' className='card-row'>
                <div id='card'></div>
            </div>
        </div>
    )
}
