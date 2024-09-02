import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component';
import defaultAvatar from "../../img/avatar.jpg";

const psicologos = [
    {
        img: "https://media.licdn.com/dms/image/C5603AQEf2PH1Z6jMaQ/profile-displayphoto-shrink_800_800/0/1542835716681?e=2147483647&v=beta&t=UStaIdaLcPXslHpqfUExnhZpPCiFlveK6_Xf60asB2w",
        nombre: "Juan Pérez",
        especialidades: ["Sexología", "Psicología del Deporte", "Psicología Educativa", "Psicología Social", "Terapia Cognitivo-Conductual", "Psicología Clínica"],
        descripcion: "Juan Pérez es un psicólogo clínico con amplia experiencia en terapia cognitivo-conductual, ayudando a pacientes a superar trastornos de ansiedad y depresión.",
        calificacion: 4.8,
    },
    {
        img: "https://th.bing.com/th/id/OIP.3pTvuODk4tohlb2GjXzhUQHaGv?rs=1&pid=ImgDetMain",
        nombre: "María García",
        especialidades: ["Psicología Organizacional", "Terapia Familiar", "Terapia de Pareja", "Sexología", "Psicoanálisis", "Intervención en Crisis"],
        descripcion: "María García trabaja con familias y parejas, ayudándolas a mejorar la comunicación y resolver conflictos de manera efectiva.",
        calificacion: 4.7,
    },
    {
        img: "https://th.bing.com/th/id/OIP.7kRUafV2fWsF8wi1zH_CewHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain",
        nombre: "Luis Rodríguez",
        especialidades: ["Psicología Organizacional", "Coaching", "Psicología Clínica", "Terapia Cognitivo-Conductual", "Terapia Familiar", "Terapia Infantil"],
        descripcion: "Luis Rodríguez es un experto en psicología organizacional y coaching, ayudando a mejorar el rendimiento en empresas y el desarrollo de líderes.",
        calificacion: 4.9,
    },
    {
        img: "https://media.licdn.com/dms/image/C4D03AQG6bwvCYAJucQ/profile-displayphoto-shrink_800_800/0/1619111773727?e=2147483647&v=beta&t=4YsQKaZyBsL-csV5ud1Pm8M5tqienkoe_dEvHhNNUwI",
        nombre: "Ana Martínez",
        especialidades: ["Psicología Organizacional", "Coaching", "Psicología Forense", "Terapia de Pareja", "Terapia Familiar", "Psicología Educativa"],
        descripcion: "Ana Martínez es especialista en psicología forense y realiza evaluaciones psicológicas para casos legales.",
        calificacion: 3.6,
    },
    {
        img: "https://th.bing.com/th/id/OIP.ZqIS8QmJFXUBUT1j292aegHaHa?w=530&h=530&rs=1&pid=ImgDetMain",
        nombre: "Carlos Gómez",
        especialidades: ["Intervención en Crisis", "Psicoanálisis", "Psicología Social", "Coaching", "Terapia Familiar"],
        descripcion: "Carlos Gómez se especializa en intervención en crisis y terapia familiar, apoyando a individuos en momentos de gran estrés.",
        calificacion: 4.5,
    }
];



const SimpleCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,  // Tiempo en milisegundos
        arrows: true,
    };

    return (
        <Slider {...settings}>
            {
                psicologos.map((elm, index) => {
                    
                    
                    return (
                        <div className='d-flex justify-content-center' key={index}>
                            <div className="card profesional mb-3 text-start col-10 col-md-8 bg-light" style={{ minHeight: '300px', overflow: 'hidden' }}>
                                <div className="row g-0 h-100">
                                    <div className="col-md-4">
                                        <img
                                            src={elm.img == null ? defaultAvatar : elm.img }
                                            className="img-fluid rounded-top rounded-md-start"
                                            alt={elm.nombre}
                                            style={{
                                                minHeight: '300px',
                                                width: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title text-inicio my-3">{elm.nombre}</h2>
                                            <ul className="d-flex p-0 flex-row gap-2 flex-wrap">
                                            {
                                            elm.especialidades.map((especialidad, inx) => (
                                                <li className="especialidad-tag" key={inx}>
                                                  {especialidad}
                                                </li>
                                              ))
                                            }
                                            </ul>
                                            <p className="card-text text-inicio">{elm.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    );
}

export default SimpleCarousel;
