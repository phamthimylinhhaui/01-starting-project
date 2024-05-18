export default function NewsDetailPage({ params }) {
  const newId = params.slug
  return (
    <>
      <h1>this is news page detail</h1>
      <h2>slug { newId }</h2>
    </>
  );
}