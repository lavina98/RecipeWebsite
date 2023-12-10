import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req : NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    const filePath = path.join(process.cwd(), `/Data/${id}/recipe.json`);
    if(!fs.existsSync(filePath)) {
        res.status(404).json({ message: `Recipe with id: ${id} not found.` });
        return;
    }
    const recipeContent = fs.readFileSync(filePath, 'utf-8');
    const recipe = JSON.parse(recipeContent);
    res.status(200).json({ recipe: recipe })
}