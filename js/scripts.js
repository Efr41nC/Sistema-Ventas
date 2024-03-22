
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var currentStep = 1;

var currentStep = 1;
var currentProductName;
var currentProductPrice;

function openModal2(productName, productPrice) {
    currentProductName = productName;
    currentProductPrice = productPrice;
    var modal = document.getElementById('myModal2');
    modal.style.display = 'flex';
    changeStep(currentStep);
}

function changeStep(step) {
    currentStep = step;
    var steps = document.querySelectorAll('.step');
    steps.forEach(function (stepElement, index) {
        if (index + 1 === step) {
            stepElement.classList.add('active');
        } else {
            stepElement.classList.remove('active');
        }
    });

    var formSteps = document.querySelectorAll('.form-step');
    formSteps.forEach(function (formStep, index) {
        if (index + 1 === step) {
            formStep.classList.add('active');
        } else {
            formStep.classList.remove('active');
        }
    });
}

function nextStep() {
    var currentForm = document.getElementById('step' + currentStep).querySelector('form');
    if (currentForm.checkValidity()) {
        if (currentStep < 2) {
            currentStep++;
            changeStep(currentStep);
        }
    } else {
        alert('Completa el formulario actual antes de pasar al siguiente paso.');
    }
}

function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var dni = document.getElementById('dni').value;
    var direccion = document.getElementById('direccion').value;
    var celular = document.getElementById('celular').value;
    var email = document.getElementById('email').value;
    
    var mensaje = `Hola,he comprado el Producto (${currentProductName}) que tiene el Precio de ${currentProductPrice} \n MIS DATOS SON: \n Nombre: ${nombre} \n Dni:${dni} \n Direccion: ${direccion} \n Celular: ${celular} \n Email: ${email} \n Le envio captura de la compra`;
    
    var numeroTelefono = '902759736';  // Reemplaza con tu número de teléfono de WhatsApp
    var enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = enlaceWhatsApp;
}

function enviarFormulario2() {
    var nombre = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var celular = document.getElementById('phone').value;
    var email = document.getElementById('email1').value;
    
    var mensaje = `Hola, Soy: \n ${nombre} con el numero telefono: \n ${celular} y con el Email: \n ${email} le envio este mensaje \n ${message}`;
    var numeroTelefono = '902759736';  // Reemplaza con tu número de teléfono de WhatsApp
    var enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = enlaceWhatsApp;
}

function cerrarModal() {
    var modal = document.getElementById('myModal2');
    modal.style.display = 'none';
}
