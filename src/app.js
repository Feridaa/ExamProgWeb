"use strict";

import { User } from "./User.js";

export const tab = [];
export const mesUtilisateurs = () => {
  fetch(`https://randomuser.me/api/?results=20`)
    .then((resultat) => {
      if (resultat.status === 404) {
        throw new Error("Oups");
      }
      return resultat.json();
    })

    .then((data) => {
      console.log(data);

      data.results.forEach((element) => {
        tab.push(element);
      });

      data.results.forEach((element) => {
        render(element);
      });
    })

    .catch((err) => {
      console.log(err.message);
    });
};

mesUtilisateurs();
console.log(tab);

for (let i = 0; i <= 20; i++) {
  const user = new User(tab);
  console.log(user);
}
