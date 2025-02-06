import { GetServerSideProps } from 'next';

interface BrandPageProps {
  brandname: string;
  motorcycles: string[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { brandname } = context.params!;
  // Fetch data for the brand
  const res = await fetch(`https://api.example.com/brands/${brandname}`);
  const data = await res.json();

  return {
    props: {
      brandname,
      motorcycles: data.motorcycles,
    },
  };
};

export default function BrandPage({ brandname, motorcycles }: BrandPageProps) {
  return (
    <div>
      <h1>{brandname}</h1>
      <ul>
        {motorcycles.map((model) => (
          <li key={model}>{model}</li>
        ))}
      </ul>
    </div>
  );
}
