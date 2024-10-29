import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './components/Persona';
import './App.css';
import EmpleadoList from './components/EmpleadoList';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='text-center mt-4'>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

function Persona(props) {
  return (
    <div className="Persona" style={{ backgroundColor: props.color }}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
      <p>Institución: {props.institucion}</p>
    </div>
  );
}

// Página principal Home
function Home() {
  return (
    <>
      <h2>Bienvenido a la página principal</h2>
      <div className='PersonaContainer'>
        <Persona nombre="Juan León S." edad="45" institucion="Tecsup" color="red" />
        <Persona nombre="Jaime Farfan" edad="48" institucion="Tecsup" color="blue" />
        <Persona nombre="Fidel Matos" edad="60" institucion="Tecsup" color="green" />
      </div>
      <Counter />
    </>
  );
}

// Página de tareas About
function About() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleAddTask = (e) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        setTasks([...tasks, inputValue]);
        setInputValue('');
      }
    };

    const handleDeleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };

  return (
    <>
      <h2>Sobre nosotros</h2>
      <h4>Ingresa tus tareas</h4>
      <input
        type="text"
        placeholder="Tarea 1..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleAddTask}
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => handleDeleteTask(index)}>✖</button>
          </li>
        ))}
      </ul>
    </>
  );
}

// Página de administración de colores Task
function Task() {
  const [colorName, setColorName] = useState('');
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // Cargar los colores desde el localStorage al cargar el componente
    const savedColors = JSON.parse(localStorage.getItem('colors')) || [];
    setColors(savedColors);
  }, []);

  const handleInputChange = (e) => {
    setColorName(e.target.value);
  };

  const handleSaveColor = () => {
    if (colorName.trim()) {
      const newColor = { name: colorName, id: Date.now() };
      const updatedColors = [...colors, newColor];
      setColors(updatedColors);
      localStorage.setItem('colors', JSON.stringify(updatedColors));
      setColorName('');
    }
  };

  const handleDeleteColor = (id) => {
    const updatedColors = colors.filter(color => color.id !== id);
    setColors(updatedColors);
    localStorage.setItem('colors', JSON.stringify(updatedColors));
  };

  return (
    <div className="color-manager">
      <h2>Administrar colores</h2>
      <div className="color-input">
        <div className="color-preview" style={{ backgroundColor: colorName || 'gray' }}></div>
        <input
          type="text"
          placeholder="Ingrese un color ej. Blue"
          value={colorName}
          onChange={handleInputChange}
        />
        <button onClick={handleSaveColor}>Guardar</button>
      </div>
      <div className="color-list">
        {colors.map((color) => (
          <div key={color.id} className="color-item">
            <div className="color-box" style={{ backgroundColor: color.name }}></div>
            <p>Nombre color</p>
            <button onClick={() => handleDeleteColor(color.id)}>Borrar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Página de Contacto
function Contact() {
  return (
    <>
      <h2>Contacto</h2>
      <EmpleadoList />
    </>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <div className='App'>
      <h1>Desarrollo de aplicaciones Tecsup</h1>
      <Router>
        <nav>
          <Link to="/">Inicio</Link> | 
          <Link to="/about">Sobre nosotros</Link> | 
          <Link to="/contact">Contacto</Link> | 
          <Link to="/task">Task</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
