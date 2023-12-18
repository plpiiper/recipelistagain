import { getAllPostIds, getPostData } from '@/lib/categories';

import SiteNav from '@/components/Navbar'
import React from "react";
import Data from '@/Data/Data.json'
import RecipeList from "@/components/RecipeList";
import StepList from "@/components/StepList";


export default function Category({ catData }) {
    let rl = Data.recipelist.filter(x => x.cat.toLowerCase().replaceAll(" ","-") === catData.id);
    return (<>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400&family=Julius+Sans+One&family=Kumbh+Sans:wght@300;400&family=Smooch+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />


            <SiteNav />
            <div className="category-page">
                <h2>{catData.name}</h2>
                <RecipeList Recipes={rl}/>
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
    const catData = await getPostData(params.id);
    return {
        props: {
            catData,
        },
    };
}