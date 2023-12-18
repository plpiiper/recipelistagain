import Data from "@/Data/Data.json"
import Step from "@/components/Step";
export default function StepList({Recipe}){
    const sl = Recipe.steps;
    let len = [];
    for (var i=0; i<sl.length; i++){
        len.push(<Step key={crypto.randomUUID()} id={"step-"+i} Step={i} Data={sl[i]} />)
    }

    return (<div className="steps-list">
        {len}
    </div>)
}


