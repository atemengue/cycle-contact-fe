import styled from 'styled-components';

export default styled.button`
  // width: 100%;
  height: 52px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  padding: 0 16px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light}
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark}
  }

  &[disabled]{
    background #ccc;
    cursor: default;
    
  }

`;
