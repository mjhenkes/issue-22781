describe('My First Test', () => {
  let item = "Brian Le 19";
  beforeEach(( )=> {
    cy.visit('https://example.cypress.io/todo');
    cy.title().should('eq', 'Cypress.io: Kitchen Sink');
    cy.xpath('//a[text()="All"]').click().as("ClickAllTab")
  });

  it('Scenario 1', () => {
    //aliases
    cy.get('@ClickAllTab');
    cy.xpath('//input[@data-test="new-todo"]').type(item).type('{enter}');
    cy.xpath('//span[@class="todo-count"]').invoke('text').should('eq', '3 items left');
    cy.xpath('//input[@class="toggle" and @type="checkbox"]/following-sibling::label').should("contains.text", item);
    cy.xpath('//label[text()="'.concat(item).concat('"]//following-sibling::button')).invoke('show').click();
    cy.xpath('//span[@class="todo-count"]').invoke('text').should('eq', '2 items left');
  })

  it('Scenario 2', () => {
    //aliases
    cy.get('@ClickAllTab');
    cy.xpath('//input[@data-test="new-todo"]').type(item).type('{enter}');
    cy.xpath('//span[@class="todo-count"]').invoke('text').should('eq', '3 items left');
    cy.xpath('//label[text()="'.concat(item).concat('"]//following-sibling::button')).invoke('show').click();
    cy.xpath('//span[@class="todo-count"]').invoke('text').should('eq', '2 items left');
  })
})
