document.addEventListener('DOMContentLoaded', function(e){
    navBehavior();
    scrollNav();
});

function navBehavior(){
    const hamburguesa = document.querySelector('.hamburguer');
    
    hamburguesa.addEventListener('click',()=>{
        hamburguesa.classList.toggle('activo');
    })
}

function scrollNav(){
    
    const seccion4 = document.querySelector('.seccion4')
    const seccion5 = document.querySelector('.seccion5')
    const seccion6 = document.querySelector('.seccion6')
    const seccion7 = document.querySelector('.seccion7')
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
        })
    })




}