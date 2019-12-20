
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        { id: 1, score: 5, userID: 1 },
        { id: 2, score: 10, userID: 1 },
        { id: 3, score: 15, userID: 1 },
        { id: 4, score: 20, userID: 1 },
        { id: 5, score: 25, userID: 1 },
        { id: 6, score: 26, userID: 2 },
        { id: 7, score: 40, userID: 2 },
        { id: 8, score: 36, userID: 2 },
        { id: 9, score: 18, userID: 2 },
        { id: 10, score: 15, userID: 2 },
        { id: 11, score: 1, userID: 2 },
        { id: 12, score: 2, userID: 2 },
        { id: 13, score: 36, userID: 2 },
        { id: 14, score: 70, userID: 2 },
        { id: 15, score: 58, userID: 3 },
        { id: 16, score: 65, userID: 3 },
        { id: 17, score: 45, userID: 3 },
        { id: 18, score: 60, userID: 3 },
        { id: 19, score: 47, userID: 4 },
        { id: 20, score: 49, userID: 4 },
        { id: 21, score: 50, userID: 5 },
        { id: 22, score: 65, userID: 5 },
        { id: 23, score: 70, userID: 5 },
        { id: 24, score: 15, userID: 6 },
        { id: 25, score: 23, userID: 6 },
        { id: 26, score: 21, userID: 6 },
        { id: 27, score: 60, userID: 1 }
      ]);
    });
};
