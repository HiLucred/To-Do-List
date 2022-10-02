import styled from "styled-components";

export const TaskInfoContainer = styled.div`
  max-width: 46rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  margin-bottom: 1.5rem;

  color: var(--blue);
`;

export const TasksCreated = styled.div`
  display: flex;
  gap: 1rem;

  h2 {
    font-size: 0.875rem;
    font-weight: bold;
  }
`;

export const TasksCompleted = styled.div`
  display: flex;
  gap: 1rem;

  color: var(--purple-dark);

  h2 {
    font-size: 0.875rem;
    font-weight: bold;
  }
`;

export const Count = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;

  border-radius: 1rem;

  font-size: 0.75rem;
  font-weight: bold;

  color: var(--gray-100);
  background: var(--gray-400);
`;
