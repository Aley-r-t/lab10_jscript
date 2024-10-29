// EmpleadoList.jsx
import React from 'react';
import EmpleadoRow from './EmpleadoRow';

const empleados = [
  { nombre: 'Laya Dueñas', cargo: 'CEO', departamento: 'Business', avatarUrl: 'https://via.placeholder.com/50' },
  { nombre: 'Astryd Vallés', cargo: 'CMO', departamento: 'Marketing', avatarUrl: 'https://via.placeholder.com/50' },
  { nombre: 'Shantell Meza', cargo: 'CFO', departamento: 'Business', avatarUrl: 'https://via.placeholder.com/50' },
  { nombre: 'Sergio Ocampo', cargo: 'CTO', departamento: 'Engineering', avatarUrl: 'https://via.placeholder.com/50' },
  { nombre: 'Ares Jiménez', cargo: 'Art Director', departamento: 'Marketing', avatarUrl: 'https://via.placeholder.com/50' },
  { nombre: 'Marta Pérez', cargo: 'Frontend Dev', departamento: 'Engineering', avatarUrl: 'https://via.placeholder.com/50' },
];

function EmpleadoList() {
  return (
    <div className="empleado-list">
      {empleados.map((empleado, index) => (
        <EmpleadoRow key={index} empleado={empleado} />
      ))}
    </div>
  );
}

export default EmpleadoList;
