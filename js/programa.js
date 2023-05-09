const programTable = document.querySelector('#body-table');
const programTable2 = document.querySelector('#body-table2');

const colors = ['col1', 'col2','col3','col4','col5','col6','col7','col8', 'col9', 'col10', 'col11']


document.addEventListener('DOMContentLoaded', ()=>{
    participantes.forEach(participante =>{
        addParticipant(programTable, participante);
    })
    
    participantes2.forEach(participante =>{
        addParticipant(programTable2, participante);
    })
    addFinalRow(programTable2, '19:10');
})

function addFinalRow(table,hora){
    const finalRow = document.createElement('tr');
    finalRow.innerHTML = 
    `
    <td>${hora}</td>
    <td> - </td>
    <td> - </td>
    <td>Closing remarks and awards</td>
    `;
    table.appendChild(finalRow);
}
function addParticipant(table, participante){
    const {NOMBRE, TITULO, SLOT, NOMBRE_SLOT, HORA, NUMERO} = participante;
    hora_short = HORA.substr(0, 5)
    const row = document.createElement('tr');
    row.classList.add(colors[parseInt(SLOT)-1]);
    if(NOMBRE!==" "){
        row.innerHTML = 
        `
        <td>${hora_short}</td>
        <td> ${SLOT} </td>
        <td> ${NUMERO} </td>
        <td> <strong>${NOMBRE}.</strong> <i>${TITULO}.</i></td>
        `;
    } else{
        row.innerHTML = 
        `
        <td>${hora_short}</td>
        <td> ${SLOT} </td>
        <td> ${NUMERO} </td>
        <td> ${TITULO}.</td>
        `;
    }
    table.appendChild(row);
}

