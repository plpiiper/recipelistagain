import { getAllPostIds, getPostData } from '@/lib/recipes';

import React from "react";
import SiteNav from "@/components/Navbar";
import IngredientList from "@/components/IngredientList";
import StepList from "@/components/StepList";


export default function Recipe({ recipe }) {
    const r = recipe;

    function turnTime(min){
        let time = "";
        // hours
        if (Math.floor(min / 60) > 0){time += Math.floor(min/60) + "H "}
        if (min%60 !== 0){time += (min%60) + "M"}
        return time
    }

    return (<>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400&family=Julius+Sans+One&family=Kumbh+Sans:wght@300;400&family=Smooch+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />


            <SiteNav />
            <div className="recipe-page">
                <div className="left">
                    <h2 className="recipe-page-header" id="ingredients-section">INGREDIENTS</h2>
                    <IngredientList Recipe={r} />
                    <h2 className="recipe-page-header" id="steps-section">STEPS</h2>
                    <StepList Recipe={r} />
                </div>
                <div className="right">
                    <h2 className="recipe-page-name">{r.name}</h2>
                    <span className="recipe-page-cat"><a href={"/category/"+r.cat.replaceAll(" ","-").toLowerCase()}>{r.cat}</a></span>
                    <span className="recipe-page-time">{turnTime(r.time)}</span>
                    <div className="recipe-button-list">
                        <span className="icon material-symbols-outlined">EDIT</span>
                        <span className="icon material-symbols-outlined">DELETE</span>
                    </div>
                    <div className="recipe-page-section-div">
                        <h3><a href="#ingredients-section">Ingredients</a></h3>
                        <h3><a href="#steps-section">Steps</a></h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const recipe = await getPostData(params.id);
    return {
        props: {
            recipe,
        },
    };
}
