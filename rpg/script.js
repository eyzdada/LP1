persPrincipal = ""
sorteDado = 0
 
const consequenciasCaverna = [
    'Você passou entrou na caverna sem nenhum problema!',
    'Você encontrou um monstro de dificuldade média e deve enfrentá-lo.',    
    'Você encontrou um monstro terrível! Você terá que lutar com ele.'
]
 
function iniciar(){
    personagem = prompt(`Seja bem-vindo! Escolha uma das opções:
        1 - Sortear seu Personagem
        2 - Sair do Jogo`)
 
    switch(personagem){
        case "1":
            persPrincipal = sortearPers()
            alert(`O personagem sorteado foi ${persPrincipal}`)
            if(persPrincipal === "Guerreiro")
                iniciarJornadaGuerreiro()
            else if(persPrincipal === "Mago")
                iniciarJornadaMago()
            else
                iniciarJornadaArqueiro()
        break
        case "2":
            alert("Espero te ver novamente!")
        break
        default:
            alert("Digite uma opção válida!")
    }
}
 
function rolarDado() {
    return Math.ceil(Math.random() * 20);
}
 
 
function sortearPers() {
    const personagens = ["Guerreiro", "Mago", "Arqueiro"];
 
    const sorteado = Math.floor(Math.random() * personagens.length);
    return personagens[sorteado];
  }
 
 
function iniciarJornadaArqueiro(){
    const opcao = prompt(`Você está em frente uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou para outro lado`)
    if(opcao == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 15 && sorteioDado <= 20) {
                alert ( `${consequenciasCaverna[2]}`)
                lutaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                lutaFacil()
            }
            else {alert ( `${consequenciasCaverna[0]}`)
                caverna()
            }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Você foi para o outro lado e após andar muito acabou em um local sem saida e cansado, infelizmente seu jogo terminou.`)
        return
    }
}
 
function iniciarJornadaGuerreiro(){
    const opcao = prompt(`Você está em frente uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou para outro lado`)
    if(opcao == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 15 && sorteioDado <= 20) {
                alert ( `${consequenciasCaverna[2]}`)
                lutaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                lutaFacil()
            }
            else {alert ( `${consequenciasCaverna[0]}`)
                caverna()
            }
        }
        else{
            alert(`Se não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Você foi para o outro lado e após andar muito acabou em um local sem saida e cansado, infelizmente seu jogo terminou.`)
        return
    }
}
 
function iniciarJornadaMago(){
    const opcao = prompt(`Você está em frente uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou para outro lado`)
    if(opcao == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 15 && sorteioDado <= 20) {
                alert ( `${consequenciasCaverna[2]}`)
                lutaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                lutaFacil()
            }
            else {alert ( `${consequenciasCaverna[0]}`)
                caverna()
            }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Você foi para o outro lado e após andar muito acabou em um local sem saida e cansado, infelizmente seu jogo terminou.`)
        return
    }
}
 
