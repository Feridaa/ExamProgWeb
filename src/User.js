import { montab } from "./app";

export class User {
  constructor(tab) {
    this.element = this.generateUser;
    this.name = tab.name;
    this.age = tab.age;
    this.email = tab.email;
    this.present = false;
  }
  // génerer un élément utilisateur

  generateUser = () => {
    const userElement = document.createElement("div");
    userElement.classList.add("user");

    const html = `<img src="https://randomuser.me/api/portraits/women/37.jpg">
  <div class="user--info">
          <h1>Miss Mareike Bottenberg</h1>
          <p></p>
          <p>Baak, Netherlands</p>
  </div>`;

    userElement.insertAdjacentHTML("afterbegin", html);
    console.log(this.generateUser);

    return this.element();
  };
}

render = (tab) => {
  const montabUser = document.querySelector("main");

  const html = `<img src="https://randomuser.me/api/portraits/women/37.jpg">
    <div class="user--info">
            <h1>${tab.gender} Mareike Bottenberg</h1>
            <p></p>
            <p>Baak, Netherlands</p>
    </div>`;

  montabUser.insertAdjacentHTML("afterbegin", html);
};
