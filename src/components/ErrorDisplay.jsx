function ErrorDisplay({ ErrorMsg }) {
  return (
    <div className="bg-red-100 text-red-600 p-4 rounded-lg shadow-lg my-4 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-lg">{ErrorMsg}</h1>
    </div>
  );
}

export default ErrorDisplay;
