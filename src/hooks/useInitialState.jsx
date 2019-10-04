import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ hooksVideos, setHooksVideos ] = useState({ mylist: [], trends: [], originals: []});
    useEffect( () => {
      fetch(API)
          .then(response => response.json())
          .then(data => setHooksVideos(data))
      }, []);
      
  return hooksVideos;
}

export default useInitialState;