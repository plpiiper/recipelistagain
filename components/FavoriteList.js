// import Product from "@/components/Product";
import {Tabs, Tab} from "@nextui-org/react";
import Data from "@/Data/Data.json"
/*
    EXPECT:
    {
            id: "nc1234",
            tagline
}
 */

export default function FavoriteList(){
    return (<div id="favorite-list">
        <div className="favorite-list-header">
            <h2>Favorites</h2>
            <span>[+]</span>
        </div>
        <div className="favorite-list-list">
            <div>TEST1</div>
        </div>
    </div>)
}


