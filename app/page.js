'use client'
import Data from "@/Data/Data.json";
import React, { useState, useEffect } from 'react';
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
    NextUIProvider
} from "@nextui-org/react";
import SiteNav from "@/components/Navbar";
import FavoriteList from "@/components/FavoriteList";
// import SearchSection from "@/components/SearchSection";
import RecipeList from "@/components/RecipeList";

export default function Home() {
    const [SelectedType, setSelectedType] = useState({});
    let cats = [];
        for (var i=0; i<Data.recipelist.length; i++){
            if (!cats.includes(Data.recipelist[i].cat)){cats.push(Data.recipelist[i].cat)}
        }
        cats = cats.sort();
        cats = cats.map(x => {
            return {
            key: x.toLowerCase().replaceAll(" ","-"),
            text: x,
            href: "/category/"+x.toLowerCase().replaceAll(" ","-")
            }
        })


  return (
      <NextUIProvider>
          <SiteNav />
        <main id="home">
        <div className="left">
            { /* <SearchSection /> */ }



            <div id="search-section">
                <div className="search-section-main">Categories</div>
                <div className="search-section-all"><a>ALL</a></div>
                <div className="search-section-dropdown">
                    <Dropdown className="navbar-dropdown">
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent search-section-dropdown-button"
                                endContent={<span className="material-symbols-outlined" style={{fontSize: '1.25em'}}>arrow_drop_down</span>}
                            >
                                Recipes
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Recipe dropdown"
                            className="w-[300px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                            size={"lg"}
                        >
                            {Data.dropdown.items.filter(it => it.key === "categories").map(x => (
                                <DropdownSection title={x.title} key={x.key} showDivider className="navbar-dropdown-section">
                                    {cats.map(y => (
                                        <DropdownItem
                                            key={y.key}
                                            description={y.description ? y.description : undefined}
                                            startContent={
                                                y.startContent ? (<span className="material-symbols-outlined">{y.startContent}</span>) : <></> }
                                            className="navbar-dropdown-item"
                                            onClick={ () => setSelectedType({cat: y.key}) }
                                        >
                                            {y.text}
                                        </DropdownItem>
                                    ))}
                                </DropdownSection>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>



            <RecipeList Recipes={Data.recipelist} Filters={SelectedType}/>
        </div>
        <div className="right">
            <FavoriteList />
        </div>
        </main>
      </NextUIProvider>
  )
}
