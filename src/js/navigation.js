document.addEventListener('DOMContentLoaded', function(e){
    navBehavior();
    scrollNav();
});

function navBehavior(){
    const hamburguesa = document.querySelector('.hamburguer');
    const opciones = document.querySelector('.opciones');
    
    hamburguesa.addEventListener('click',()=>{
        hamburguesa.classList.toggle('activo');
        opciones.classList.toggle('show-opciones');
    })
}

function scrollNav(){
    
    const seccion4 = document.querySelector('.seccion4')
    const seccion3 = document.querySelector('.seccion3')
    const seccion5 = document.querySelector('.seccion5')
    const seccion9 = document.querySelector('.seccion9')
    const seccion6 = document.querySelector('.seccion6')
    const seccion7 = document.querySelector('.seccion7')
    const seccion8 = document.querySelector('.seccion8')
    const seccion1 = document.querySelector('.seccion1');
    const logo = document.querySelector('.logo-principal')
    const nosotros = document.querySelector('#nosotros');
    const servi = document.querySelector('#servicios');
    const contacto = document.querySelector('#contacto');
    const seccion11 = document.querySelector('.seccion11');
    const conoce = document.querySelector('.conoce-mas');
    const servicios = document.querySelectorAll('.servicio');

    servicios.forEach(servicio=>{
        servicio.addEventListener('click', ()=>{
            const servicioId = servicio.id;

            if(servicioId === 'mina'){
                seccion4.scrollIntoView({
                    behavior: "smooth"
                });
            }
            else if(servicioId === 'geologia'){
                seccion5.scrollIntoView({
                    behavior: "smooth"
                });
            }
            else if(servicioId === 'ambiente'){
                seccion6.scrollIntoView({
                    behavior: "smooth"
                });
            }
            else if(servicioId === 'geografia'){
                seccion7.scrollIntoView({
                    behavior: "smooth"
                });
            }
            else if(servicioId === 'geofisica'){
                seccion11.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })
    })
    logo.addEventListener('click',function(e){
        seccion1.scrollIntoView({
            behavior: "smooth"
        });
    })
    servi.addEventListener('click',function(e){
        seccion3.scrollIntoView({
            behavior: "smooth"
        });
    });
    nosotros.addEventListener('click',function(e){
        seccion8.scrollIntoView({
            behavior: "smooth"
        });
    });
    contacto.addEventListener('click',function(e){
        seccion9.scrollIntoView({
            behavior: "smooth"
        });
    });
    conoce.addEventListener('click', function(e){
        seccion8.scrollIntoView({
            behavior: "smooth"
        });
    });

    


}