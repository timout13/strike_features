export const Button = ({ onClick, children, float }) => {
  return (
    <button
      onClick={onClick}
      className={
        float
          ? 'border px-2 bg-blue-100 float-right'
          : 'border px-2 bg-blue-100'
      }
    >
      {children}
    </button>
  );
};
