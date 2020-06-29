
function board(){
    document.getElementById("prancha1").innerHTML = "Fun board 6.8";
    document.getElementById("prancha2").innerHTML = "Fun board 6.8";
    document.getElementById("prancha3").innerHTML = "Fun board 6.8";
};

function redirect(){
    window.open("https://www.lostsurfboards.com.br/?gclid=CjwKCAjw8pH3BRAXEiwA1pvMscGQz2NS30DUQLWf0VCSxSVZoaxTagqoTQeGOO1qmV5Y1lz0uinnXBoCm9YQAvD_BwE");
    
    //window.location.href= "https://www.lostsurfboards.com.br/?gclid=CjwKCAjw8pH3BRAXEiwA1pvMscGQz2NS30DUQLWf0VCSxSVZoaxTagqoTQeGOO1qmV5Y1lz0uinnXBoCm9YQAvD_BwE"
}

function swap(element){
    //document.getElementById("prancha").innerHTML = "Long board 7.5";
element.innerHTML = "Long board 7.5";
}

function swapb(element){
    //document.getElementById("prancha").innerHTML = "Fun board 6.8";
element.innerHTML = "Fun boar 6.8";
}

function warning(){
    alert("Bem vindo ao surftopia");
}

function troca(Element){
    alert("Voce mudou de prancha");
}
/*
function boardcheck(board){
    var check;
    if (board == "long"){
        check= true
    }else{
        check= false
    }
return check;
}


var board = prompt("DIgite aqui sua prancha");
console.log(boardcheck(board));
/*


/*
var prancha= prompt("Digite o codigo da sua prancha");
 while(prancha.length != 6){
        alert("Porfavor isira um codigo valido");
        prancha= prompt("Digite o codigo da sua prancha");
    }
if (prancha == "FSW001"){
    alert("Sua Fun board 6.8 esta pronta para coleta");

    }else{
        alert("Estamos trabalhando com sua prancha");
};
*/




//var pranchas = [{Shape:"Fun", Rabeta:"Round"}, {Shape:"Fun", Rabeta:"Swallow"}, {Shape:"Long", Rabeta:"Round"}, {Shape:"Long", Rabeta:"Square"}, {Shape:"Performance", Rabeta:"Pin"}, {Shape:"Performance", Rabeta:"Squash"}]
//console.log(pranchas);
//alert(pranchas[4].Shape);



//var prancha = ["Fun", "Long", "Performance", "Soft"];
//prancha.push("Paddle");
//prancha.pop();

//console.log(prancha);
//console.log(prancha.length);
//console.log(prancha.reverse());
//console.log(prancha.toString());
//console.log(prancha.join(" - "));
//console.log(prancha.toString()[0]);
//console.log(prancha[0]);


/* Primeira Aula
var prancha = "Fun board ";
var tamanho = 6.8;
alert("Sua prancha " + prancha + tamanho);
alert(prancha.replace("Fun", "Long"));
console.log(prancha);
console.log(tamanho);
*/