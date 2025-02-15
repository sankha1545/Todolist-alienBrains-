



import Todo from './components/Todo';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />  {/* Add Todo route */}
      </Routes>
    </Router>
    </>
  )
}

export default App
