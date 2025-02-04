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
import AllApisPage from "./Pages/AllApisPage";
import InvoicesPage from "./Pages/InvoicesPage";
import ProjectSettingsPage from "./Pages/ProjectSettingsPage";
import PrivacyPolicy from "./Pages/PrivacyPolicyPage";
import RefundPolicy from "./Pages/RefundPolicyPage";
import TermsAndConditions from "./Pages/TermsConditionsPage";
import ErrorPage from "./Pages/ErrorPage";
import PageNotFoundPage from "./Pages/PageNotFoundPage";
import NotAuthenticatedPage from "./Pages/NotAuthenticatedPage";
import ProtectedRoute from "./ProtectedRoutes";
import WorkInProgress from "./Pages/WorkInProgressPage";
import BetaRoute from "./BetaRoutes";
import SuggestionsPage from "./Pages/SuggestionsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route errorElement={<ErrorPage />}>
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/about' element={<AboutUsPage />} />
      <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/docs' element={<DocsPage />} />
      <Route path='/privacy' element={<PrivacyPolicy />} />
      <Route path='/refunds' element={<RefundPolicy />} />
      <Route path='/terms' element={<TermsAndConditions />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/authfailed' element={<NotAuthenticatedPage />} />
      <Route path='/error' element={<ErrorPage />} />
      <Route path='/404' element={<PageNotFoundPage />} />
      <Route path='/wip' element={<WorkInProgress />} />
      <Route element={<BetaRoute />}>
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/invoices' element={<InvoicesPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/createproject' element={<CreateProjectPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/playground' element={<PlayGroundPage />} />
        <Route path='/apis' element={<AllApisPage />} />
        <Route path='/projectsettings' element={<ProjectSettingsPage />} />
        <Route path='/suggest' element={<SuggestionsPage />} />
        <Route path='*' element={<PageNotFoundPage />} />
      </Route>
    </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
