const Helpers = require("../support/helpers");

describe("Los estudiantes under monkeys", function () {
  it("visits los estudiantes and monkeys perform random link clicks", function () {
    cy.visit("https://losestudiantes.com/uniandes");
    cy.wait(1000);
    randomClick(10);
  });

  it("visits los estudiantes and monkeys perform random events", function () {
    cy.visit("https://losestudiantes.com/uniandes");
    cy.wait(1000);
    randomEvent(10);
  });
});

function randomClick(monkeysRounds) {
  let monkeysLeft = monkeysRounds;
  if (monkeysLeft > 0) {
    cy.get("a").then(($links) => {
      const randomLink = $links.get(Helpers.getRandomInt(0, $links.length));
      if (!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({ force: true });
        monkeysLeft = monkeysLeft - 1;
      }
      cy.wait(1000);
      randomClick(monkeysLeft);
    });
  }
}

function randomEvent(monkeysRounds) {
  const events = [
    {
      name: "link click",
      elements: ["a"],
      action: (el) => cy.wrap(el).click({ force: true }),
    },
    {
      name: "input fill",
      elements: [
        'input[type="text"]',
        'input[type="number"]',
        'input[type="password"]',
        'input[type="date"]',
        'input[type="time"]',
        'input[type="textarea"]',
      ],
      action: (el) => {
        const wrapped = cy.wrap(el);

        switch (wrapped.type) {
          case "time":
            wrapped.type(Helpers.getRandomTimeString(), { force: true });
            break;
          case "date":
            wrapped.type(Helpers.getRandomDateString(), { force: true });
            break;
          case "number":
            wrapped.type(Helpers.getRandomNumber(), { force: true });
            break;
          default:
            wrapped.type(Helpers.getRandomString(), { force: true });
            break;
        }
      },
    },
    {
      name: "button click",
      elements: ["button", 'input[type="submit"]'],
      action: (el) => cy.wrap(el).click({ force: true }),
    },
    {
      name: "checkbox click",
      elements: ['input[type="checkbox"]', 'input[type="radio"]'],
      action: (el) => cy.wrap(el).check({ force: true }),
    },
  ];

  let monkeysLeft = monkeysRounds;
  if (monkeysLeft > 0) {
    const event = events[Helpers.getRandomInt(0, events.length)];

    cy.log(`Executting random ${event.name} event`);

    const elementsFound = Cypress.$(event.elements.join(",")).length;

    if (!elementsFound) {
      cy.log(`Not ${event.name} elements found yet. Moving on.`);

      cy.wait(1000);
      return randomEvent(monkeysLeft);
    }

    cy.get(event.elements.join(","))
      .then(($els) => {

        const randomEl = $els.get(Helpers.getRandomInt(0, $els.length));

        if (!Cypress.dom.isHidden(randomEl)) {
          event.action(randomEl);
          monkeysLeft = monkeysLeft - 1;
          cy.log(`Monkeys rounds left: ${monkeysLeft}`);
        }

        cy.wait(1000);
        randomEvent(monkeysLeft);
      });
  }
}
