const programTable = document.querySelector('#body-table');
const programTable2 = document.querySelector('#body-table2');

const colors = ['col1', 'col2','col3','col4','col5','col6','col7','col8', 'col9', 'col10', 'col11']


document.addEventListener('DOMContentLoaded', ()=>{
    participantes.forEach(participante =>{
        addParticipant(programTable, participante);
    })
    
    participantes_jueves.forEach(participante =>{
        addParticipant(programTable2, participante);
    })
    addFinalRow(programTable2, '19:20-19:30');
})

function addFinalRow(table,hora){
    const finalRow = document.createElement('tr');
    finalRow.innerHTML = 
    `
    <td>${hora}</td>
    <td> - </td>
    <td>Closing remarks and awards</td>
    `;
    table.appendChild(finalRow);
}
function addParticipant(table, participante){
    const {Nombre, Apellidos, Titulo, Slot, Hora, TopicId} = participante;
    nombre_tot = Nombre + " " + Apellidos;
    const row = document.createElement('tr');
    row.classList.add(colors[parseInt(Slot)-1]);
    if(nombre_tot!==" "){
        row.innerHTML = 
        `
        <td>${Hora}</td>
        <td> ${Slot} </td>
        <td> <strong>${nombre_tot}.</strong> <i>${Titulo}.</i></td>
        `;
    } else{
        row.innerHTML = 
        `
        <td>${Hora}</td>
        <td> ${Slot} </td>
        <td> ${Titulo}.</td>
        `;
    }
    table.appendChild(row);
}

