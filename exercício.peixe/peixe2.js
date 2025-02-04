var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 585,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinhoL

var tubarao




function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carregar logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregar peixe
    this.load.image('peixinhoL', 'assets/peixes/peixinho_laranja.png');

    //carregar coral
    this.load.image('coral', 'assets/coral.png');

    this.load.image('tubarao', 'assets/peixes/tubarao.png');
}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(100, 505, 'coral').setScale(0.2);

    //adicionar logo na tela        Redimensiona um objeto, multiplica seu tamanho original por um fator.
    this.add.image(400, 525, 'logo').setScale(0.6);

    //adicionar peixe                    controla a inversão (espelhamento)
   peixinhoL = this.add.image(400, 300, 'peixinhoL').setScale(0.4);

   //transformando a variável   controla a inversão (espelhamento)
   peixinhoL.setFlip(true, false);

   
    //adicionar peixe                    controla a inversão (espelhamento)
    tubarao = this.add.image(400, 300, 'tubarao').setScale(0.8);

    //transformando a variável   controla a inversão (espelhamento)
    tubarao.setFlip(true, false);
}

function update() {

    // Obtendo a posição atual do mouse
    let mouseX = this.input.x;
    let mouseY = this.input.y;

    // Calculando a diferença de posição entre o peixe e o mouse
    let deltaX = mouseX - peixinhoL.x;
    let deltaY = mouseY - peixinhoL.y;

    // Calculando a distância entre o peixe e o mouse
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Definir uma distância mínima para o peixe não ficar colado no cursor
    let minDistance = 30;

    // Verifica se precisa mover e rotacionar o peixe
    if (distance > minDistance) {
        // Calculando o ângulo para rotacionar o peixe
        let angle = Math.atan2(deltaY, deltaX);
        
        // Atualizando a rotação do peixe suavemente
        peixinhoL.setRotation(angle);

        // Interpolação linear para mover o peixe suavemente na direção do mouse
        let moveSpeed = 0.12; // Ajuste para regular a velocidade
        peixinhoL.x = Phaser.Math.Linear(peixinhoL.x, mouseX, moveSpeed);
        peixinhoL.y = Phaser.Math.Linear(peixinhoL.y, mouseY, moveSpeed);
    }

    // Calculando a diferença de posição entre o peixe e o mouse
    let distanciaPX = mouseX - tubarao.x;
    let distanciaPY = mouseY - tubarao.y;

    // Calculando a distância entre o peixe e o mouse
    let distancia = Math.sqrt(distanciaPX * distanciaPX + distanciaPY * distanciaPY);
    
    // Definir uma distância mínima para o peixe não ficar colado no cursor
    let minDistancia = 150;

    // Verifica se precisa mover e rotacionar o peixe
    if (distancia > minDistancia) {
        // Calculando o ângulo para rotacionar o peixe
        let angulo = Math.atan2(distanciaPY, distanciaPX);
        
        // Atualizando a rotação do peixe suavemente
        tubarao.setRotation(angulo);

        // Interpolação linear para mover o peixe suavemente na direção do mouse
        let velocidade = 0.04; // Ajuste para regular a velocidade
        tubarao.x = Phaser.Math.Linear(tubarao.x, peixinhoL.x, velocidade);
        tubarao.y = Phaser.Math.Linear(tubarao.y, peixinhoL.y, velocidade);
    }
}
