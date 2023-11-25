import female from '../../assets/female.png'
import male from '../../assets/male.png'



export const getPokemon = async (id: number | string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let response = await fetch(url);
    let data = await response.json();

    let pokeType: string[] = getTypes(data.types);
    let sprites = getSprites(data.sprites);

    let objData = {
        id: data.id,
        name: data.name,
        type: pokeType,
        sprites: sprites,
    }

    console.log("objData",objData)

    return objData;
}

export const getPokemonInfo = async (id:number | string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let response = await fetch(url);
    let data = await response.json();
    const species = await getSpecies(id);

    let pokeType: string[] = getTypes(data.types);
    let abilities: string[] = getAbilities(data.abilities);
    let height:number = parseFloat(getHeight(data.height).toFixed(2));
    let weight:number = parseFloat(getWeight(data.weight).toFixed(2));
    let sprites = getSprites(data.sprites);
    let stats:any[] = getStats(data.stats);

    console.log("Data en getpokemon", data);

    let objData = {
        id: data.id,
        name: data.name,
        type: pokeType,
        abilities: abilities,
        height: height,
        weight: weight,
        sprites: sprites,
        stats: stats,
        species: species
    }

    return objData;

}

const getTypes = (types: any[]):string[] => {
    let typesArray: string[] = [];
    console.log(types)
    types.forEach(({type}):any => {
        typesArray.push(type.name);
    })
    
    return typesArray;
}

const getAbilities = (abilities: any[]): string[] => {
    let abilitiesArray: string[] = [];
    abilities.forEach(({ability}: any) => {
        abilitiesArray.push(ability.name)
    });
    return abilitiesArray;
}

const getHeight = (height: number) => height / 10;

const getWeight = (weight: number) => (weight * 0.1) / 1;

const getStats = (stats:[]):any[] =>{
    console.log(stats);
    let statArray:any[] = []
    let name:string;
    stats.map(({base_stat,stat}:any) =>{
        name = stat.name == "special-attack" ? "Sp. Atk" : stat.name == "special-defense" ? "Sp. Def" : stat.name;
        statArray.push({name,base_stat});
    })
    console.log("StatAray",statArray)
    return statArray;
}

const getSprites = (sprites: any) => {
    let sprite = sprites.other['official-artwork'];
    let objSprite = {
        normal: sprite.front_default,
        shiny: sprite.front_shiny
    }
    return objSprite;
}

const getSpecies = async (id: number | string) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    const res = await fetch(url);
    const data = await res.json();

    const genderRate = getRenderRate(parseInt(data.gender_rate));
    console.log("getEggGroup", genderRate);

    let eggGroup: string[] = []
    data.egg_groups.forEach(({name}:any) => {
        eggGroup.push(name)
    })

    let species = {
        eggGroup: eggGroup,
        genderRate: genderRate,
        habitat: data.habitat.name
    }

    console.log("getEggGroup", data);

    return species;
}
const getRenderRate = (rate: number) => {
    const femaleRate = (rate / 8) * 100;
    const maleRate = 100 - femaleRate;

    let genderRate = [
        {
            gender:"Female",
            rate:femaleRate,
            img:female
        },
        {
            gender:"Male",
            rate:maleRate,
            img:male
        }
    ]

    return genderRate;
}