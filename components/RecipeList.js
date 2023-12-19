import Data from "@/Data/Data.json"
import Recipe from "@/components/Recipe"

export default function RecipeList({Recipes, Filters}){
    let r = Recipes;
        if (Filters){
        let key;
        for (key in Filters){
            r = r.filter(x => x[key].toLowerCase().replaceAll(" ","-") === Filters[key])
        }
        return (<div className="recipeList">
            {r.map(x => <Recipe key={"recipe-"+r.findIndex(y => y.name === x.name)} Recipe={x} />)}
        </div>)
        }


    return (<div className="recipeList">
        {r.map(x => <Recipe key={"recipe-"+r.findIndex(y => y.name === x.name)} Recipe={x} />)}
    </div>)
}


