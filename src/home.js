import { useEffect,useState } from "react";
 import BlogList from "./BlogList";
 
const Home = () => {

    const [blog,setBlog]=useState(null);
    
    const [name, setName]=useState('Haissam')
    const handleDelete=(id)=>{
        const editedBlogs=blog.filter((blog)=>blog.id!==id);
        setBlog(editedBlogs);
    }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')

    },[])
//new commit
    return ( 
        <div className="home">
            <BlogList blog={blog} title='All blogs' handleDelete={handleDelete}/>
            <p>{name}</p>
            <button className="button" onClick={()=>setName('ali')}> Change name</button>
            {/* <BlogList blog={blog.filter((blog)=>blog.author==='mario')} title="Mario's blogs"/> */}
        </div>
     );
}

export default Home;