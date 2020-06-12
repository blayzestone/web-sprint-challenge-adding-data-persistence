exports.up = function (knex) {
  return knex.schema.createTable("project-resource", (tbl) => {
    tbl.increments();

    tbl.integer("project_id").unsigned().notNullable().references("project.id");
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("resource.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project-resource");
};
