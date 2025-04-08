import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const AuthForm = () => {
  const [mode, setMode] = useState("login"); // or 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} with`, email, password);
    // handle navigation or API call
  };

  return (
    <div className="w-full max-w-md p-6 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400">
        {mode === "login" ? "Welcome!" : "Create an Account"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-500 bg-transparent" // Added bg-transparent here
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </button>
      </form>

      <div className="text-sm text-center text-blue-600 cursor-pointer" onClick={() => setMode(mode === "login" ? "signup" : "login")}>
        {mode === "login" ? "New here? Sign up" : "Already have an account? Login"}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
        <span className="text-sm text-gray-400">or</span>
        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
      </div>

      <button className="w-full flex items-center justify-center gap-3 bg-white dark:bg-white text-black border border-gray-300 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
        <span className="text-sm font-medium">Continue with Google</span>
      </button>
    </div>
  );
};

export default AuthForm;