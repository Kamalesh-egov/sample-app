import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

const retrieveUsers = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    )
    console.log(response);
    console.log(response.data);
    return response.data;
}

const Users = () => {
    const {
        data: users,
        error,
        isLoading
    } = useQuery("usersData", retrieveUsers);

    if (isLoading) return <div>Fetching users...</div>
    if (error) return <div>Error occured: {error.message}</div>

  return (
    <div>
        <TopBar />
        <div className='container'>
            <SideBar />
            <div className='users'>
                <ul>
                    {users.map((user) => (
                            <li key={user.id}>
                                <h3>{user.name}</h3>
                                <p>Username : {user.username}</p>
                                <p>Email : {user.email}</p>
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>

  )
}

export default Users