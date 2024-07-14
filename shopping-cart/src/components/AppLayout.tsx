import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem;
`;

function AppLayout() {
  return (
    <Wrapper>
      <Header />
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
}

export default AppLayout;
