const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[];
fetch (endpoint)
                .then(blob => blob.json())
                .then(data=> cities.push(...data));
                
//console.log(cities)

function matching_word(word,cities)
{
    return cities.filter(place =>{
        const regex=new RegExp(word,'gi');
        return place.city.match(regex) || place.state.match(regex)
    }
        )
}

function display()
{
    //console.log(this.value);
    const matches=matching_word(this.value,cities);
    //console.log(matches);

    const regex=new RegExp(this.value,'gi');
    
    const html=matches.map(place => {
        const cityName=place.city.replace(regex,
            `<span class="hl">
            ${this.value}
            </span>
            
            `
            );
            const stateName=place.state.replace(regex,
                `<span class="hl">
                ${this.value}
                </span>
                
                `
                );
        return ` 
        <li>
        <span class="name"> ${cityName},${stateName}</span>
        <span class="population"> ${place.population} </span>

        </li>
        
        `;
    }).join('');
    suggestions.innerHTML=html;
}

const searchInput=document.querySelector('.search');
const suggestions=document.querySelector('.suggestions');

searchInput.addEventListener('change',display);
searchInput.addEventListener('keyup',display);