import React, { useEffect, useState } from "react";
import Card from "./Card";
import { AllListed } from "../config/firebase";
const Home =()=>{
    const [dataList, setDataList] = useState([]);

    function extractName(inputString) {
        const name = inputString.replace(/-?\d*\s*\.pdf$/i, '').trim();
        return name;
    }

    function extractYear(inputString) {
        const yearMatch = inputString.match(/(\d+)\s*\.pdf$/i);
        if (yearMatch) {
          const year = yearMatch[1];
          return year;
        }
        return null; 
      }
    
    async function fetchDataFromStorage() {
        const folder = 'yearbook/'; 
        try {
          const itemsWithMetadata = await AllListed(folder);
          const updatedDataList = itemsWithMetadata.map((item) => (
            {
            name: extractName(item.metadata.name),
            year: extractYear(item.metadata.name),
            url: item.downloadURL
          }
          )
          );
          setDataList(updatedDataList);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }

    useEffect(()=>{
        fetchDataFromStorage();
    },[])
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full p-4">
            {dataList.map((item)=>(
                <Card Name={item.name} Year={item.year}  url={item.url} />
            ))}

        </div>
       
        </>
    )
}

export default Home