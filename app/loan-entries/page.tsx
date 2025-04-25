
export default function LoanEntries() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Loan Records</h1>
        <div className="w-full max-w-md space-y-4 m-15">
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="font-bold text-lg">
              Loan for air ticket
            </p>
            <p>
              <strong>Type:</strong> Loan
            </p>
            <p>
              <strong>Other Person: </strong> ABC
            </p>
            <p>
              <strong>Amount: </strong> $500
            </p>
            <p>
              <strong>Date: </strong> 24-04-2025
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="font-bold text-lg">
              Loan for laptop
            </p>
            <p>
              <strong>Type:</strong> Loan
            </p>
            <p>
              <strong>Other Person: </strong> XYZ
            </p>
            <p>
              <strong>Amount: </strong> $600
            </p>
            <p>
              <strong>Date: </strong> 14-02-2024
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="font-bold text-lg">
              Loan for rent payment
            </p>
            <p>
              <strong>Type:</strong> Loan
            </p>
            <p>
              <strong>Other Person: </strong> LMN
            </p>
            <p>
              <strong>Amount: </strong> $700
            </p>
            <p>
              <strong>Date: </strong> 10-04-2023
            </p>
          </div>
        </div>
      </div>
  );
}
