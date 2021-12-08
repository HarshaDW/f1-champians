describe("Land and Test on home page", () => {
  beforeEach(() => {
    cy.visit("/", { timeout: 30000 });
  });

  it("Click on select dropdown and change year", () => {
    cy.intercept("GET", "http://ergast.com/api/f1/20*", {
      statusCode: 201,
      body: {
        MRData: {
          StandingsTable: {
            StandingsLists: [
              {
                season: 2013,
                DriverStandings: [
                  {
                    wins: 10000,
                    points: 133,
                    Driver: {
                      givenName: "test",
                      familyName: "test2",
                      nationality: "testna",
                    },
                    Constructors: [
                      {
                        name: "test",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    });
    cy.getBySel("select-box").select("2011-2015");
    cy.getBySel("Season-2013").click();
    cy.getBySel("session-modal").should("be.visible");
  });
});
