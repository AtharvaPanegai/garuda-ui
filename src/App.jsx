/** @format */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./index.css";
// pages imports
import NotFoundPage from "./Pages/NotFoundPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import DashboardPage from "./Pages/DashboardPage";
import PricingPage from "./Pages/PricingPage";
import ContactUsPage from "./Pages/ContactPage";
import DocsPage from "./Pages/DocsPage";
import PlayGroundPage from "./Pages/PlayGroundPage";
import CreateProjectPage from "./Pages/CreateProjectPage";
import SettingsPage from "./Pages/SettingsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/about' element={<AboutUsPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/docs' element={<DocsPage />} />
      <Route path="/createproject" element={<CreateProjectPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/playground" element={<PlayGroundPage />} />
      <Route path='/' element={<HomePage />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
