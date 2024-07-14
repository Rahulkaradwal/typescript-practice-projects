import { useQuery } from '@tanstack/react-query';
import { getProducts, Product } from '../service/productsApi';
import { ProductItem } from '../components/Product';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

function Home() {
  const { data, isLoading } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading Products</p>;

  return (
    <Container>
      {data?.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default Home;
