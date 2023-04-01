 export const exerciseOptions  = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '5a320f4c3cmsh7f784e290dbd428p1bebfdjsna54f24993511',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
 

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5a320f4c3cmsh7f784e290dbd428p1bebfdjsna54f24993511',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
 
 
 export const fetchData= async(url, options) => {
    const response= await fetch(url, options)
    const data= await response.json()
    return data;
 }