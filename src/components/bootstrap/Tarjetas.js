import React from 'react'

export const Tarjetas = ({ delito }) => {
  // Es una buena práctica asegurarse de que el objeto delito exista antes de intentar usarlo.
  if (!delito) {
    return null;
  }

  return (
    <div className="card w-auto p-3 text-bg-secondary p-3" style={{ width: '18rem', maxWidth: '18rem', margin: '1rem' }}>
      <div className="card-header">
        <h3>{delito.tipo || "Sin tipo"}</h3>
      </div>
      <div className="card-body">
        <p className="card-title">Ubicación: {delito.ubicacion || "Sin ubicación"}</p>
        <p className="card-text"><small className="text-muted">{delito.timestamp ? delito.timestamp.toDate().toLocaleString('es-ES') : "Sin fecha"}</small></p>

        {/* Botón para mostrar más detalles */}
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Mas detalles</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title" id="offcanvasRightLabel">Detalles</h3>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Tipo: {delito.tipo || "Sin tipo"}</p>
    <p>Descripción: {delito.descripcion || "Sin descripción"}</p>
    <p>Ubicación: {delito.ubicacion || "Sin ubicación"}</p>
    <p>Fecha: {delito.timestamp ? delito.timestamp.toDate().toLocaleString('es-ES') : "Sin fecha"}</p>
  </div>
</div>
      </div>
    </div>
  )
}
