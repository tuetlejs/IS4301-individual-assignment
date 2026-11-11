import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "../firebase";

function Login() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(location.state?.message || "");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const signingUp = event.nativeEvent.submitter?.value === "signup";
    setMessage("");
    setPending(true);

    try {
      if (signingUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Account created. You are signed in.");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Signed in successfully.");
      }
      setPassword("");
    } catch (error) {
      setMessage(
        signingUp
          ? "Unable to create an account. Check your details or try signing in."
          : "Unable to sign in. Check your email and password, or sign up if you do not have an account."
      );
    } finally {
      setPending(false);
    }
  }

  async function handleGoogleLogin() {
    setMessage("");
    setPending(true);

    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      setMessage("Signed in successfully.");
      setPassword("");
    } catch (error) {
      setMessage("Unable to sign in with Google. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={pending}>
          <legend>Email and password</legend>
          <p>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </p>
          <button type="submit" value="login">Sign in</button>
          <button type="submit" value="signup">Sign up</button>
        </fieldset>
      </form>
      <button type="button" onClick={handleGoogleLogin} disabled={pending}>
        Sign in with Google
      </button>
      <p role="status">{pending ? "Please wait..." : message}</p>
    </section>
  );
}

export default Login;
