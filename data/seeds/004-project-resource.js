exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project-resource")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("project-resource").insert([
        {
          project_id: 1,
          resource_id: 2,
        },
      ]);
    });
};
