export const DisplayPrograms = (props) => {
  const { program, setProgram } = props.program;
  const { setId } = props.setProgramId;
  const { setIsDisplayed } = props.setIsDisplayed;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Temps total</th>
            <th>Nb de Série</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {program.map((line, i) => (
            <tr key={"tr" + i}>
              <td>{line.programName}</td>
              <td>{line.programName}</td>
              <td>{line.programName}</td>
              <td>
                <button
                  key={"e" + i}
                  onClick={() => {
                    setId(i);
                    setIsDisplayed(true);
                  }}
                  className="border px-2 bg-blue-100 mx-2"
                >
                  Edit
                </button>
                <button
                  key={"d" + i}
                  onClick={() => {
                    const deleteProg = program.filter((l) => l !== line);
                    setProgram(deleteProg);
                  }}
                  className="border px-2 bg-blue-100 mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
