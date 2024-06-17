import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './pages/Post';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='*' element={<h1>404 - Página não encontrada!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
