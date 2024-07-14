import styled from 'styled-components';
import { Product } from '../service/productsApi';
import { useCartContext } from '../context/CartContext';

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
  const { RemoveFromCart, AddToCart, items } = useCartContext();
  return (
    <Card>
      <h2>{title}</h2>
      <img src={image} />
      <p>{description}</p>
      <h3>{price}</h3>

      {/* <span>{rating?.rate}</span> */}

      <span>{category}</span>
      <div>
        {!items.find((item) => item.id === id) ? (
          <button onClick={() => AddToCart(props.product)}>Add to Cart</button>
        ) : (
          <button onClick={() => RemoveFromCart(id)}>Remove from Cart</button>
        )}
      </div>
    </Card>
  );
};
