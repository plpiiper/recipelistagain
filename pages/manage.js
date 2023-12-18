'use client'
import Data from "@/Data/Data.json";
import React, { useState, useEffect } from 'react';
import {NextUIProvider} from "@nextui-org/react";
import SiteNav from "@/components/Navbar";
import FavoriteList from "@/components/FavoriteList";
import SearchSection from "@/components/SearchSection";
import RecipeList from "@/components/RecipeList";

export default function Home() {
  return (
      <NextUIProvider>
          <SiteNav />
        <main id="home">
            <h2>MANAGE</h2>
        </main>
      </NextUIProvider>
  )
}
