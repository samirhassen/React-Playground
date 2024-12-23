import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider} from "react-router-dom";
import JobListing from "./components/jobListing";
import HomePage from "./components/HomePage.tsx";
//import {useState} from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<HomePage/>}>
        <Route path="/jobs" element={<JobListing/>} />
      </Route>
  )
);
const App = () => {
    //const [showMore, setShowMore] = useState(false);
    return <RouterProvider router={router} />
}

export default App