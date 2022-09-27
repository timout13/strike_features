import { ProgramsForm } from "./ProgramsForm";

export const CreatePrograms = (props) => {
  const { program, setProgram } = props.program;
  const { setIsDisplayed } = props.isDisplayed;


  return (
    <>
      <h2>Creation of your program :</h2>
      <ProgramsForm
        program={{ program, setProgram }}
        isDisplayed={{setIsDisplayed}}
      />
    </>
  );
};