const participantes =  [
        {
         "NOMBRE": "Marta Pedrosa García-Moreno",
         "TITULO": "Active transport in confinement",
         "SLOT": 1,
         "NOMBRE_SLOT": "Biophysics",
         "HORA": "15:30:00",
         "NUMERO": 1
        },
        {
         "NOMBRE": "Marina Fernández Ruz",
         "TITULO": "A theoretical approach to the complex chemical evolution of phosphorus in the interstellar medium",
         "SLOT": 1,
         "NOMBRE_SLOT": "Biophysics",
         "HORA": "15:40:00",
         "NUMERO": 2
        },
        {
         "NOMBRE": "Belén Serrano Antón",
         "TITULO": "Artificial intelligence for coronary structure segmentation",
         "SLOT": 1,
         "NOMBRE_SLOT": "Biophysics",
         "HORA": "15:50:00",
         "NUMERO": 3
        },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 1",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "16:00:00",
            "NUMERO": "-"
           },
           {
            "NOMBRE": "Pau Esteve Ferrer",
            "TITULO": "Distinguishing chaos from noise: a deep learning approach to nonlinear time series analysis",
            "SLOT": 2,
            "NOMBRE_SLOT": "Miscelánea",
            "HORA": "16:10:00",
            "NUMERO": 4
           },
           {
            "NOMBRE": "Natalia Ruiz Pino",
            "TITULO": "Entropy reduction and energetic balance in feedback ratchets",
            "SLOT": 2,
            "NOMBRE_SLOT": "Information theory",
            "HORA": "16:20:00",
            "NUMERO": 5
           },
           
           {
            "NOMBRE": "Jesús María Marcos Merino",
            "TITULO": "Radial spreading of a thin-film model",
            "SLOT": 2,
            "NOMBRE_SLOT": "Miscelánea",
            "HORA": "16:30:00",
            "NUMERO": 6
           },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 2",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "16:40:00",
            "NUMERO": "-"
           },
        {
         "NOMBRE": "Alberto Martinez Serra",
         "TITULO": "Size-dependent glassy kinetics of nanoparticle-protein corona complexes",
         "SLOT": 3,
         "NOMBRE_SLOT": "Quantum",
         "HORA": "16:50:00",
         "NUMERO": 7
        },
        {
         "NOMBRE": "José Antonio Almanza Marrero ",
         "TITULO": "Coherence for quantum enhanced thermodynamic performance in steady-state quantum thermal machines",
         "SLOT": 3,
         "NOMBRE_SLOT": "Quantum",
         "HORA": "17:00:00",
         "NUMERO": 8
        },
        {
         "NOMBRE": "Juan Bautista Grau Climent",
         "TITULO": "Mejora de la estabilidad para el sistema dinámico del juego cuántico de Cournot",
         "SLOT": 3,
         "NOMBRE_SLOT": "Quantum",
         "HORA": "17:10",
         "NUMERO": 9
        },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 3",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "17:20:00",
            "NUMERO": "-"
         },
        {
            "NOMBRE": " ",
            "TITULO": "Descanso",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "17:30:00",
            "NUMERO": "-"
           },
        {
         "NOMBRE": "Miguel Ibáñez García",
         "TITULO": "Anomalous relaxation phenomena in trapped colloids: heating is faster than cooling",
         "SLOT": 4,
         "NOMBRE_SLOT": "granular &amp; colloidal systems",
         "HORA": "17:50:00",
         "NUMERO": 10
        },
        {
         "NOMBRE": "Manuel Mayo León",
         "TITULO": "Dynamics of a confined and ultraconfined vibrated granuar system",
         "SLOT": 4,
         "NOMBRE_SLOT": "granular &amp; colloidal systems",
         "HORA": "18:00",
         "NUMERO": 11
        },
        {
         "NOMBRE": "Alejandro Almodovar ",
         "TITULO": "Interacting particle systems with mobility and demographic dynamics as biological models",
         "SLOT": 4,
         "NOMBRE_SLOT": "granular &amp; colloidal systems",
         "HORA": "18:10:00",
         "NUMERO": 12
        },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 4",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "18:20:00",
            "NUMERO": "-"
           },
           {
            "NOMBRE": "Miguel Angel González Casado",
            "TITULO": "The role of structural balance in personal networks dynamics",
            "SLOT": 5,
            "NOMBRE_SLOT": "socio-physics",
            "HORA": "18:30:00",
            "NUMERO": 13
           },
           {
            "NOMBRE": "David Abella Bujalance",
            "TITULO": "Ordering dynamics and aging in Threshold models",
            "SLOT": 5,
            "NOMBRE_SLOT": "socio-physics",
            "HORA": "18:40:00",
            "NUMERO": 14
           },
           {
            "NOMBRE": "Diego Escribano Gómez",
            "TITULO": "Exploring the complexities of the social world",
            "SLOT": 5,
            "NOMBRE_SLOT": "socio-physics",
            "HORA": "18:50:00",
            "NUMERO": 15
           },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 5",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "19:00:00",
            "NUMERO": "-"
           },
        
       ]



