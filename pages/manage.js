'use client'
import React, { useState, useEffect } from 'react';
import {NextUIProvider} from "@nextui-org/react";
import SiteNav from "@/components/Navbar";
import FavoriteList from "@/components/FavoriteList";
import RecipeList from "@/components/RecipeList";
import Data from "/Data/Data.json"

export default function Home() {
    const fetchData = async () => {
        const response = await fetch('/api/recipemanager')
        const data = await response.json();
        console.log(data);
    }




  return (
      <NextUIProvider>
          <SiteNav />
        <main id="home">
            <h2 onClick={() => fetchData(
                {
                    type: "change",
                    recipelist: [
                        {   id: "0050VSNE", newobj: {name: "Beefy", cat: "Red"}   }
                    ]
                }
            )}>MANAGE</h2>
        </main>
      </NextUIProvider>
  )
}
