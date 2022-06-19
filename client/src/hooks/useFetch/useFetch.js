import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://badget-backend.herokuapp.com/');
      setData(response.data);
    };
    fetchData();
  }, []);
}

export default useFetch;
