import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export interface Image {
    id: number;
    path: string;
    altText: string;
    base64Encoded: string;
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
    id: string;
    title: string;
    servings: string;
    description: string;
    titleImageId: string;
    images: Image[];
    ingredients: Ingredients[];
    steps: Step[];
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const directoryPath = path.join(process.cwd(), '/Data');
    const recipeDirectories = fs.readdirSync(directoryPath);
    const recipes = recipeDirectories.map((recipeDir) => {
        const recipePath = path.join(directoryPath, `${recipeDir}/recipe.json`);
        const recipeContent = fs.readFileSync(recipePath, 'utf-8');
        const recipe: Recipe = JSON.parse(recipeContent);
        const titleImage = recipe.images.find((image) => image.id === parseInt(recipe.titleImageId));
        if (titleImage) {
            const imageContent = fs.readFileSync(path.join(directoryPath, `${recipeDir}/${titleImage.path}`), 'base64');
            titleImage.base64Encoded = Buffer.from(imageContent).toString('base64');
            recipe.images = [titleImage];
        }
        return recipe;
    });
    res.status(200).json({ recipes: recipes })
}