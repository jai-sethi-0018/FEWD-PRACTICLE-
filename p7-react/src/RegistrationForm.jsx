import { useState } from "react";
import InputField from "./InputField";

function RegistrationForm({ heading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, password });
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: "480px" }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center text-primary mb-3">{heading}</h3>

        {/* Dynamic expression rendering while typing */}
        {name && (
          <div className="alert alert-info py-2 text-center">
            Hello, <strong>{name}</strong>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Submit
          </button>
        </form>

        {/* Conditional rendering after clicking Submit */}
        {submittedData && (
          <div className="alert alert-success mt-4 mb-0">
            <h6 className="fw-bold mb-2">Registration Successful!</h6>
            <p className="mb-1"><strong>Name:</strong> {submittedData.name}</p>
            <p className="mb-1"><strong>Email:</strong> {submittedData.email}</p>
            <p className="mb-0"><strong>Password:</strong> {"*".repeat(submittedData.password.length)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;