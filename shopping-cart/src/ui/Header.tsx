import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: gray;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  margin: 0.5;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: white;
  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: black;
    }
  }
`;

function Header() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <span>Shopping Cart</span>
      <Link to="cart">Cart</Link>
    </Container>
  );
}

export default Header;