const participantes = [
    {
        "Nombre": "Rodrigo",
        "Apellidos": "Crespo Miguel",
        "Universidad": "Universidad Complutense de Madrid",
        "Titulo": "Resiliencia a fluctuaciones ambientales inducida por dispersión en poblaciones con Efecto Allee",
        "Topic": "socio-physics",
        "TopicId": "0",
        "Slot": "1",
        "Hora": "15:30-15:40"
    },
    {
        "Nombre": "Riccardo",
        "Apellidos": "Silini",
        "Universidad": "UPC",
        "Titulo": "Fast and effective measure for bivariate data-driven causal inference",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "1",
        "Hora": "15:40-15:50"
    },
    {
        "Nombre": "Ivan",
        "Apellidos": "Gonzalez Torre",
        "Universidad": "Vicomtech",
        "Titulo": "On the physical origin of linguistic laws",
        "Topic": "socio-physics",
        "TopicId": "0",
        "Slot": "1",
        "Hora": "15:50-16:00"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 1",
        "Slot": "-",
        "TopicId": "-",
        "Hora": "16:00-16:10"
    },
    {
        "Nombre": "Enrique",
        "Apellidos": "Rodriguez Fernandez",
        "Universidad": "Universidad Carlos III de Madrid",
        "Titulo": "Transition between chaotic and stochastic universality classes of kinetic roughening",
        "Topic": "phase transitions",
        "TopicId": "3",
        "Slot": "2",
        "Hora": "16:10-16:20"
    },
    {
        "Nombre": "Cintia",
        "Apellidos": "Pulido Lamas",
        "Universidad": "Universidad Complutense de Madrid",
        "Titulo": "Cálculo del descenso crioscópico usando el modelo Madrid-2019 y el método de coexistencia directa",
        "Topic": "phase transitions",
        "TopicId": "3",
        "Slot": "2",
        "Hora": "16:20-16:30"
    },
    {
        "Nombre": "Elena",
        "Apellidos": "Sesé Sansa",
        "Universidad": "EPFL",
        "Titulo": "Phase separation of active Brownian disks in the presence of alignment",
        "Topic": "phase transitions",
        "TopicId": "3",
        "Slot": "2",
        "Hora": "16:30-16:40"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 2",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "16:40-16:50"
    },
    {
        "Nombre": "Victor",
        "Apellidos": "Buendía",
        "Universidad": "Universidad de Granada",
        "Titulo": "Sincronización crítica en el cerebro: una perspectiva físico-estadística",
        "Topic": "sincronization & oscillators",
        "TopicId": "4",
        "Slot": "3",
        "Hora": "16:50-17:00"
    },
    {
        "Nombre": "Iván",
        "Apellidos": "León Merino",
        "Universidad": "Universidad de Cantabria- IFCA",
        "Titulo": "Osciladores acoplados: qué son, por qué son importantes y cómo describirlos.",
        "Topic": "sincronization & oscillators",
        "TopicId": "4",
        "Slot": "3",
        "Hora": "17:00-17:10"
    },
    {
        "Nombre": "Sergi",
        "Apellidos": "Granados Leyva",
        "Universidad": "Universidad de Barcelona",
        "Titulo": "Collective synchrony of paramagnetic particles in the presence of hydrodynamics",
        "Topic": "sincronization & oscillators",
        "TopicId": "4",
        "Slot": "3",
        "Hora": "17:10-17:20"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 3",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "17:20-17:30"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Café",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "17:30-17:50"
    },
    {
        "Nombre": "Pablo",
        "Apellidos": "Lozano Rodríguez",
        "Universidad": "Universidad Carlos III de Madrid",
        "Titulo": "Hierarchies and cooperation: an experiment",
        "Topic": "socio-physics",
        "TopicId": "0",
        "Slot": "4",
        "Hora": "17:50-18:00"
    },
    {
        "Nombre": "Juan",
        "Apellidos": "Ozaita Corral",
        "Universidad": "UC3M",
        "Titulo": "Ethnic Markers",
        "Topic": "socio-physics",
        "TopicId": "0",
        "Slot": "4",
        "Hora": "18:00-18:10"
    },
    {
        "Nombre": "Javier",
        "Apellidos": "Cristín",
        "Universidad": "Universitat Autònoma de Barcelona",
        "Titulo": "Decision making in humans from the perspective of statistical physics",
        "Topic": "socio-physics",
        "TopicId": "0",
        "Slot": "4",
        "Hora": "18:10-18:20"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 4",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "18:20-18:30"
    },
    {
        "Nombre": "Alberto",
        "Apellidos": "Molina Cardín",
        "Universidad": "Universidad Complutense de Madrid",
        "Titulo": "Asimetría temporal del campo magnético terrestre a partir de un modelo browniano",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "5",
        "Hora": "18:30-18:40"
    },
    {
        "Nombre": "José",
        "Apellidos": "Martín-Roca",
        "Universidad": "Universidad Complutense de Madrid",
        "Titulo": "Suspensions of Active Brownian particles interacting via two repulsivelength scales",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "5",
        "Hora": "18:40-18:50"
    },
    {
        "Nombre": "Carlos",
        "Apellidos": "Lajusticia Costan",
        "Universidad": "UNED",
        "Titulo": "Random walkers on a deformable medium",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "5",
        "Hora": "18:50-19:00"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 5",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "19:00-19:10"
    },
    {
        "Nombre": "Rubén",
        "Apellidos": "Hurtado Gutiérrez",
        "Universidad": "Universidad de Granada",
        "Titulo": "Spectral signature of dynamical phase transitions",
        "Topic": "phase transitions",
        "TopicId": "3",
        "Slot": "6",
        "Hora": "19:10-19:20"
    },
    {
        "Nombre": "Daniel",
        "Apellidos": "Villarrubia Moreno",
        "Universidad": "Universidad Carlos III de Madrid",
        "Titulo": "First Passage Percolation under extreme disorder",
        "Topic": "phase transitions",
        "TopicId": "3",
        "Slot": "6",
        "Hora": "19:20-19:30"
    },
    {
        "Nombre": "Beatriz",
        "Apellidos": "García Barreales",
        "Universidad": "Universidad de Extremadura",
        "Titulo": "Kardar–Parisi–Zhang universality class for the critical dynamics of reaction– diffusion fronts",
        "Topic": "phase transitions",
        "TopicId": "3",
        "Slot": "6",
        "Hora": "19:30-19:40"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 6",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "19:40-19:50"
    }
]
participantes_jueves = [
    {
        "Nombre": "Adriana",
        "Apellidos": "Reyna Lara",
        "Universidad": "Universidad de Zaragoza",
        "Titulo": "Adaptive mobility policies in metapopulations",
        "Topic": "dynamical processes on networks",
        "TopicId": "5",
        "Slot": "7",
        "Hora": "15:30-15:40"
    },
    {
        "Nombre": "Jorge P.",
        "Apellidos": "Rodríguez-García",
        "Universidad": "Universidad de Zaragoza",
        "Titulo": "The global network of ports supporting high seas fishing",
        "Topic": "complex networks",
        "TopicId": "5",
        "Slot": "7",
        "Hora": "15:40-15:50"
    },
    {
        "Nombre": "Lluís",
        "Apellidos": "Danús Amengual",
        "Universidad": "Universitat Rovira i Virgili",
        "Titulo": "Different collaboration patterns and impact of prominent researchers in Europe and North America",
        "Topic": "complex networks",
        "TopicId": "5",
        "Slot": "7",
        "Hora": "15:50-16:00"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 7",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "16:00-16:10"
    },
    {
        "Nombre": "Sergio",
        "Apellidos": "Faci-Lázaro",
        "Universidad": "Universidad de Zaragoza",
        "Titulo": "Resistencia funcional de redes de cultivos de neuronas",
        "Topic": "dynamical processes on networks",
        "TopicId": "5",
        "Slot": "8",
        "Hora": "16:10-16:20"
    },
    {
        "Nombre": "Pau",
        "Apellidos": "Casanova Ferrer",
        "Universidad": "Universidad Carlos III de Madrid",
        "Titulo": "Unravelling patA function in Anabaena heterocyst formation",
        "Topic": "biophysics",
        "TopicId": "6",
        "Slot": "8",
        "Hora": "16:20-16:30"
    },
    {
        "Nombre": "Javier",
        "Apellidos": "Diaz Brañas",
        "Universidad": "École polytechnique fédérale de Lausanne",
        "Titulo": "Simulaciones de nanopartículas anisotrópicas en mezclas de copolímeros",
        "Topic": "biophysics",
        "TopicId": "6",
        "Slot": "8",
        "Hora": "16:30-16:40"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 8",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "16:40-16:50"
    },
    {
        "Nombre": "Begoña",
        "Apellidos": "Mula Martín",
        "Universidad": "Universidad Nacional de Educación a Distancia (UNED)",
        "Titulo": "Casimir forces on deformed fermionic chains",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "9",
        "Hora": "16:50-17:00"
    },
    {
        "Nombre": "Carlos A.",
        "Apellidos": "Plata Ramos",
        "Universidad": "Université Paris-Saclay",
        "Titulo": "Optimal performance of stochastic irreversible Carnot-like heat engines",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "9",
        "Hora": "17:00-17:10"
    },
    {
        "Nombre": "Alberto",
        "Apellidos": "Megías Fernández",
        "Universidad": "Universidad de Extremadura",
        "Titulo": "Toy model for the relative entropy of a granular gas",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "9",
        "Hora": "17:10-17:20"
    },
    {
        "Nombre": "Jorge",
        "Apellidos": "Tabanera Bravo",
        "Universidad": "Universidad Complutense de Madrid",
        "Titulo": "Self-Oscillations in Nanomechanical Devices",
        "Topic": "statistical mechanics",
        "TopicId": "1",
        "Slot": "9",
        "Hora": "17:20-17:30"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 9",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "17:30-17:40"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Café",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "17:40-18:00"
    },
    {
        "Nombre": "Rodrigo Caitano",
        "Apellidos": "Barbosa da Silva",
        "Universidad": "Universidad de Navarra",
        "Titulo": "El atasco de un sistema granular como transición de fase",
        "Topic": "granular & colloidal systems",
        "TopicId": "5",
        "Slot": "10",
        "Hora": "18:00-18:10"
    },
    {
        "Nombre": "Diego",
        "Apellidos": "Ortega Hernández",
        "Universidad": "UNED",
        "Titulo": "Urban gentrification as an avalanche process",
        "Topic": "mobility",
        "TopicId": "7",
        "Slot": "10",
        "Hora": "18:10-18:20"
    },
    {
        "Nombre": "Joan",
        "Apellidos": "Codina Sala",
        "Universidad": "Institute of Physics, Beijing. China",
        "Titulo": "The role of motility in effective out-of-equilibrium interactions",
        "Topic": "mobility",
        "TopicId": "7",
        "Slot": "10",
        "Hora": "18:20-18:30"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 10",
        "Slot": "-",
        "TopicId": "-",
        "Hora": "18:30-18:40"
    },
    {
        "Nombre": "Rubén",
        "Apellidos": "Gómez González",
        "Universidad": "Universidad de Extremadura",
        "Titulo": "Efecto Mpemba en suspensiones moleculares binarias",
        "Topic": "molecular physics",
        "TopicId": "2",
        "Slot": "11",
        "Hora": "18:40-18:50"
    },
    {
        "Nombre": "Luis Enrique",
        "Apellidos": "Coronas Serna",
        "Universidad": "Universitat de Barcelona",
        "Titulo": "Coarse grained model for water and water-protein interfaces",
        "Topic": "molecular physics",
        "TopicId": "2",
        "Slot": "11",
        "Hora": "18:50-19:00"
    },
    {
        "Nombre": "Raul",
        "Apellidos": "Martinez Fernandez",
        "Universidad": "Universidad Autonoma de Madrid",
        "Titulo": "On the molecular origin on tribotaxis",
        "Topic": "molecular physics",
        "TopicId": "2",
        "Slot": "11",
        "Hora": "19:00-19:10"
    },
    {
        "Nombre": "",
        "Apellidos": "",
        "Titulo": "Preguntas slot 11",
        "TopicId": "-",
        "Slot": "-",
        "Hora": "19:10-19:20"
    }
    
]