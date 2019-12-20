
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'colby', password: "abc123" },
        { username: 'aj', password: "abc123" },
        { username: 'julie', password: "abc123" },
        { username: 'hannah', password: "abc123" },
        { username: 'kristi', password: "abc123" },
        { username: 'michael', password: "abc123" },
        { username: 'rodrigo', password: "abc123" },
        { username: 'scott', password: "abc123" }
      ]);
    });
};
