import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { Recipe } from "@/Model/Recipe";

export default function handler(req : NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    const filePath = path.join(process.cwd(), `/CMS/recipe${id}.json`);
    if(!fs.existsSync(filePath)) {
        res.status(404).json({ message: `Recipe with id: ${id} not found.` });
        return;
    }
    const recipeContent = fs.readFileSync(filePath, 'utf-8');
    const recipe : Recipe = JSON.parse(recipeContent);
    recipe.images.forEach((image) => {
        image.url = `${process.env.VERCEL_URL}/Images/${id}/${image.path}`;
    });
    res.status(200).json({ recipe: recipe })
}