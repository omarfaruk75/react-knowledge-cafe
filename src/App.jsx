
import './App.css'
import Blogs from './compnents/Blogs/Blogs'
import Bookmarks from './compnents/Bookmarks/Bookmarks'
import Header from './compnents/Header/Header'

function App() {
  

  return (
    <>
      
      <Header></Header>
     <main className='md:flex justify-center items-center'>
       <Blogs></Blogs>
     ,<Bookmarks></Bookmarks>
     </main>
      
    </>
  )
}

export default App
