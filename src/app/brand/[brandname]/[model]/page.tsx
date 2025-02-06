import { type GetServerSideProps } from 'next';

interface ModelPageProps {
  brandname: string;
  model: string;
  details?: unknown;
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { brandname, model } = context.params!;
  // Fetch data for the specific motorcycle model
  const res = await fetch(`https://api.example.com/brands/${brandname}/models/${model}`);
  const data = await res.json();


  return {
    props: {
      brandname,
      model,
      details: data,
    },

  };
};

export default function ModelPage({ brandname, model, details }: ModelPageProps) {
  return (
    <div>

      <h1>{brandname} - {model}</h1>
      <p>{details.description}</p>
      {/* Render more details as needed */}
    </div>

  );
} 