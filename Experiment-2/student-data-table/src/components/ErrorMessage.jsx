const ErrorMessage = ({ error }) => {
  return (
    <div className="state-box error-box">
      <p>❌ {error}</p>
    </div>
  );
};

export default ErrorMessage;