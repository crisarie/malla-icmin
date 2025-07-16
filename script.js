const ramos = [
  // Primer Año - Semestre 1
  { codigo: "MIN101", nombre: "Fundamentos de Minería", prerequisitos: [], semestre: 1 },
  { codigo: "MAT1001", nombre: "Fund. de Matemática para la Ingeniería", prerequisitos: [], semestre: 1 },
  { codigo: "QUI100", nombre: "Química para Ingeniería", prerequisitos: [], semestre: 1 },
  { codigo: "FIN100", nombre: "Desarrollo Personal y Comunicación", prerequisitos: [], semestre: 1 },
  { codigo: "ICR010", nombre: "Antropología Cristiana", prerequisitos: [], semestre: 1 },

  // Semestre 2
  { codigo: "EIQ120", nombre: "Fundamentos de Ingeniería", prerequisitos: [], semestre: 2 },
  { codigo: "MAT1002", nombre: "Cálculo Diferencial e Integral", prerequisitos: ["MAT1001"], semestre: 2 },
  { codigo: "QUI161", nombre: "Química Inorgánica", prerequisitos: ["QUI100"], semestre: 2 },
  { codigo: "ICR020", nombre: "Ética Cristiana", prerequisitos: ["ICR010"], semestre: 2 },

  // Segundo Año - Semestre 3
  { codigo: "MIN151", nombre: "Mineralogía y Petrografía", prerequisitos: [], semestre: 3 },
  { codigo: "MAT1003", nombre: "Cálculo en Varias Variables", prerequisitos: ["MAT1002"], semestre: 3 },
  { codigo: "FIS1002", nombre: "Física para Ingeniería", prerequisitos: ["MAT1002"], semestre: 3 },
  { codigo: "EIQ239", nombre: "Principios de Fisicoquímica", prerequisitos: ["QUI161"], semestre: 3 },
  { codigo: "ING9001", nombre: "Inglés 1", prerequisitos: [], semestre: 3 },

  // Semestre 4
  { codigo: "MIN201", nombre: "Geología General", prerequisitos: ["MIN151"], semestre: 4 },
  { codigo: "MIN252", nombre: "Geología Estructural y Económica", prerequisitos: ["MIN201"], semestre: 4 },
  { codigo: "MAT1005", nombre: "Ecuaciones Diferenciales", prerequisitos: ["MAT1003"], semestre: 4 },
  { codigo: "EIQ342", nombre: "Termodinámica General", prerequisitos: ["EIQ239"], semestre: 4 },
  { codigo: "ING9002", nombre: "Inglés 2", prerequisitos: ["ING9001"], semestre: 4 },

  // Tercer Año - Semestre 5
  { codigo: "MIN251", nombre: "Perforación y Tronadura", prerequisitos: ["MIN252"], semestre: 5 },
  { codigo: "MIN301", nombre: "Carguío y Transporte", prerequisitos: ["MIN251"], semestre: 5 },
  { codigo: "EIQ377", nombre: "Sistemas Eléctricos en Procesos", prerequisitos: ["FIS1002"], semestre: 5 },
  { codigo: "ICA213", nombre: "Economía", prerequisitos: [], semestre: 5 },
  { codigo: "EIQ288", nombre: "Mecánica de Fluidos", prerequisitos: ["EIQ342"], semestre: 5 },
  { codigo: "ING9003", nombre: "Inglés 3", prerequisitos: ["ING9002"], semestre: 5 },

  // Semestre 6
  { codigo: "MIN332", nombre: "Topografía Minera", prerequisitos: ["MIN252"], semestre: 6 },
  { codigo: "MIN302", nombre: "Geología de Minas", prerequisitos: ["MIN252"], semestre: 6 },
  { codigo: "EIQ376", nombre: "Resistencia de Materiales", prerequisitos: ["EIQ288"], semestre: 6 },
  { codigo: "EIQ366", nombre: "Métodos Numéricos en Ingeniería", prerequisitos: ["MAT1005"], semestre: 6 },
  { codigo: "ING9004", nombre: "Inglés 4", prerequisitos: ["ING9003"], semestre: 6 },

  // Cuarto Año - Semestre 7
  { codigo: "MIN451", nombre: "Diseño de Minas Subterráneas", prerequisitos: ["MIN301", "MIN332"], semestre: 7 },
  { codigo: "MIN403", nombre: "Mecánica de Rocas", prerequisitos: ["EIQ376", "MIN302"], semestre: 7 },
  { codigo: "MIN402", nombre: "Evaluación de Recursos y Reservas", prerequisitos: ["MIN302"], semestre: 7 },
  { codigo: "EIQ312", nombre: "Administración de la Producción", prerequisitos: ["ICA213"], semestre: 7 },
  { codigo: "MIN401", nombre: "Ventilación y Drenaje de Minas", prerequisitos: ["MIN301"], semestre: 7 },

  // Semestre 8
  { codigo: "MIN453", nombre: "Mecánica de Rocas Aplicada", prerequisitos: ["MIN403"], semestre: 8 },
  { codigo: "MIN452", nombre: "Control y Automatización en Minería", prerequisitos: ["EIQ377"], semestre: 8 },
  { codigo: "MIN455", nombre: "Evaluación Económica de Proyectos Mineros", prerequisitos: ["MIN402", "ICA213"], semestre: 8 },
  { codigo: "MIN454", nombre: "Metodología y Gestión de Proyectos Mineros", prerequisitos: ["EIQ312"], semestre: 8 },
  { codigo: "FF1", nombre: "Formación Fundamental", prerequisitos: [], semestre: 8 },

  // Quinto Año - Semestre 9
  { codigo: "MIN502", nombre: "Diseño y Proyectos Open Pit", prerequisitos: ["MIN402", "MIN451"], semestre: 9 },
  { codigo: "MIN505", nombre: "Procesamiento de Minerales", prerequisitos: ["MIN252", "EIQ288"], semestre: 9 },
  { codigo: "MIN504", nombre: "Investigación y Gestión de Operaciones", prerequisitos: ["MIN454"], semestre: 9 },
  { codigo: "MIN503", nombre: "Sustentabilidad Minera", prerequisitos: ["MIN451"], semestre: 9 },
  { codigo: "FF2", nombre: "Formación Fundamental", prerequisitos: [], semestre: 9 },
  { codigo: "OPT1", nombre: "Optativo", prerequisitos: [], semestre: 9 },

  // Semestre 10
  { codigo: "EIQ582", nombre: "Proyecto de Título 1", prerequisitos: ["MIN502", "MIN503", "MIN504", "MIN505"], semestre: 10 },
  { codigo: "MIN553", nombre: "Economía de Minerales", prerequisitos: ["ICA213"], semestre: 10 },
  { codigo: "MIN555", nombre: "Derecho y Seguridad Minera", prerequisitos: ["MIN503"], semestre: 10 },
  { codigo: "OPT2", nombre: "Optativo", prerequisitos: [], semestre: 10 },

  // Sexto Año - Semestre 11
  { codigo: "EIQ625", nombre: "Proyecto de Título 2", prerequisitos: ["EIQ582"], semestre: 11 },
];

