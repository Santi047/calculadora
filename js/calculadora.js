const pantalla = document.getElementById('pantalla');
let operacion = '';
let resultado = '';

function limpiarPantalla() {
    pantalla.value = '';
    resultado = '';
    operacion = '';
}

function borrarCaracter() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function ejecutarOperacion() {
    resultado = eval(operacion);
    pantalla.value = resultado;
    operacion = resultado;
}

function calcularPorcentaje() {
    resultado = eval(operacion) / 100;
    pantalla.value = resultado;
    operacion = resultado;
}

function agregarAlPantalla(valor) {
    pantalla.value += valor;
    operacion += valor;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.textContent;
        if (valor === 'AC') {
            limpiarPantalla();
        } else if (valor === 'b') {
            borrarCaracter();
        } else if (valor === '=') {
            ejecutarOperacion();
        } else if (valor === '%') {
            calcularPorcentaje();
        } else {
            agregarAlPantalla(valor);
        }
    });
});

// Script para cambiar entre modos día y noche
const cambiarModo = document.getElementById('cambiar-modo');
const iconoModo = document.getElementById('icono-modo');

cambiarModo.addEventListener('click', () => {
    document.body.classList.toggle('modo-noche');
    // Cambiar el icono según el modo actual
    if (document.body.classList.contains('modo-noche')) {
        iconoModo.classList.remove('fa-sun');
        iconoModo.classList.add('fa-moon');
    } else {
        iconoModo.classList.remove('fa-moon');
        iconoModo.classList.add('fa-sun');
    }
});