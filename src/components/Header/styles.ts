import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 12.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: var(--gray-700);

  margin-bottom: 5rem;
`;

export const Logo = styled.div`
  width: 7.875rem;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--blue);

  span {
    color: var(--purple-dark);
  }
`;

export const FormContainer = styled.form`
  width: 46rem;
  height: 3.375rem;

  position: absolute;
  transform: translateY(200%);

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  border: none;
  border-radius: 0.5rem;
`;

export const FormButton = styled.button`
  width: 5.625rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 0.5rem;

  font-weight: bold;
  cursor: pointer;

  color: var(--gray-100);
  background: var(--blue-dark);

  &:disabled {
    opacity: 0.9;
  }
`;

export const FormInput = styled.input`
  padding-left: 1rem;
  padding-right: 1rem;

  border: none;
  border-radius: 0.5rem;

  flex: 1;

  color: var(--gray-300);
  background: var(--gray-500);
`;
