import { CreatePrograms } from "../components/CreatePrograms/CreatePrograms";
import { useState, useEffect } from "react";
import { DisplayPrograms } from "../components/DisplayPrograms/DisplayPrograms";
import { Button } from "../components/Btn/Button";

export const Programs = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [id, setId] = useState(null);
  const [program, setProgram] = useState([
    {
      programName: "yup.string().required()",
      taskName: "yup.string().required()",
      taskDescription: "yup.string()",
      taskTimer: 1,
    },
  ]);

  const exempleProgram = {
    name: "Jambe",
    day: "Mardi / Jeudi",
    breakTime: "30s entre chaque série",
    repSeries: 3,
    Serie: {
      exo1: {
        exo1Name: "Squat",
        rep: 20,
      },
      exo2: {
        exo2Name: "Burpees",
        rep: 10,
      },
      exo3: {
        exo3Name: "Pompe",
        rep: 20,
      },
      exo4: {
        exo4Name: "Squat Sautés",
        rep: 15,
      },
    },
  };



  return (
    <>
      <div>
        <Button onClick={() => setIsDisplayed(true)} float={true}>
          Add programs
        </Button>
        <DisplayPrograms
          program={{ program, setProgram }}
          setProgramId={{ setId }}
          setIsDisplayed={{ setIsDisplayed }}
          ex={exempleProgram}
        />
      </div>
      <div>
        {isDisplayed && (
          <CreatePrograms
            idProgram={{ id, setId }}
            program={{ program, setProgram }}
            isDisplayed={{ setIsDisplayed }}
          />
        )}
      </div>
    </>
  );
};
