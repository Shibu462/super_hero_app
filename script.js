const SUPERHERO_TOKEN = '818818335770996'
const BASE_URL=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButton=document.getElementById('searchButton')

const searchInput=document.getElementById('searchInput')

const getRandomSuperHero = (id,name) => {
    
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            const superHero = json
            showHeroInfo(superHero)
        })
}


const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`
    const img = `<img src="${character.image.url}" height=200 width=200/>`
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
    }).join('')

    heroImageDiv.innerHTML=`${name} ${img}${stats}`
}


const getSearchedSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            
            const superHero = json.results[0]
            showHeroInfo(superHero)
        })
 }
const randomHero = () => {
    const id = Math.floor(Math.random() * 731)+1
    return id;
}
newHeroButton.onclick = () => getRandomSuperHero(randomHero())
searchButton.onclick = () => getSearchedSuperHero(searchInput.value)
