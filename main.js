var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('¡Si lo puedes imaginar, lo puedo crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();


// Función para mostrar la información
function showInfo(infoId) {
    const infoData = {
        info1: `
                <div class="card me-5 ms-5">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex">
                            <img src="/assets/" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Sitema de inventario</h5>
                                <p style="text-align: justify;"> Participé en el desarrollo e implementación de un sistema de gestión para la administración de inventario y asignación de tareas. El proyecto fue desarrollado en Java con MySQL y diseñado para instalación local usando .exe facilitando su despliegue y uso en entornos locales.</p>
                            </div>
                            <div class="d-flex justify-content-center pb-3">
                                <a class="btn btn-primary me-2" href="clon-pinterest-wckx.vercel.app/" role="button">Ver</a>
                                <a class="btn btn-primary" href="https://github.com/jessips4/ClonPinterest.git" role="button">github</a>
                            </div>
                        </div>
                    </div>
                </div>
                `,
        info2: `
                <div class="card me-5 ms-5">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex">
                            <img src="./assets/pinterest.png" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Clon de pinterest</h5>
                                <p style="text-align: justify;"> El proyecto consiste en un clon básico de Pinterest, diseñado como una plataforma visual para compartir y organizar imágenes en tableros temáticos.Conseguir una distribución uniforme y estética de las tarjetas fue complicado. Se logró ajustando el sistema de columnas de Bootstrap y refinando los estilos en CSS.</p>
                                <a class="btn btn-primary me-2" href="clon-pinterest-wckx.vercel.app/" role="button">Ver</a>
                                <a class="btn btn-primary" href="https://github.com/jessips4/ClonPinterest.git" role="button">github</a>
                            </div>
                        </div>
                    </div>
                </div>`,
        info3: `
                <div class="card me-5 ms-5">
                    <div class="row g-0">
                        <div class="col-md-5 d-flex">
                            <img src="/assets/perseflora.jpeg" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">Laboratorio - Uso del DOM</h5>
                                <p style="text-align: justify;"> Perseflora es una plataforma de ecommerce especializada en la venta de suculentas, diseñada para ayudar a un vivero de Xochimilco a expandir sus ventas en línea. Utilizando tecnologías robustas como Java, AWS y MySQL para el backend, asegura un rendimiento óptimo y una gestión segura de los datos, mientras que en el frontend se emplearon HTML, CSS, Bootstrap y JavaScript para ofrecer una experiencia de usuario atractiva y funcional.</p>
                            </div>
                            <div class="d-flex justify-content-center pb-3">
                                <a class="btn btn-primary me-2" href="clon-pinterest-wckx.vercel.app/" role="button">Ver</a>
                                <a class="btn btn-primary" href="https://github.com/jessips4/ClonPinterest.git" role="button">github</a>
                            </div>
                        </div>
                    </div>
                </div>`,
        info4: `
                <div class="card me-5 ms-5">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex">
                            <img src="./assets/hackaton.png" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Hackaton - Pagina de deportes</h5>
                                <p style="text-align: justify;"> Perseflora es una plataforma de ecommerce especializada en la venta de suculentas, diseñada para ayudar a un vivero de Xochimilco a expandir sus ventas en línea. Utilizando tecnologías robustas como Java, AWS y MySQL para el backend, asegura un rendimiento óptimo y una gestión segura de los datos, mientras que en el frontend se emplearon HTML, CSS, Bootstrap y JavaScript para ofrecer una experiencia de usuario atractiva y funcional.</p>
                            </div>
                            <div class="d-flex justify-content-center pb-3">
                                <a class="btn btn-primary me-2" href="clon-pinterest-wckx.vercel.app/" role="button">Ver</a>
                                <a class="btn btn-primary" href="https://github.com/jessips4/ClonPinterest.git" role="button">github</a>
                            </div>
                        </div>
                    </div>
                </div>`,
        info5: `
                <div class="card me-5 ms-5">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex">
                            <img src="/assets/perseflora.jpeg" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Perseflora e-commerce</h5>
                                <p style="text-align: justify;"> Perseflora es una plataforma de ecommerce especializada en la venta de suculentas, diseñada para ayudar a un vivero de Xochimilco a expandir sus ventas en línea. Utilizando tecnologías robustas como Java, AWS y MySQL para el backend, asegura un rendimiento óptimo y una gestión segura de los datos, mientras que en el frontend se emplearon HTML, CSS, Bootstrap y JavaScript para ofrecer una experiencia de usuario atractiva y funcional.</p>
                            </div>
                            <div class="d-flex justify-content-center pb-3">
                                <a class="btn btn-primary me-2" href="clon-pinterest-wckx.vercel.app/" role="button">Ver</a>
                                <a class="btn btn-primary" href="https://github.com/jessips4/ClonPinterest.git" role="button">github</a>
                            </div>
                        </div>
                    </div>
                </div>`
    };

    // Mostrar la información seleccionada
    document.getElementById('info-container').innerHTML = infoData[infoId];
}

const timelineContainer = document.querySelector('.col .timeline');

// Función para manejar el desplazamiento
function activateAutoScroll() {
    const containerWidth = timelineContainer.offsetWidth;
    const timelineWidth = timelineContainer.scrollWidth;

    timelineContainer.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX - timelineContainer.getBoundingClientRect().left;

        // Calcula el porcentaje de la posición del cursor
        const percentage = mouseX / containerWidth;
        const scrollAmount = percentage * (timelineWidth - containerWidth);

        // Desplaza el timeline suavemente
        timelineContainer.scrollLeft = scrollAmount;
    });
}

function handleResize() {
    if (window.innerWidth <= 768) {
        
        activateAutoScroll();
    } else {
        
        timelineContainer.removeEventListener('mousemove', activateAutoScroll);
        timelineContainer.scrollLeft = 0; 
    }
}

window.addEventListener('resize', handleResize);
handleResize();


