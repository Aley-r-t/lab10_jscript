// EmpleadoAvatar.jsx
import React from 'react';

function EmpleadoAvatar({ avatarUrl }) {
  return (
    <div className="empleado-avatar">
      <img src={avatarUrl} alt="Empleado Avatar" className="avatar-image" />
    </div>
  );
}

export default EmpleadoAvatar;
