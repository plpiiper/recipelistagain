import Data from "@/Data/Data.json"
export default function Recipe({Recipe}){
    const r = Recipe;

    return (<div className="recipe">
        <span className="recipe-favorite material-symbols-outlined">favorite</span>
        <span className="recipe-type"><a href={"/category/"+r.cat.replaceAll(" ","-").toLowerCase()}>{r.cat}</a></span>
        <span className="recipe-name"><a href={"/recipe/"+r.id}>{r.name}</a></span>
    </div>)
}


