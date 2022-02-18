const Button = ({ type, text }) => {
  return (
    <button type={type} style={{ fontWeight: 1000, fontSize: 20 }}>
      {text}
    </button>
  );
};

export default Button;
