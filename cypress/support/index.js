afterEach(function () {
  if (this.currentTest.state === 'failed') {
    const testTitle = this.currentTest.title;

    cy.task('createJiraIssue', {
      summary: `Test Failed: ${testTitle}`,
      description: `Test failed with error: ${this.testTitle} \ncheck the logs for more details.`,
      screenshotPath: `${Cypress.config('screenshotsFolder')}/${
        Cypress.spec.name
      }/${this.currentTest.title}.png`,
    });
  }
});
