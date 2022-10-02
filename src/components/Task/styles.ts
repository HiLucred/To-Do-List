import styled from "styled-components";

import { FaPlusCircle } from "react-icons/fa";

export const TaskContainer = styled.div`
  max-width: 46rem;
  height: 4.6rem;

  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 0.75rem;

  border-radius: 0.5rem;
  border: 1px solid var(--gray-400);

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--gray-500);
`;

export const TaskInput = styled.input`
  opacity: 0;
  visibility: hidden;

  &:checked + label::before {
    background: var(--purple-dark);
    background-image: url("src/assets/Vector.svg");
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid var(--purple-dark);
  }
`;

export const TaskDescriptionContainer = styled.label`
  flex: 1;
  position: relative;

  &:before {
    content: "";
    width: 1rem;
    height: 1rem;

    border: 2px solid var(--blue);
    border-radius: 1rem;
    cursor: pointer;

    position: absolute;
    top: 30%;
    left: -2.5%;

    background: transparent;
  }
`;

export const TaskDescription = styled.p`
  padding: 1rem;
  font-size: 0.875rem;
`;

export const TasksDescriptionCompleted = styled.p`
  padding: 1rem;
  font-size: 0.875rem;

  color: var(--gray-300);

  text-decoration: line-through;
`;

export const TaskDeleteButton = styled.button`
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;

  color: var(--gray-400);
  background: transparent;

  svg {
    color: var(--gray-300);
  }

  svg:hover {
    color: var(--danger);
  }
`;

export const TaskEmptyBox = styled.div`
  max-width: 19rem;
  padding-top: 4rem;
  text-align: center;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  color: var(--gray-300);
  transition: all 0.3s;

  svg {
    color: var(--gray-300);
  }

  p > span {
    font-weight: bold;
  }
`;
