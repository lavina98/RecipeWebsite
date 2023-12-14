import { Recipe } from "@/Model/Recipe";
import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './Styles/Overview.module.css'

export default function Overview() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        async function getRecipes() {
            const recipeData = await fetch("/api/recipe");
            const recipeJson = await recipeData.json();
            setRecipes(recipeJson.recipes);
        }
        getRecipes();
    }, [])


    return (
        <div className={styles.overviewDiv}>
            {recipes.map((recipe) => (
                    <Card
                        key={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        imageUrl={recipe.images[0].url}
                        imageAltText={recipe.images[0].altText}
                        href={`/recipe/${recipe.id}`}
                    />
                ))}
        </div>
    )
}