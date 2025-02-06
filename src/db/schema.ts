// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  integer,
  pgTable,
  pgTableCreator,
  real,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `noctyra_${name}`);

export const motorcycles = pgTable("motorcycles", {
  id: serial("id").primaryKey(),
  brandName: varchar("brand_name", { length: 50 }).notNull(),   
  modelName: varchar("model_name", { length: 100 }).notNull(),
  description: text("description").notNull().default(""),
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
  videoUrl: text("video_url").notNull().default(""),
  preloadImgUrl: text("preload_img_url").notNull().default(""),
  imageUrl: text("image_url").notNull().default(""),
  imageUrl2: text("image_url2").default(""),
  imageUrl3: text("image_url3").default(""),
  imageUrl4: text("image_url4").default(""),
  imageUrl5: text("image_url5").default(""),
  imageUrl6: text("image_url6").default(""),
  imageUrl7: text("image_url7").default(""),
  imageUrl8: text("image_url8").default(""),
  imageUrl9: text("image_url9").default(""),
});
