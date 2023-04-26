import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";


const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const res = await axios.get(`https://blogs-backend-l7v4.onrender.com/api/posts${cat}`)
        setPosts(res.data)
      } catch (error) {
        console.log(`Home.jsx me error hai ${error}`);
      }
    }
    fetchData()
  } , [cat]);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.descr}</p>
                <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
