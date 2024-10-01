import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import React, { useEffect } from "react";
import { BlogQuery } from "../Query/AllData";
import { useState } from "react";
import { Navigation } from "../components/navigation/NavBar";
import { Home } from "./Home";
import style from './Home.module.scss';
import { Link } from "react-router-dom";
import { SinglePage } from "./SinglePage";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons";


export const DataSource = () => {
    
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { data, isLoading, error } = useQuery({
        queryKey: ["BlogQuery"],
        queryFn: async () =>
          request(
            "https://eu-west-2.cdn.hygraph.com/content/cm1kc5um9021e07w68dz5uhr0/master",
            BlogQuery
          ),
      });
    
      console.log(data);
      
    
      if (isLoading) {
        return <div>Loading......</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      const posts = data?.newBlogs || [];
      console.log(posts);
      
      const categories = [...new Set(posts.map(post => post.category))];
      const filteredPosts = selectedCategory
      ? posts.filter(post => post.category === selectedCategory)
      : posts;


  
    return(
        <>            
            <Navigation>
                <li onClick={() => setSelectedCategory(null)}>
                    Alle
                </li> 
                {categories.map(category => {
                    return (
                    <li key={category}
                    onClick={() => setSelectedCategory(category)}>
                        {category}
                
                    </li>
                )})}
                </Navigation>

            <Home>
            <section className={style.mainBody} >
                <div>
                {filteredPosts.slice(0,1).map(post => (
                    <article key={post.id}>                      
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p className={style.times}>{post.created}</p>
                        <Link to={`/pages/SinglePage/${post.id}`}> Read more </Link>
                        <img src={post.image.url} alt="" />
                        
                    </article>
                ))}
                </div>
            </section>
            <section className={style.secondMain} >
                <div className={style.secondSection}>
                {filteredPosts.slice(1,5).map(post => (
                    <article key={post.id}>                        
                        <h3>{post.title}</h3>
                        <p className={style.times}>{post.created}</p>
                        <Link to={`/pages/SinglePage/${post.id}`}> Read more </Link>
                        <img src={post.image.url} alt="" />
                    </article>
                ))}
                </div>
            </section>

            <section className={style.thirdMain} >
                <div className={style.secondSection}>
                {filteredPosts.slice(5,6).map(post => (
                    <article key={post.id}>  
                        <img src={post.image.url} alt="" />
                        <header>        
                            <h3>{post.title}</h3>
                            <p className={style.times}>{post.created}</p>
                            <p>{post.description}</p>
                            <Link to={`/pages/SinglePage/${post.id}`}> Read more </Link>
                        </header>  
                    </article>
                ))}
                </div>
            </section>
            <section className={style.thirdMain} >
                <div className={style.secondSection}>
                {filteredPosts.slice(6,7).map(post => (
                    <article key={post.id}>  
                        <header>        
                            <h3>{post.title}</h3>
                            <p className={style.times}>{post.created}</p>
                            <p>{post.description}</p>
                            <Link to={`/pages/SinglePage/${post.id}`}> Read more </Link>
                        </header> 
                        <img src={post.image.url} alt="" /> 
                    </article>
                ))}
                </div>
            </section>
            <section className={style.forthMain} >
                <div className={style.secondSection}>
                {filteredPosts.slice(7,9).map(post => (
                    <article key={post.id}>  
                        <header>        
                            <h3>{post.title}</h3>
                            <p className={style.times}>{post.created}</p>
                            <Link to={`/pages/SinglePage/${post.id}`}> Read more </Link>
                        </header> 
                        <img src={post.image.url} alt="" /> 
                    </article>
                ))}
                </div>
            </section>
            </Home>

        </>
    )
}