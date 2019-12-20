
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'colby', password: "abc123" },
        { id: 2, username: 'aj', password: "abc123" },
        { id: 3, username: 'julie', password: "abc123" },
        { id: 4, username: 'hannah', password: "abc123" },
        { id: 5, username: 'kristi', password: "abc123" },
        { id: 6, username: 'michael', password: "abc123" },
        { id: 7, username: 'rodrigo', password: "abc123" },
        { id: 8, username: 'scott', password: "abc123" }
      ]);
    });
};
