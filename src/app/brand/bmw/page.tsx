import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
export default async function BMW() {
  const motorcyclesList = await db
    .select()
    .from(motorcycles)
    .where(eq(motorcycles.brandName, "BMW"));

  return (
    <div>
      {motorcyclesList.map((brand) => (
        <div key={brand.id} className="flex flex-col pb-8">
          <h2>{brand.brandName}</h2>
          <p>{brand.modelName}</p>
          <p>{brand.description}</p>
        </div>
      ))}
    </div>
  );
} 