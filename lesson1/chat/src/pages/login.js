import { useState } from "react";
import { firebaseApp } from "../api/firebase";

const onSignIn = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        placeholder="email"
        onChange={handleChangeForm}
        data-name="email"
      />
      <input
        placeholder="password"
        onChange={handleChangeForm}
        data-name="password"
      />
      <button
        onClick={() => {
          onSignIn(form.email, form.password);
        }}
      >
        Login
      </button>
    </div>
  );
}
