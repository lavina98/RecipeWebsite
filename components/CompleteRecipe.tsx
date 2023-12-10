export interface ICompleteRecipeProps {
    id: number
}

export default function CompleteRecipe({ id }: ICompleteRecipeProps) {
    return <p>Recipe: {id}</p>
}
