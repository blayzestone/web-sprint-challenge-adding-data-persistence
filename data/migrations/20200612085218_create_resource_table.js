exports.up = function (knex) {
  return knex.schema.createTable("resource", (tbl) => {
    tbl.increments();

    tbl.string("name", 128).notNullable().unique();
    tbl.string("desc");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resource");
};
