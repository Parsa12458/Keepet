import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PetsPage from "./pages/PetsPage";
import RequestsPage from "./pages/RequestsPage";
import PageNotFound from "./ui/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={true}
        containerClassName="mt-2"
        toastOptions={{
          className:
            "!pr-4 !max-w-full dark:!bg-chocolateBrown dark:!text-background",
        }}
      />
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} index />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<AppLayout />}>
            <Route path="/pets" element={<PetsPage />} />
            <Route path="/requests" element={<RequestsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
