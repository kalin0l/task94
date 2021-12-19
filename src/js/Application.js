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

  addBananas(monkeys) {
    // monkeys.map((monkey,i) => {
    //   modifiedMonkeys = monkey[i] + this.emojis[i];
    //   console.log(modifiedMonkeys)
    // return modifiedMonkeys;

    // })
    
    const m1 = monkeys[0] + this.emojis[0]
    const m2 = monkeys[1] + this.emojis[1]
    const m3 = monkeys[2] + this.emojis[2]
    console.log(m1, m2, m3);
    const div = document.querySelector('.main');
    const emojis = document.querySelector('#emojis');
    const pTag = document.createElement("p");
    const pTag1 = document.createElement("p");
    const pTag2 = document.createElement("p");
    pTag.textContent = m1;
    pTag1.textContent = m2;
    pTag2.textContent = m3;
    div.removeChild(emojis);
    div.appendChild(pTag);
    div.appendChild(pTag1);
    div.appendChild(pTag2);

  }

}


// const newApp = new Application();
// newApp.setEmojis(["🐒", "🦍", "🦧"]);
// newApp.addBananas(["monke1", "monkey2", "monkey3"]);

