import { CreatePrograms } from "../components/CreatePrograms/CreatePrograms";
import { useState } from "react";
import { AddPrograms } from "../components/CreatePrograms/AddPrograms";

export const Programs = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [program, setProgram] = useState([
    {
      programName: "yup.string().required()",
      taskName: "yup.string().required()",
      taskDescription: "yup.string()",
      taskTimer: 1,
    },
  ]);
  return (
    <>
      <div>
        <AddPrograms onClick={() => setIsDisplayed(true)} />
        {program.map((line, i) => (
          <p key={i}>{line.programName}</p>
        ))}
        {isDisplayed}
      </div>
      <div>
        {isDisplayed && (
          <CreatePrograms
            program={{ program, setProgram }}
            isDisplayed={{setIsDisplayed}}
          />
        )}
      </div>
    </>
  );
};
