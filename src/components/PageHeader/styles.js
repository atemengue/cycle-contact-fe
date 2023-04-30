import styled from 'styled-components';

export const Container = styled.header`

  margin-bottom: 24px;
  
  a{
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
    img {
      margin-right: 8pxl
      transform: rotate(-90deg);
    }

  }
  h1 {
    font-size: 24px;
    
  }
`;

export const Header = styled.div``;
