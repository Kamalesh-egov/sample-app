import axios from 'axios';
import React from 'react'

const useRequest = () => {
    const fetchUsers = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        )
        console.log(response);
        console.log(response.data);
        return response.data;
    }
  return (
    <div>useRequest</div>
  )
}

export default useRequest