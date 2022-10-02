import rocketLogo from "../../assets/rocket.svg";
import { useContext } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { NewTaskFormData, TaskContext } from "../../pages/Home";
import { useFormContext } from "react-hook-form";
import {
  FormButton,
  FormContainer,
  FormInput,
  HeaderContainer,
  Logo,
  Title,
} from "./styles";

export function Header() {
  const { register, handleSubmit, watch } = useFormContext();
  const { handleAddTask } = useContext(TaskContext);
  const canSubmit = watch("task");
  
  return (
    <HeaderContainer>
      <Logo>
        <img src={rocketLogo} alt="Logo com a imagem de um foguete." />
        <Title>
          to<span>do</span>
        </Title>
      </Logo>

    

      <FormContainer onSubmit={handleSubmit(handleAddTask)}>
        <FormInput
          type="search"
          id="task"
          max={220}
          placeholder="Adicione uma nova tarefa"
          {...register("task")}
        />

        <FormButton type="submit" disabled={!canSubmit}>
          Criar
          <FaPlusCircle size={15} />
        </FormButton>
      </FormContainer>
    </HeaderContainer>
  );
}
