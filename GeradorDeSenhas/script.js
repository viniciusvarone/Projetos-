//seleção de elementos do html
const gerarSenha = document.querySelector('#gerador-de-senha')
const senhaGerada = document.querySelector('#senha-gerada')


//funções 
const getLetterLower = function(){
    return(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    //método floor() arredonda o número para baixo.
}

const getLetterUpperCase = function(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = function(){
    return(Math.floor(Math.random() * 10)).toString();
}

const getSymbol = function(){
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
    //irá retornar um índice aleatório da lista de símbolos
};


const generatePassword = function(getLetterLower, getLetterUpperCase, getNumber, getSymbol){

    let password = ""

    const passwordLength = 10

    const generators = [getLetterLower, getLetterUpperCase, getNumber, getSymbol]

    for(i = 0; i < passwordLength; i = i + 4){
        generators.forEach(function(){

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        })
    }
    
    password = password.slice(0, passwordLength)

    senhaGerada.style.display = "block"
    senhaGerada.querySelector("h4").innerHTML = password;   
}


//eventos
gerarSenha.addEventListener('click', function(){
    generatePassword(
        getLetterLower,
        getLetterUpperCase,
        getNumber,
        getSymbol
      )
})
