
export const getPokemon = async (id: number | string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let response = await fetch(url);
    let data = await response.json();

    let pokeType: [] = getTypes(data);
    let abilities: [] = getAbilities(data);
    let height = getHeight(data.height);
    let weight = getWeight(data.weight);
    let sprites = getSprites(data.sprites);

    let objData = {
        id: data.id,
        name: data.name,
        type: pokeType,
        abilities: abilities,
        height: height,
        weight: weight,
        sprites: sprites,
        stats: data.stats
    }

    return objData;
}

export const getPokemonInfo = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let response = await fetch(url);
    let data = await response.json();

    const species = await getSpecies(id);


    let pokeType: [] = getTypes(data);
    let abilities: [] = getAbilities(data);
    let height = getHeight(data.height).toFixed(2);
    let weight = getWeight(data.weight).toFixed(2);
    let sprites = getSprites(data.sprites);

    console.log("Data en getpokemon", data);

    let objData = {
        id: data.id,
        name: data.name,
        type: pokeType,
        abilities: abilities,
        height: height,
        weight: weight,
        sprites: sprites,
        stats: data.stats,
        species: species
    }

    return objData;

}

const getTypes = (data: any[]) => {
    let typesArray: [] = [];
    data.types.forEach((element: []) => {
        typesArray.push(element.type.name);
    })
    return typesArray;
}

const getAbilities = (data: any[]): [] => {
    let abilitiesArray: [] = [];
    data.abilities.forEach((element: []) => {
        abilitiesArray.push(element.ability.name)
    });
    return abilitiesArray;
}

const getHeight = (height: number) => height / 10;

const getWeight = (weight: number) => (weight * 0.1) / 1;

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

    let eggGroup: [] = []
    data.egg_groups.forEach((el:string) => {
        eggGroup.push(el.name)
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
            img:'/src/assets/female.png'
        },
        {
            gender:"Male",
            rate:maleRate,
            img:'/src/assets/male.png'
        }
    ]

    return genderRate;
}