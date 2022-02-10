import * as React from 'react';
import { useState, useEffect } from 'react';
import getFacture from '../api/getFacture';



export default function DataTable() {
  const [facture, setFacture] = useState(null)
  useEffect(() => {
    getFacture(setFacture)
  },[]);
  if (facture === null) {
    return <p>chargement ....</p>
  }
  
  // const rowFacture = facture.map((elem, index) => console.log(elem)id:index, lastName:elem)
  // console.log(rowFacture, "mon log haah");
  
  console.log("voici le state facture",facture);
return (
  <>
      
  </>
    

);
}