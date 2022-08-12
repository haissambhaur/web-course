import Navbar from './Navbar';
import Home from './home';
function App() {
  //const title= 'Welcome to the Blog';
  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
