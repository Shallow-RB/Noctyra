// interface BrandPageProps {
//   params: { brandname: string };
// }

// async function fetchBrandData(brandname: string) {
//   const res = await fetch(`https://api.example.com/brands/${brandname}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch brand data');
//   }
//   return res.json();
// }

// export default async function BrandPage({ params }: BrandPageProps) {
//   const { brandname } = params;
//   const data = await fetchBrandData(brandname);

//   return (
//     <div>
//       <h1>{brandname}</h1>
//       <ul>
//         {data.motorcycles.map((model: string) => (
//           <li key={model}>{model}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
