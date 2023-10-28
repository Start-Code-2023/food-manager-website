"use client";

import ItemList from '@/components/itemList'
import { demoItems } from '@/constants/demo_items'
import Drawer from '@/components/drawer'

import NavBar from '@/components/nav'
import { LOCAL } from '@/constants/FEATURE_TOGGLE'
import { useState, useEffect } from 'react'
import { LOCAL_GET_FROM_USER_URL } from '@/constants/url'
import Spinner from '@/components/spinner';

export default function FridgePage() {

  const [data, setData] = useState<FoodItems | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(LOCAL_GET_FROM_USER_URL, {
          method: 'GET',
        });
        if (response.ok) {
          const result: FoodItems = await response.json();
          setData(result)
        } else {
          console.log("Error: Status != ok, setting demo items")
          setData( {food_items: demoItems, user_id: "DEMOITEMS"})

        }
      } catch (error) {
        console.log("Error during fetching the data")
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <NavBar />
      <main className="flex h-screen flex-col items-center p-24 pt-10 justify-between bg-white">
      { // Conditionally render based on the value of LOCAL
          data == null ? (
            <Spinner /> // Show loading state while fetching data
          ) : (
            <section id="data">
              {data ? ( // Check if data exists before rendering
                <ItemList items={data.food_items} /> // Render with fetched data
              ) : (
                <p>No data available</p> // Render if data is empty after fetch
              )}
            </section>
          )
        }

        <Drawer />
      </main>
    </>

  )
}
