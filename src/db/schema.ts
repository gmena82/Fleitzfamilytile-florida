import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email"),
  phone: text("phone"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
