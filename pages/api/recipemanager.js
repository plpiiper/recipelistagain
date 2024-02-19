import Data from '@/Data/Data.json'

export default function handler(req,res) {
    let newdata = JSON.stringify(Data);
    newdata = JSON.parse(newdata);

    // change //
    /* EXPECT

    {
        type: "change",
        recipelist: [
            {   id: "AH", newobj: {}   }
        ]
    }

     */
     console.log(req,res)
    if (req){
        if (req.type === "change"){
            let key;
            for (key in req){ if (key !== req.type){
                if (newdata[key] === undefined){return}
                let s = req[key]; let smkey; for (var i=0; i<s.length; i++){
                    let c = s[i];
                    let ind = newdata[key].findIndex(x => x.id === c.id);
                    if (ind !== -1){    newdata[key][ind] = c.newobj;   }
                }
            }}
        }
        console.log(newdata)
    }
    res.status(200).json(newdata)
}