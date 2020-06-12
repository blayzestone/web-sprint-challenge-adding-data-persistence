exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("task")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        {
          project_id: 1,
          desc: "FOOBAR",
          notes: "Priority task.",
        },
      ]);
    });
};
