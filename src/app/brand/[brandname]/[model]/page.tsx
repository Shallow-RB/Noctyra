// interface ModelPageProps {
//     params: { brandname: string; motorcycleModel: string };
//   }
  
//   async function fetchMotorcycleData(brandname: string, motorcycleModel: string) {
//     const res = await fetch(`https://api.example.com/brands/${brandname}/${motorcycleModel}`);
//     if (!res.ok) {
//       throw new Error('Failed to fetch motorcycle data');
//     }
//     return res.json() as Promise<{
//       description: string;
//       [key: string]: unknown;
//     }>;
//   }
  
//   export default async function ModelPage({ params }: ModelPageProps) {
//     const { brandname, motorcycleModel } = params;
//     const data = await fetchMotorcycleData(brandname, motorcycleModel);
  
//     return (
//       <div>
//         <h1>{brandname} - {motorcycleModel}</h1>
//         <p>{data.description}</p>
//         {/* Render more details as needed */}
//       </div>
//     );
//   } 