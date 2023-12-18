import Data from "@/Data/Data.json"
import Ingredient from "@/components/Ingredient";
export default function IngredientList({Recipe}){
    const il = Recipe;

    return (<div className="ingredient-list">
        {il.ingredients.map(x => <Ingredient key={crypto.randomUUID()} Data={x} />)}
    </div>)
}


