import Data from "@/Data/Data.json"
export default function Step({Data,Step}){

return (<div className="step-div" id={"step-"+Step}>
    <div className="step-number">{Step}</div>
    <div className="step-text">{Data}</div>
        </div>)

}


