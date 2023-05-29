import React from "react";
import { useState, useEffect } from "react"; 


const ListTrending = () => {
    

useEffect(()=>{
fetch(`"https://api.themoviedb.org/3/trending/movie/day?api_key=4b93e172d3270cc5f7c85789f0b471e0"`)
.then(res=> {
    if(res.ok) {
        return res.json()
    }
  return Promise.reject(new Error('Error'));
})
// console.log(fetch)

})

// 'https://api.themoviedb.org/3/movie/11?api_key=4b93e172d3270cc5f7c85789f0b471e0/'

    return <ul>
        <li></li>
    </ul>
}

export default ListTrending


