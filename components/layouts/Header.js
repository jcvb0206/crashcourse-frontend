import styled from 'styled-components';
import StyledButton from '../UI/Button';
import Logo from '../UI/Logo';

const HeaderTemplate = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

export default function Header() {
  return (
    <HeaderTemplate>
      <Logo></Logo>
      <StyledButton ghost>Regístrate gratis</StyledButton>
    </HeaderTemplate>
  );
}
