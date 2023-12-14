import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { Recipe } from "@/Model/Recipe";




export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const directoryPath = path.join(process.cwd(), '/CMS');
    const recipeFiles = fs.readdirSync(directoryPath);
    const recipes = recipeFiles.map((recipeFile) => {
        const recipePath = path.join(directoryPath, recipeFile);
        const recipeContent = fs.readFileSync(recipePath, 'utf-8');
        const recipe: Recipe = JSON.parse(recipeContent);
        const titleImage = recipe.images.find((image) => image.id === recipe.titleImageId);
        if (titleImage) {
           titleImage.url = `${process.env.VERCEL_URL}/Images/${recipe.id}/${titleImage.path}`;
           recipe.images = [titleImage];
        }
        return recipe;
    });
    res.status(200).json({ recipes: recipes })
}