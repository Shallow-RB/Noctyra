// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  integer,
  pgTable,
  pgTableCreator,
  real,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `noctyra_${name}`);

export const motorcycles = pgTable("motorcycles", {
  id: serial("id").primaryKey(),
  brandName: varchar("brand_name", { length: 50 }).notNull(),   
  modelName: varchar("model_name", { length: 100 }).notNull(),
  price: integer("price").notNull(),
  engineType: varchar("engine_type", { length: 100 }).notNull(),
  engineCapacity: integer("engine_capacity").notNull(),
  maxPower: varchar("max_power", { length: 50 }).notNull(),
  maxTorque: varchar("max_torque", { length: 50 }).notNull(),
  weight: real("weight").notNull(),
  fuelCapacity: real("fuel_capacity").notNull(),
  topSpeed: integer("top_speed").notNull(),
  availableColors: varchar("available_colors", { length: 255 }).notNull(),
  type: varchar("type", { length: 20 }).notNull(),
});
