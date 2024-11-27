const Button = ({ className, style, loading, handleClick, text }) => {
  return (
    <button
      className={`btn  ${className}`}
      style={style}
      onClick={handleClick}
      disabled={loading}
    >
      {loading && (
        <span
          className="spinner-border spinner-border-sm mx-2"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      {text}
    </button>
  );
};

export default Button;
