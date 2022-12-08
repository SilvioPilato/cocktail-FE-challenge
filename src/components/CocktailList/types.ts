export type Cocktail = {
    name: string;
    ingredients: Ingredient[]
}

export type Ingredient = {
    name: string;
    part: number;
    color: string;
}