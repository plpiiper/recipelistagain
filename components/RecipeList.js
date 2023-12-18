import Data from "@/Data/Data.json"
import Recipe from "@/components/Recipe"

export default function RecipeList({Recipes}, {Filters}){
    const r = Recipes;
    if (Filters){
        console.log(Filters)
    }

    return (<div className="recipeList">
        {Recipes.map(x => <Recipe key={"recipe-"+Recipes.findIndex(y => y.name === x.name)} Recipe={x} />)}
    </div>)
}


