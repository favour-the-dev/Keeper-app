import Navbar from "./Components/Navabar";
import Footer from "./Components/Footer";
import AddNotes from "./Components/addnotes";

function App() {
  
  
  
  return (
    <>
      <div className="h-100 relative">
          <Navbar />
          <AddNotes />
          <Footer />
      </div>
    </>
  )
}

export default App
