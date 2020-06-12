exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "project-01",
          desc: "lorem ipsum...",
        },
      ]);
    });
};
