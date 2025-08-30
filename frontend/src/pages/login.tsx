import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", { email, password });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
        onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
