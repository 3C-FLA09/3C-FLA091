// ação, aventura, comédia, fantasia, documentário 


// Era do gelo, LIVRE
// Macha e o Urso, LIVRE
// predadores do mundo animal, 10 documentário 
// jurassic world, 10 aventura
// kung fu panda, 10 aventura, ação
// flash, 12 ação
// transformers a era da extinção, 12 aventura, ação
// as branquelas, 12 comédia
// o pequenino, 12 comédia
// agente stone, 14 ação
// one piece,14 ação, aventura
// motoqueiro fantasma, 14 fantasia

let campoIdade;
let campoFantasia;
let campoAção;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("sua idade");
  campoIdade = createInput(5);
  campoFantasia = createCheckbox("gostaDeFantasia");
  campoAção = createCheckbox("gostaDeAção?")
}

function draw() {
  background("#FFC107");
  let idade= campoIdade.value();
  let gostaDeFantasia= campoFantasia.checked();
  let gostaDeAção = campoAção.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  fill(color(25,0,800));
  textAlign(CENTER, CENTER);
  textSize(38);
  text (recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAção) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "Agente stone";
      } else {
        if(idade >= 12) {
        if( gostaDeFantasia || gostaDeAção) {
          return "As branquelas"
        } else 
          return "Flash"; 
        } else {
      if (gostaDeFantasia) {
      return "Kung fu panda";
   } else {
    return "Predadores do mundo animal";
    }
    }      
 }      
  } else {
    if(gostaDeFantasia) {
      return "Era do gelo";
    } else {
      return "Macha e o Urso";
    }
    
  }
}