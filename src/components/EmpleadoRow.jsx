// EmpleadoRow.jsx
import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';

function EmpleadoRow({ empleado }) {
  return (
    <div className="empleado-row">
      <EmpleadoAvatar avatarUrl={empleado.avatarUrl} />
      <div className="empleado-info">
        <h4>{empleado.nombre}</h4>
        <p>{empleado.cargo} <span className={`departamento ${empleado.departamento.toLowerCase()}`}>{empleado.departamento}</span></p>
      </div>
    </div>
  );
}

export default EmpleadoRow;
