import styled from 'styled-components';
import { Product } from '../service/productsApi';

const Card = styled.div`
  background-color: gainsboro;
  padding: 1rem;
  border-radius: 0.2rem;
  & img {
    width: 10rem;
    height: 15rem;
  }
`;

type ProductItemProps = {
  product: Product;
};

export const ProductItem = (props: ProductItemProps) => {
  const { title, image, description, id, price, category } = props.product;
  return (
    <Card>
      <h2>{title}</h2>
      <img src={image} />
      <p>{description}</p>
      <h3>{price}</h3>

      {/* <span>{rating?.rate}</span> */}

      <span>{category}</span>
      <div>
        <button>Add to Cart</button>
      </div>
    </Card>
  );
};
