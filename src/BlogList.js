const Bloglist = (props) => {
    const blog=props.blog;
    const title=props.title;
    const handleDelete=props.handleDelete;

    // console.log(props,blog);
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blog.map((blog)=>(
                
                <div className="blogPreview" key={blog.id}>
                <h2>{blog.title}</h2>
                <h6>Sneak:  {blog.body}</h6>
                <p>Written by: {blog.author}</p>
                <button className="button" onClick={()=> handleDelete(blog.id)}>Delete section</button>
                </div>
                ))}
        </div>
    );
}
 
export default Bloglist;