import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  // Check if Clerk has finished loading the user data
  if (!isLoaded) {
    return <div>Loading...</div>; // Display a loader while checking auth status
  }

  // Redirect to sign-in page if the user is not signed in
  if (!isSignedIn) {
    return <Navigate to="/auth/signpage" />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
