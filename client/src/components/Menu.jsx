import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    const fetchData = async() => {
      try {
        const res = await axios.get(`https://blogs-backend-l7v4.onrender.com/api/posts/?cat=${cat}`)
        setPosts(res.data)
      } catch (error) {
        // console.log(`Home.jsx me error hai aur yeh wala hai ${error}`);
      }
    }
    fetchData()
  } , [cat]);
  
  return (
    <div className="menu">
        <h1>Some Similar Posts</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={post.img} alt={post.title} />
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
                </Link>
            </div>
          ))}
    </div>
  )
}

export default Menu