const participantes2 = [
    {
        "NOMBRE": "Santiago Lamata Otín",
        "TITULO": "Collapse transition in contagion dynamics subject to detection with limited resources",
        "SLOT": 6,
        "NOMBRE_SLOT": "Epidemics",
        "HORA": "15:30:00",
        "NUMERO": 16
       },
       {
        "NOMBRE": "Àlex Giménez Romero",
        "TITULO": "Vector-borne diseases with non-stationary vector populations: the case of growing and decaying populations",
        "SLOT": 6,
        "NOMBRE_SLOT": "Epidemics",
        "HORA": "15:40:00",
        "NUMERO": 17
       },
       {
        "NOMBRE": "Javier Aguilar Sánchez",
        "TITULO": "Endemic infectious states below the epidemic threshold and beyond herd immunity",
        "SLOT": 6,
        "NOMBRE_SLOT": "Epidemics",
        "HORA": "15:50:00",
        "NUMERO": 18
       },
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 6",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "16:00:00",
           "NUMERO": "-"
          },
          {
            "NOMBRE": "Mar Cuevas Blanco",
            "TITULO": "The architecture of multifunctional ecological networks",
            "SLOT": 7,
            "NOMBRE_SLOT": "complex networks",
            "HORA": "16:10:00",
            "NUMERO":19
           },
           {
            "NOMBRE": "Gonzalo Contreras Aso",
            "TITULO": "The transition to synchronization of networked systems",
            "SLOT": 7,
            "NOMBRE_SLOT": "complex networks",
            "HORA": "16:20:00",
            "NUMERO": 20
           },
           {
            "NOMBRE": "Beatriz Arregui García",
            "TITULO": "Disentangling epidemics: a multiplex structure perspective",
            "SLOT": 7,
            "NOMBRE_SLOT": "complex networks",
            "HORA": "16:30:00",
            "NUMERO": 21
           },
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 7",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "16:40:00",
           "NUMERO": "-"
          },
       {
        "NOMBRE": "Miguel Camarillo Sánchez ",
        "TITULO": "Study of the effect of crystal lattice mismatch on heterogeneous ice nucleation",
        "SLOT": 8,
        "NOMBRE_SLOT": "molecular physics",
        "HORA": "16:50:00",
        "NUMERO": 22
       },
       {
        "NOMBRE": "Roger Bellido Peralta",
        "TITULO": "Water methanol mixture confined in a graphene slit pore",
        "SLOT": 8,
        "NOMBRE_SLOT": "molecular physics",
        "HORA": "17:00:00",
        "NUMERO": 23
       },
       {
        "NOMBRE": "Alejandro Sáinz Agost",
        "TITULO": "End pulled polymer translocation under time dependent driving",
        "SLOT": 8,
        "NOMBRE_SLOT": "molecular physics",
        "HORA": "17:10:00",
        "NUMERO": 24
       },
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 8",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "17:20:00",
           "NUMERO": "-"
          },
          {
           "NOMBRE": " ",
           "TITULO": "Descanso",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "17:30:00",
           "NUMERO": "-"
          },
       {
        "NOMBRE": "Samuel Blázquez Fernández",
        "TITULO": "Three phase equilibria of the methane hydrate in NaCl solutions: a simulation study",
        "SLOT": 9,
        "NOMBRE_SLOT": "phase transitions",
        "HORA": "17:50:00",
        "NUMERO": 25
       },
       {
        "NOMBRE": "Miguel Aguilar Janita",
        "TITULO": "Numerical evidence for a phase transition in the six dimensional Ising spin glass on a field",
        "SLOT": 9,
        "NOMBRE_SLOT": "phase transitions",
        "HORA": "18:00:00",
        "NUMERO": 26
       },
       {
        "NOMBRE": "Ylann ROUZAIRE",
        "TITULO": "Active defects unbind and superdiffuse",
        "SLOT": 9,
        "NOMBRE_SLOT": "phase transitions",
        "HORA": "18:10:00",
        "NUMERO": 27
       },
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 9",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "18:20:00",
           "NUMERO": "-"
          },
        
          {
            "NOMBRE": "Gregorio García Valladares",
            "TITULO": "Stochastic resetting with refractory period through the lens of pathway formulation",
            "SLOT": 10,
            "NOMBRE_SLOT": "Miscelánea",
            "HORA": "18:30:00",
            "NUMERO": 28
           },
           {
            "NOMBRE": "Juan Ignacio De Gregorio",
            "TITULO": "Entropy estimation for Markovian sequences",
            "SLOT": 10,
            "NOMBRE_SLOT": "Information theory",
            "HORA": "18:40",
            "NUMERO": 29
           },
           {
            "NOMBRE": "Irene Ferri Condeminas",
            "TITULO": "Three-State Opinion Model with Mobile Agents",
            "SLOT": 10,
            "NOMBRE_SLOT": "Information theory",
            "HORA": "18:50",
            "NUMERO": 30
           },
       
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 10",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "19:00:00",
           "NUMERO": "-"
          },
]