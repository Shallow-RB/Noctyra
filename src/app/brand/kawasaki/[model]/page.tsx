import { db } from '~/db';
import { motorcycles } from '~/db/schema';
import { eq } from 'drizzle-orm';


export default async function KawasakiModel({ params }: { params: Promise<{ model: string }> }) {
  const formattedModel = (await params).model.split('-').join(' ');
  const model = formattedModel.toUpperCase();

  try {
    const result = await db
      .select()
      .from(motorcycles)
      .where(eq(motorcycles.modelName, model));

    const motorcycle = result.length > 0 ? result[0] : null;

    if (!motorcycle) {
      return <div>Motorcycle not found</div>;
    }

    return (
      <div>
        <h1>{motorcycle.modelName}</h1>
        <p>{motorcycle.description}</p>
        <p>Price: €{motorcycle.price}</p>
        {/* Add more details as needed */}
      </div>
    );
  } catch (error) {
    console.error('Error fetching motorcycle data:', error);
    return <div>Failed to load motorcycle data. Please try again later.</div>;
  }
}

