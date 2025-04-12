describe('user Api Test', () => {
  it('Get user list return', () => {
    cy.request('GET', 'http://localhost:3000/api/users');
    it('should return a 200 status code', (response) => {
      expect(response.status).to.eq(200);
    });

    it('POST create new user', () => {
      cy.request('POST', 'htt://localhost:3000/api/users', {
        id: 4,
        name: 'John Doe',
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id', 4);
        expect(response.body).to.have.property('name', 'John Doe');
      });
    });
  });
});
