const ramos = [
  { codigo: "MIN101", nombre: "Fundamentos de Minería", prerequisitos: [], semestre: 1 },
  { codigo: "MAT1001", nombre: "Fund. Matemática Ing.", prerequisitos: [], semestre: 1 },
  { codigo: "QUI100", nombre: "Química Ingeniería", prerequisitos: [], semestre: 1 },
  { codigo: "FIN100", nombre: "Desarrollo Personal", prerequisitos: [], semestre: 1 },
  { codigo: "ICR010", nombre: "Antropología Cristiana", prerequisitos: [], semestre: 1 },

  { codigo: "EIQ120", nombre: "Fund. Ingeniería", prerequisitos: [], semestre: 2 },
  { codigo: "MAT1002", nombre: "Cálculo Dif. e Integral", prerequisitos: ["MAT1001"], semestre: 2 },
  { codigo: "QUI161", nombre: "Química Inorgánica", prerequisitos: ["QUI100"], semestre: 2 },
  { codigo: "ICR020", nombre: "Ética Cristiana", prerequisitos: ["ICR010"], semestre: 2 },

  { codigo: "MIN151", nombre: "Mineralogía y Petrografía", prerequisitos: [], semestre: 3 },
  { codigo: "MAT1003", nombre: "Cálculo en Varias Variables", prerequisitos: ["MAT1002"], semestre: 3 },
  { codigo: "FIS1002", nombre: "Física para Ingeniería", prerequisitos: ["MAT1002"], semestre: 3 },
  { codigo: "EIQ239", nombre: "Principios de Fisicoquímica", prerequisitos: ["QUI161"], semestre: 3 },
  { codigo: "ING9001", nombre: "Inglés 1", prerequisitos: [], semestre: 3 },

  { codigo: "MIN201", nombre: "Geología General", prerequisitos: ["MIN151"], semestre: 4 },
  { codigo: "MIN252", nombre: "Geología Estructural y Económica", prerequisitos: ["MIN201"], semestre: 4 },
  { codigo: "MAT1005", nombre: "Ecuaciones Diferenciales", prerequisitos: ["MAT1003"], semestre: 4 },
  { codigo: "EIQ342", nombre: "Termodinámica General", prerequisitos: ["EIQ239"], semestre: 4 },
  { codigo: "ING9002", nombre: "Inglés 2", prerequisitos: ["ING9001"], semestre: 4 },

  { codigo: "MIN251", nombre: "Perforación y Tronadura", prerequisitos: ["MIN252"], semestre: 5 },
  { codigo: "MIN301", nombre: "Carguío y Transporte", prerequisitos: ["MIN251"], semestre: 5 },
  { codigo: "EIQ377", nombre: "Sistemas Eléctricos", prerequisitos: ["FIS1002"], semestre: 5 },
  { codigo: "ICA213", nombre: "Economía", prerequisitos: [], semestre: 5 },
  { codigo: "EIQ288", nombre: "Mecánica de Fluidos", prerequisitos: ["EIQ342"], semestre: 5 },
  { codigo: "ING9003", nombre: "Inglés 3", prerequisitos: ["ING9002"], semestre: 5 },

  { codigo: "MIN332", nombre: "Topografía Minera", prerequisitos: ["MIN252"], semestre: 6 },
  { codigo: "MIN302", nombre: "Geología de Minas", prerequisitos: ["MIN252"], semestre: 6 },
  { codigo: "EIQ376", nombre: "Resistencia Materiales", prerequisitos: ["EIQ288"], semestre: 6 },
  { codigo: "EIQ366", nombre: "Métodos Numéricos", prerequisitos: ["MAT1005"], semestre: 6 },
  { codigo: "ING9004", nombre: "Inglés 4", prerequisitos: ["ING9003"], semestre: 6 },

  { codigo: "MIN451", nombre: "Diseño Minas Subterráneas", prerequisitos: ["MIN301", "MIN332"], semestre: 7 },
  { codigo: "MIN403", nombre: "Mecánica de Rocas", prerequisitos: ["EIQ376", "MIN302"], semestre: 7 },
  { codigo: "MIN402", nombre: "Evaluación Recursos/Reservas", prerequisitos: ["MIN302"], semestre: 7 },
  { codigo: "EIQ312", nombre: "Adm. Producción", prerequisitos: ["ICA213"], semestre: 7 },
  { codigo: "MIN401", nombre: "Ventilación y Drenaje", prerequisitos: ["MIN301"], semestre: 7 },

  { codigo: "MIN453", nombre: "Mecánica de Rocas Aplicada", prerequisitos: ["MIN403"], semestre: 8 },
  { codigo: "MIN452", nombre: "Automatización en Minería", prerequisitos: ["EIQ377"], semestre: 8 },
  { codigo: "MIN455", nombre: "Eval. Económica Proy. Mineros", prerequisitos: ["MIN402", "ICA213"], semestre: 8 },
  { codigo: "MIN454", nombre: "Metodología Proyectos Mineros", prerequisitos: ["EIQ312"], semestre: 8 },
  { codigo: "FF1", nombre: "Formación Fundamental", prerequisitos: [], semestre: 8 },

  { codigo: "MIN502", nombre: "Diseño y Proy. Open Pit", prerequisitos: ["MIN402", "MIN451"], semestre: 9 },
  { codigo: "MIN505", nombre: "Procesamiento de Minerales", prerequisitos: ["MIN252", "EIQ288"], semestre: 9 },
  { codigo: "MIN504", nombre: "Investigación y Gestión", prerequisitos: ["MIN454"], semestre: 9 },
  { codigo: "MIN503", nombre: "Sustentabilidad Minera", prerequisitos: ["MIN451"], semestre: 9 },
  { codigo: "FF2", nombre: "Formación Fundamental", prerequisitos: [], semestre: 9 },
  { codigo: "OPT1", nombre: "Optativo", prerequisitos: [], semestre: 9 },

  { codigo: "EIQ582", nombre: "Proyecto de Título 1", prerequisitos: ["MIN502", "MIN503", "MIN504", "MIN505"], semestre: 10 },
  { codigo: "MIN553", nombre: "Economía de Minerales", prerequisitos: ["ICA213"], semestre: 10 },
  { codigo: "MIN555", nombre: "Derecho y Seguridad", prerequisitos: ["MIN503"], semestre: 10 },
  { codigo: "OPT2", nombre: "Optativo", prerequisitos: [], semestre: 10 },

  { codigo: "EIQ625", nombre: "Proyecto de Título 2", prerequisitos: ["EIQ582"], semestre: 11 },
];

const aprobados = new Set();

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  for (let i = 1; i <= 11; i++) {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    contenedor.innerHTML = `<h2>Semestre ${i}</h2>`;

    ramos
      .filter(r => r.semestre === i)
      .forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.id = ramo.codigo;
        div.textContent = `${ramo.codigo}: ${ramo.nombre}`;
        div.onclick = () => toggleRamo(ramo);
        contenedor.appendChild(div);
      });

    malla.appendChild(contenedor);
  }

  actualizarRamos();
}

function puedeActivarse(ramo) {
  return ramo.prerequisitos.every(c => aprobados.has(c));
}

function toggleRamo(ramo) {
  if (!puedeActivarse(ramo)) return;

  if (aprobados.has(ramo.codigo)) {
    aprobados.delete(ramo.codigo);
  } else {
    aprobados.add(ramo.codigo);
  }

  actualizarRamos();
}

function actualizarRamos() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.codigo);
    if (!div) return;

    div.className = "ramo"; // reset
    if (aprobados.has(ramo.codigo)) {
      div.classList.add("aprobado");
    } else if (!puedeActivarse(ramo)) {
      div.classList.add("bloqueado");
    } else {
      div.classList.add("pendiente");
    }
  });
}

crearMalla();
