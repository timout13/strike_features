import { CreatePrograms } from "../components/CreatePrograms/CreatePrograms";
import { useState, useEffect } from "react";
import { AddPrograms } from "../components/CreatePrograms/AddPrograms";

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

  return (
    <>
      <div>
        <AddPrograms onClick={() => setIsDisplayed(true)} />
        {program.map((line, i) => (
          <div key={"div" + i}>
            <p key={i}>{line.programName}</p>
            <button
              key={"e" + i}
              onClick={() => {
                setId(i);
                setIsDisplayed(true);
              }}
              className="border px-2 bg-blue-100"
            >
              Edit
            </button>
            <button
              key={"d" + i}
              onClick={() => {
                const deleteProg = program.filter((l) => l !== line);
                setProgram(deleteProg);
              }}
              className="border px-2 bg-blue-100"
            >
              Delete
            </button>
          </div>
        ))}

        {/* <button
          onClick={() => {
            console.log(program);
          }}
          className="border px-2 bg-blue-100"
        >
          log
        </button> */}
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
