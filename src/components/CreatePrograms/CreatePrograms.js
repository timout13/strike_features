import { useEffect } from "react";
import { ProgramsForm } from "./ProgramsForm";

export const CreatePrograms = (props) => {
  const { program, setProgram } = props.program;
  const { id, setId } = props.idProgram;
  const { setIsDisplayed } = props.isDisplayed;

  useEffect(() => {
    console.log("createProgram : " + id);
  }, [id]);

  return (
    <>
      <h2>Creation of your program :</h2>
      <ProgramsForm
        idProgram={{ id, setId }}
        program={{ program, setProgram }}
        isDisplayed={{ setIsDisplayed }}
      />
    </>
  );
};
