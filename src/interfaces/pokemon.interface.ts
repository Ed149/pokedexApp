export interface Pokemon {
    id: number;
    name: string;
    type: [];
    abilities: [];
    height: number;
    weight: number;
    sprites: {
        normal: string;
        shiny: string;
    };
    species?:{
        eggGroup:string[],
        genderRate:{
            femaleRate:number,
            maleRate:number
        },
        habitat:string
    }
    stats: any[];
}
