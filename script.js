const cursos = [
    { id: 'MIN101', nombre: 'MIN 101: Fundamentos de Minería', prereq: [] },
    { id: 'MAT1001', nombre: 'MAT 1001: Fundamentos de Matemática', prereq: [] },
    { id: 'QUI100', nombre: 'QUI 100: Química para Ingeniería', prereq: [] },
    { id: 'FIN100', nombre: 'FIN 100: Desarrollo Personal', prereq: [] },
    { id: 'ICR010', nombre: 'ICR 010: Antropología Cristiana', prereq: [] },
    { id: 'EIQ120', nombre: 'EIQ 120: Fundamentos de Ingeniería', prereq: [] },
    { id: 'MAT1002', nombre: 'MAT 1002: Cálculo Diferencial', prereq: ['MAT1001'] },
    { id: 'QUI161', nombre: 'QUI 161: Química Inorgánica', prereq: ['QUI100'] },
    { id: 'ICR020', nombre: 'ICR 020: Ética Cristiana', prereq: ['ICR010'] },
    { id: 'MIN151', nombre: 'MIN 151: Mineralogía y Petrografía', prereq: [] },
    { id: 'MAT1003', nombre: 'MAT 1003: Cálculo en Varias Variables', prereq: ['MAT1002'] },
    { id: 'FIS1002', nombre: 'FIS 1002: Física para Ingeniería', prereq: ['MAT1002'] },
    { id: 'EIQ239', nombre: 'EIQ 239: Principios de Fisicoquímica', prereq: ['QUI161'] },
    { id: 'ING9001', nombre: 'ING 9001: Inglés 1', prereq: [] },
    { id: 'MIN201', nombre: 'MIN 201: Geología General', prereq: ['MIN151'] },
    { id: 'MIN252', nombre: 'MIN 252: Geología Estructural', prereq: ['MIN201'] },
    { id: 'MAT1005', nombre: 'MAT 1005: Ecuaciones Diferenciales', prereq: ['MAT1003'] },
    { id: 'EIQ342', nombre: 'EIQ 342: Termodinámica General', prereq: ['EIQ239'] },
    { id: 'ING9002', nombre: 'ING 9002: Inglés 2', prereq: ['ING9001'] },
    // Y así sigues con todos los demás ramos que enviaste...

    { id: 'MIN251', nombre: 'MIN 251: Perforación y Tronadura', prereq: ['MIN252'] },
    { id: 'MIN301', nombre: 'MIN 301: Carguío y Transporte', prereq: ['MIN251'] },
    { id: 'EIQ377', nombre: 'EIQ 377: Sistemas Eléctricos en Procesos', prereq: ['FIS1002'] },
    // Continúa con la malla completa...
];

// Generar visualmente los cursos
const mallaDiv = document.getElementById('malla');

cursos.forEach(curso => {
    const div = document.createElement('div');
    div.classList.add('curso');
    div.classList.add(curso.prereq.length ? 'bloqueado' : ''); // Si tiene prereq empieza bloqueado
    div.textContent = curso.nombre;
    div.dataset.id = curso.id;
    mallaDiv.appendChild(div);
});

function actualizarEstado() {
    cursos.forEach(curso => {
        const prereqCumplidos = curso.prereq.every(pr => {
            const prereqElement = document.querySelector(`[data-id="${pr}"]`);
            return prereqElement && prereqElement.classList.contains('aprobado');
        });

        const cursoElement = document.querySelector(`[data-id="${curso.id}"]`);
        if (prereqCumplidos) {
            cursoElement.classList.remove('bloqueado');
        } else if (!cursoElement.classList.contains('aprobado')) {
            cursoElement.classList.add('bloqueado');
        }
    });
}

document.querySelectorAll('.curso').forEach(curso => {
    curso.addEventListener('click', () => {
        if (curso.classList.contains('bloqueado')) return;
        curso.classList.toggle('aprobado');
        actualizarEstado();
    });
});

actualizarEstado();

