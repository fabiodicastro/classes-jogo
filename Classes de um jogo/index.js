// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para atacar
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
  const heroi2 = new Heroi("Gandalf", 200, "mago");
  const heroi3 = new Heroi("Samsara", 200, "monge");
  const heroi4 = new Heroi("Hanzo", 200, "ninja");
  
  heroi1.atacar(); // Saída esperada: O guerreiro Aragorn atacou usando espada
  heroi2.atacar(); // Saída esperada: O mago Gandalf atacou usando magia
  heroi3.atacar(); // Saída esperada: O monge Samsara atacou usando artes marciais
  heroi4.atacar(); // Saída esperada: O ninja Hanzo atacou usando shuriken
  
