import { Recipe } from "@/Model/Recipe";
import { useEffect, useState } from "react"
import Image from "next/image"
import styles from './Styles/CompleteRecipe.module.css'


export interface ICompleteRecipeProps {
    id: number
}

export default function CompleteRecipe({ id }: ICompleteRecipeProps) {
    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {
        async function getRecipe() {
            const recipeData = await fetch(`/api/recipe/${id}`);
            const recipeJson = await recipeData.json();
            setRecipe(recipeJson.recipe);
        }
        getRecipe();
    }, [id])
    
    const titleImage = recipe?.images.filter(image => image.id == recipe.titleImageId)[0];
    const stepsJSX : JSX.Element[]= [];
    recipe?.steps.forEach(currentStep => {
        const stepImage = currentStep.step.match("{ImageId:([0-9]+)}");
        if (stepImage) {
            const image = recipe?.images.filter(image => image.id == parseInt(stepImage[1]))[0];
            const onlyStepText = currentStep.step.replace(stepImage[0], "");
            const stepComplete = (
                <div key={currentStep.order} className={styles.stepData}>
                    {currentStep.order}.{onlyStepText}
                    <div className={styles.stepImageDiv}>
                        <Image key={`image-${currentStep.order}`}  className={styles.stepImage} src={image?.url} alt={image?.altText} width={300} height={300} />
                    </div>
                </div>
            )

            stepsJSX.push(stepComplete);
        }
        else {
            stepsJSX.push(<div key={currentStep.order}  className={styles.stepData}>{currentStep.order}.{currentStep.step}</div>);
        }
    });

    return (
        <div>
            <div className={styles.introDiv}>
            <div className={styles.titleDiv}>{recipe?.title}</div>
            {titleImage && <Image src={titleImage.url} alt={titleImage.altText} width={300} height={300} />}
            <div>{recipe?.description}</div>
            </div>
            {stepsJSX}
        </div>

    )
}
