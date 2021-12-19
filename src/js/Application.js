import EventEmitter from "eventemitter3";
let m1;
let m2;
let m3;

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas(emojis) {
    // monkeys.map((monkey,i) => {
    //   modifiedMonkeys = monkey[i] + this.emojis[i];
    //   console.log(modifiedMonkeys)
    // return modifiedMonkeys;

    // })
    const monkeyWithBanana = emojis.map(monkey => {
      return monkey + this.banana;
    })
    
    console.log(monkeyWithBanana);
    
    const div = document.querySelector('.main');
    const emojis1 = document.querySelector('#emojis');
    div.removeChild(emojis1);

    monkeyWithBanana.forEach(el => {
      const p = document.createElement("p");
      p.textContent = `${el}`
      div.appendChild(p);
    })
    // const pTag = document.createElement("p");
    // const pTag1 = document.createElement("p");
    // const pTag2 = document.createElement("p");
    // pTag.textContent = m1;
    // pTag1.textContent = m2;
    // pTag2.textContent = m3;
    // div.appendChild(pTag);
    // div.appendChild(pTag1);
    // div.appendChild(pTag2);

  }

}


// const newApp = new Application();
// newApp.setEmojis(["🐒", "🦍", "🦧"]);
// newApp.addBananas(["monke1", "monkey2", "monkey3"]);

