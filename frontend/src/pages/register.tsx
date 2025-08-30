import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Register:", { username, email, password });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </div>
  );
}
