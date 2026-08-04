const SubmittedData = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>Submitted Details</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Message:</strong> {data.message}</p>
    </div>
  );
};

export default SubmittedData;