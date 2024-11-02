import { useUser } from "@clerk/clerk-react"
import { Navigate, Outlet } from "react-router-dom"
import Header from "./components/header/Header";


function App() {

  // importing clerx hook for user and singin
  const {user,isLoaded,isSignedIn} =useUser();
  if(!isSignedIn){
    // inside navigate to add your route for signpage
    return  <Navigate to="/auth/signpage" />;
  }

  return (
   <>
   <Header/>
  <Outlet></Outlet>
   </>
  )
}

export default App
