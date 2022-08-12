const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/" className="navLink">Home</a>
                <a href="/create" className="navLink">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;