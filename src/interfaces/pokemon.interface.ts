export interface Pokemon {
    id: number;
    name: string;
    type: string[];
    abilities?: string[];
    height?: number;
    weight?: number;
    sprites: {
        normal: string;
        shiny: string;
    };
    species?:{
        eggGroup:string[],
        genderRate:any[],
        habitat:string
    }
    stats: any[];
}
