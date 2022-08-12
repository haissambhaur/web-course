import { useEffect,useState } from "react";
 import BlogList from "./BlogList";
 
const Home = () => {

    const [blog,setBlog]=useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    
    const [name, setName]=useState('Haissam')
    const handleDelete=(id)=>{
        const editedBlogs=blog.filter((blog)=>blog.id!==id);
        setBlog(editedBlogs);
    }
    useEffect(()=>{
        console.log('useEffect activated');
        console.log({name});
    },[name])

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