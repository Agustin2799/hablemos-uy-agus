import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../store/appContext'
import Swal from 'sweetalert2'
import defaultAvatar from "../../img/avatar.jpg";

const Profesionales = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const checkLoggedStatus = async () => {
      try {
        const logged = await actions.validToken();
        if (!logged) {
          Swal.fire({
            title: 'Sesión expirada',
            text: 'Debes logearte nuevamente',
            icon: 'error',
            timer: 4000
          });
          navigate('/vista-login');
        }
      } catch (error) {
        console.error('Error al validar token:', error);
        navigate('/vista-login');
      }
    };

    checkLoggedStatus();

    return () => {
      document.body.removeChild(script);
    };
  }, [actions, navigate]);

  useEffect(() => {
    actions.obtenerEspecialidadesPorProfesional();
  }, [store.psicologos, actions]);

  const openCalendly = (profesional) => {
    let url = '';

    switch (profesional) {
      case 'Juan Pérez':
        url = 'https://calendly.com/hablemosuy1234/dr-juan-perez';
        break;
      case 'Luis Rodríguez':
        url = 'https://calendly.com/hablemosuy1234/dr-luis-rodriguez';
        break;
      case 'María García':
        url = 'https://calendly.com/hablemosuy1234/dra-maria-garcia';
        break;
      case 'Ana Martínez':
        url = 'https://calendly.com/hablemosuy1234/dra-ana-martinez';
        break;
      case 'Carlos Gómez':
        url = 'https://calendly.com/hablemosuy1234/dr-carlos-gomez';
        break;
      default:
        break;
    }

    if (url) {
      const fullUrl = `${url}?background_color=f4f2ee&text_color=350436&primary_color=350436`;
      Calendly.showPopupWidget(fullUrl);
    }

    actions.getMeetsUser(store.dataUser.correo);
  };

  return (
    <div className="mt-5">
      {store.psicologos.map((elm, index) => (
        <div className='d-flex justify-content-center' key={index}>
          <div className="card profesional mb-3 text-start col-10 col-md-8 col-xxl-6">
            <div className="row g-0 h-100">
              <div className="col-12 col-lg-5">
                <img
                  src={elm.foto == null ? defaultAvatar : elm.foto}
                  className="img-fluid rounded-start"
                  alt={elm.nombre}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <div className="col-12 col-lg-7 d-flex flex-column">
                <div className="card-body pb-1 pb-md-5">
                  <h2 className="card-title my-3 text-inicio">{elm.nombre_usuario} {elm.apellido}</h2>
                  <ul className="d-flex p-0 flex-row gap-2 flex-wrap">
                    {Array.isArray(elm.especialidades) && elm.especialidades.length > 0 ? (
                      elm.especialidades.map((especialidad) => (
                        <li className="especialidad-tag" key={especialidad?.id}>
                          {especialidad.nombre}
                        </li>
                      ))
                    ) : (
                      <li className="especialidad-tag">No hay especialidades disponibles.</li>
                    )}
                  </ul>
                  <p className="card-text text-inicio">
                    {elm.descripcion}
                  </p>
                </div>
                <div className="mt-auto d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={() => openCalendly(`${elm.nombre_usuario} ${elm.apellido}`)}
                    className="btn custom-btn me-4 mb-4"
                  >
                    Reservar agenda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profesionales;
