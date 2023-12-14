export interface Image {
    id: number;
    path: string;
    altText: string;
    url: string;
}

export interface Ingredients {
    name: string;
    quantity: string;
}

export interface Step {
    order: number;
    step: string;

}

export interface Recipe {
    id: number;
    title: string;
    servings: string;
    description: string;
    titleImageId: number;
    images: Image[];
    ingredients: Ingredients[];
    steps: Step[];
}