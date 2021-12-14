let carte = document.querySelector('.carte');
let containeurDesCartes = document.querySelector('.mes-cartes')
let button =  document.querySelector('.test-button')
let buttonAjouter = document.querySelector('.addBtn')
let formulaireDeTache = document.querySelector('.form-task')
let buttonSupprimer = document.querySelectorAll('.bouton-suppression')
let buttonFermetureFormulaire = document.querySelector('.btn-close')
let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM4OTc5MDUxLCJleHAiOjE5NTQ1NTUwNTF9.9zUm7vEolQ-I2qKcxN3NIz2I-o2iAiSoAZzwdy8fO5g"
let url = "https://pomvfsgmnducyfclngvq.supabase.co/rest/v1/tasks"

let taskModel = {
    title:"brief : algo",
    state:"en cours",
    description:"description de merde",
    deadline:"23/11/23 23:23",
    priority:"faible",
    ended:true
}

//ramata 
function ajouterTache(tache){
}

//rokhaya
function supprimerTache(id){}

// abdou karim
function modifierTache(id){}

//kebe
function afficherLesTaches(){}


function recupererLesChamps(){
    let title = document.querySelector('.input-title').value;
    let description = document.querySelector('.input-description').value;
    let deadline = document.querySelector('.input-deadline').value;
    let state = document.querySelector('.select-state').selectedOptions[0].value.toLowerCase()
    let priority = document.querySelector('.select-priority').selectedOptions[0].value.toLowerCase()
    return {
        title, description, deadline, 
        priority, state, ended:false
    };
}

formulaireDeTache.addEventListener('submit', (evenement)=>{
    evenement.preventDefault()
    // console.log(recupererLesChamps())
    buttonFermetureFormulaire.click();
})

/* retourne true si les champs requis sont saisi*/
function verifierLesChamps(saisi){
    return (
        saisi.title.length >= 3 &&
        saisi.description >= 3 &&
        deadline != null
    )
}