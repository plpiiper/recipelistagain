import Data from "@/Data/Data.json"
export default function Ingredient({Data}){
    const ig = Data;

    if (ig.type){ // alt-cat-etc
        return (<div className="ingredient-category-div">
            <div className="ingredient-category-header">{ig.type.toUpperCase()}</div>
            <div className="ingredient-category-body">
                {ig.ingredients.map(x => <Ingredient key={crypto.randomUUID()} Data={x} />)}
            </div>
        </div>)
    } else {
        return (
        <>
            <div className="ingredient-div">
                <div className="ingredient-amount">{ig.amount ? ig.amount : ""}</div>
                <div className="ingredient-size">{ig.size ? ig.size : ""}</div>
                <div className="ingredient-ingredient">{ig.ingredient ? ig.ingredient : ""}</div>
            </div>
            {ig.comment ? (<div className="ingredient-comments-div">
                {ig.comment.map(x => <div className="ingredient-comment">{x}</div>)}
                </div>) : <></>
            }
        </>
        )
    }
}


