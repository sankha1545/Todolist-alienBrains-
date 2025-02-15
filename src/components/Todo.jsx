import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex items-center">
          <div className="text-2xl font-bold text-amber-600" data-aos="zoom-in" data-aos-duration="1000">
            PLANO
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 px-4 py-8">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-center text-amber-600 uppercase mb-6">PLANO</h2>
          
          {/* Add Todo Section */}
          <div className="flex items-center gap-3 mb-6">
            <input
              className="flex-grow p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              type="text"
              placeholder="Add a new task..."
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />
            <button
              className="p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-md transition"
              onClick={handleAddTodoClick}
            >
              <BsPlus size={24} />
            </button>
          </div>

          {/* Filter and Search Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <FilterButtons />
            <div className="flex items-center w-full sm:w-auto bg-gray-100 rounded-lg p-2 shadow-sm">
              <input
                className="flex-grow bg-transparent outline-none p-2"
                type="text"
                placeholder="Search Todos"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              <BsSearch size={20} className="text-gray-500" />
            </div>
          </div>

          {/* Todo List */}
          <TodoList />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-white to-orange-200 py-16 mt-auto w-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          <div>
            <h1 className="text-yellow-500 text-3xl font-bold">PLANO</h1>
            <p className="text-sm text-black mt-4">
              PLANO is a productivity-focused to-do list website designed to help users efficiently manage tasks and stay organized. With a clean and user-friendly interface, it allows users to add, track, and complete tasks seamlessly, boosting productivity and simplifying goal-setting.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="text-gray-700 space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Our Services</a></li>
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500">Affiliate Program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h4>
            <ul className="text-gray-700 space-y-2">
              <li>+91 0123-4567-89</li>
              <li>sankhasubhradas1@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Todo;
