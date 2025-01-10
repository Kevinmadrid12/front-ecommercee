const AboutUs = () => {
    return (
        <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Creadores de la plataforma Nova Trend.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 m-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                            Desarrolladora Front-End 
                            </span>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-white">Dania Merari</h3>
                        </div>
                        <p className="mt-4 text-purple-200">Dania es la responsable de dar vida visual a Nova Trend. Con una gran habilidad en diseño web y desarrollo de interfaces, se asegura de que nuestra tienda en línea sea visualmente atractiva, intuitiva y fácil de navegar. Su enfoque en la experiencia de usuario (UX) y su pasión por el detalle permiten que nuestros clientes disfruten de una navegación fluida en todos sus dispositivos.</p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 m-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                            Desarrollador Back-End
                            </span>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-white">Kevin Madrid</h3>
                        </div>
                        <p className="mt-4 text-purple-200">Kevin trabaja codo a codo con Dania para implementar soluciones tecnológicas que hagan que Nova Trend sea una plataforma interactiva y dinámica. Especializado en JavaScript y tecnologías como React, Kevin optimiza el rendimiento de nuestro sitio para asegurar que cada transacción y cada clic se realicen de forma rápida y eficiente, mejorando la experiencia general del usuario.</p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 m-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                            Directora Creativa
                            </span>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-white">Isidro Colocho</h3>
                        </div>
                        <p className="mt-4 text-purple-200">Isidro es el motor detrás de toda la infraestructura técnica de Nova Trend. Su experiencia en la creación de APIs, bases de datos y la gestión de servidores garantiza que todo funcione sin problemas en el backend. Isidro se asegura de que el sitio sea seguro, eficiente y escalable, gestionando el flujo de datos y soportando el crecimiento continuo de nuestra plataforma.

</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;