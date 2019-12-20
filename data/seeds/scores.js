
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        { score: 5, userID: 1 },
        { score: 10, userID: 1 },
        { score: 15, userID: 1 },
        { score: 20, userID: 1 },
        { score: 25, userID: 1 },
        { score: 26, userID: 2 },
        { score: 40, userID: 2 },
        { score: 36, userID: 2 },
        { score: 18, userID: 2 },
        { score: 15, userID: 2 },
        { score: 1, userID: 2 },
        { score: 2, userID: 2 },
        { score: 36, userID: 2 },
        { score: 70, userID: 2 },
        { score: 58, userID: 3 },
        { score: 65, userID: 3 },
        { score: 45, userID: 3 },
        { score: 60, userID: 3 },
        { score: 47, userID: 4 },
        { score: 49, userID: 4 },
        { score: 50, userID: 5 },
        { score: 65, userID: 5 },
        { score: 70, userID: 5 },
        { score: 15, userID: 6 },
        { score: 23, userID: 6 },
        { score: 21, userID: 6 },
        { score: 60, userID: 1 }
      ]);
    });
};
