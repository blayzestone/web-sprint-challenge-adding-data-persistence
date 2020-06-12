exports.up = function (knex) {
  return knex.schema.createTable("project", (tbl) => {
    tbl.increments();

    tbl.string("name", 128).notNullable();
    tbl.string("desc");

    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project");
};