const completados = new Set();

function crearMalla() {
  const malla = document.getElementById("malla");
  for (let i = 1; i <= 11; i++) {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    contenedor.innerHTML = `<h2>Semestre ${i}</h2>`;

    ramos
      .filter(r => r.semestre === i)
      .forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo disabled";
        div.id = ramo.codigo;
        div.textContent = `${ramo.codigo}: ${ramo.nombre}`;
        div.onclick = () => toggleRamo(ramo, div);
        contenedor.appendChild(div);
      });

    malla.appendChild(contenedor);
  }
  actualizarEstado();
}

function toggleRamo(ramo, div) {
  if (!puedeActivarse(ramo)) return;

  if (completados.has(ramo.codigo)) {
    completados.delete(ramo.codigo);
  } else {
    completados.add(ramo.codigo);
  }

  actualizarEstado();
}

function puedeActivarse(ramo) {
  return ramo.prerequisitos.every(pre => completados.has(pre));
}

function actualizarEstado() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.codigo);
    if (completados.has(ramo.codigo)) {
      div.classList.remove("disabled");
      div.style.backgroundColor = "#a3d1ff";
    } else if (puedeActivarse(ramo)) {
      div.classList.remove("disabled");
      div.style.backgroundColor = "#d9ecff";
    } else {
      div.classList.add("disabled");
      div.style.backgroundColor = "#cccccc";
    }
  });
}

crearMalla();
