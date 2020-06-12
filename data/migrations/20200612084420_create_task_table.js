exports.up = function (knex) {
  return knex.schema.createTable("task", (tbl) => {
    tbl.increments();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("project.id")
      .onDelete("CASCADE");

    tbl.string("desc").notNullable();
    tbl.string("notes", 255);

    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("task");
};