function lutaFacil(){
   
    lifePers = 10
    lifeInim = 5
 
    while (lifePers >0 && lifeInim >0){
        alert(`Sua vida é ${lifePers} e a vida do inimigo é ${lifeInim}. Role os dados!`)
        numSorteadoPers = rolarDado()
        alert(`Você tirou ${numSorteadoPers}! Agora é a vez do inimigo!`)
        numeroSorteadoInimigo = rolarDado()
        if(numSorteadoPers > numeroSorteadoInimigo){
            lifeInim -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${lifeInim}`)
        }
        else if(numSorteadoPers < numeroSorteadoInimigo){
            lifePers -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${lifePers}`)
        }
        else{
            alert("Empate! Nada acontece.")
        }
    }
    if(lifePers <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Parabéns agora você pode prosseguir na caverna")
        caverna()
    }
}
 
    function lutaMedia(){
       
        lifePers = 10
        lifeInim = 7
 
        alert(`Sua vida é ${lifePers} e a vida do inimigo é ${lifeInim}`)
 
        while (lifePers >0 && lifeInim >0){
            alert(`Sua vida é ${lifePers} e a vida do inimigo é ${lifeInim}. Role os dados!`)
            numSorteadoPers = rolarDado()
            alert(`Você tirou ${numSorteadoPers}! Agora é a vez do inimigo!`)
            numeroSorteadoInimigo = rolarDado()
            if(numSorteadoPers > numeroSorteadoInimigo){
                lifeInim -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${lifeInim}`)
            }
            else if(numSorteadoPers < numeroSorteadoInimigo){
                lifePers -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${lifePers}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(lifePers <= 0){
            alert("Você perdeu! O jogo acabou.")
        }
        else{
            alert("Você venceu! Parabéns agora você pode prosseguir na caverna")
            caverna()
        }
}
 
 
const consequenciasTesouro = [
    'Você encontrou um chefe relativamente mediano e deve enfrentá-lo.',    
    'Você encontrou um chefe terrível! Você terá que lutar com ele.'
]
 
 
function caverna(){
    const opcao = prompt(`Você está quase em frente ao tesouro. O que você faz?
        1 - Tento chegar perto e abri-lo
        2 - Desisto e saio`)
    if(opcao == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Prepare-se!")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 13 && sorteioDado <= 20) {
                alert ( `${consequenciasTesouro[0]}`)
                lutaChefeMedia()
            }
            else if (sorteioDado >=0 && sorteioDado <=12 ){
                alert ( `${consequenciasTesouro[1]}`)
                lutaChefeFacil()
            }
 
        }
        else{
            alert(`Você desistiu no agora?! Ok, espero te ver novamente.`)
            return
        }
    }
    else{
        alert(`Você voltou na caverna, mas acabou pisando em falso e acionando uma armadilha que não tinha visto.\nSeu jogo infelizmente acabou.`)
        return
    }
}
 
function lutaChefeFacil(){
 
    lifePers = 29
    lifeChefe = 30
 
    alert(`Sua vida é ${lifePers} e a vida do Chefe é ${lifeChefe}`)
 
    while (lifePers >0 && lifeChefe >0){
        alert(`Sua vida é ${lifePers} e a vida do Chefe é ${lifeChefe}. Role os dados!`)
        numSorteadoPers = rolarDado()
        alert(`Você tirou ${numSorteadoPers}! Agora é a vez do Chefe!`)
        numSorteadoChefe = rolarDado()
        if(numSorteadoPers > numSorteadoChefe){
            lifeChefe -= 4
            alert(`O Chefe tirou ${numSorteadoChefe}. Você acertou o Chefe! Agora é vida dele é ${lifeChefe}`)
        }
        else if(numSorteadoPers < numSorteadoChefe){
            lifePers -= 5
            alert(`O Chefe tirou ${numSorteadoChefe} e acertou você! Agora sua vida é ${lifePers}`)
        }
        else{
            alert("Empate! Nada aconteceu.")
        }
    }
    if(lifePers <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu o Chefe! Parabéns o tesouro é seu!")
        tesouro()
    }
}
 
function lutaChefeMedia(){
 
    lifePers = 29
    lifeChefe = 35
 
    alert(`Sua vida é ${lifePers} e a vida do Chefe é ${lifeChefe}`)
 
    while (lifePers >0 && lifeChefe >0){
        alert(`Sua vida é ${lifePers} e a vida do Chefe é ${lifeChefe}. Role os dados!`)
        numSorteadoPers = rolarDado()
        alert(`Você tirou ${numSorteadoPers}! Agora é a vez do Chefe!`)
        numSorteadoChefe = rolarDado()
        if(numSorteadoPers > numSorteadoChefe){
            lifeChefe -= 3
            alert(`O Chefe tirou ${numSorteadoChefe}. Você acertou o Chefe! Agora é vida dele é ${lifeChefe}`)
        }
        else if(numSorteadoPers < numSorteadoChefe){
            lifePers -= 5
            alert(`O Chefe tirou ${numSorteadoChefe} e acertou você! Agora sua vida é ${lifePers}`)
        }
        else{
            alert("Empate! Nada aconteceu.")
        }
    }
    if(lifePers <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu o Chefe! Parabéns o tesouro é seu!")
        tesouro()
    }
}
 
function tesouro(){
    alert("Você tenta abrir o tesouro, não consegue e desiste.")
    alert("Brincadeira! Haha!")
    alert("Você vasculhou o chefe e encontrou a Chave do Tesouro!")
    alert("Após abrir o tesouro você encontra uma jóia raríssima, porém...")
    alert("CUIDADO!!!")
    fuga()
}    
   
const consequenciasFuga = [
    'Você escorregou e infelizmente não sobreviveu \n Fim de Jogo.',    
    'Você escapou! Essa foi por pouco!'
]
 
function fuga(){
    const opcao = prompt(`Um deslizamento de pedras começa. O que você faz?
        1 - Corre!
        2 - Corre!`)
    if(opcao == "1" && opcao == "2"){
        const rolarDados = confirm("Tente sua sorte para escapar! Prepare-se!")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 3) {
                alert ( `${consequenciasTesouro[0]}`)
               
            }
            else {
                alert ( `${consequenciasTesouro[1]}`)
                fim()
            }
 
        }
        else{
            alert(`Você desistiu no final do jogo?! Ok, espero te ver novamente.`)
            return
        }
    }
   
}
 
function fim(){
    alert(`Você conseguiu recuperar a Jóia de Kenjisham, uma jóia raríssima!\nParabéns pelo seu esforço ${personagem}`)
    nome = prompt('Aliás, qual é o nome do Grande Herói?')
    alert(`Parabéns ${nome} você foi um grande ${personagem} \nAgradeço por ter jogado!! \nEspero que tenha se divertido!`)
}