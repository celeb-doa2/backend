
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        { id: 1, user_id: 1, friend_id: 2 },
        { id: 2, user_id: 1, friend_id: 3 },
        { id: 3, user_id: 1, friend_id: 4 },
        { id: 4, user_id: 2, friend_id: 3 },
        { id: 5, user_id: 2, friend_id: 4 },
        { id: 6, user_id: 2, friend_id: 5 },
        { id: 7, user_id: 2, friend_id: 2 },
        { id: 8, user_id: 4, friend_id: 8 },
        { id: 9, user_id: 5, friend_id: 6 },
        { id: 10, user_id: 5, friend_id: 7 },
        { id: 11, user_id: 6, friend_id: 1 }
      ]);
    });
};
