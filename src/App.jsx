import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PetsPage from "./pages/PetsPage";
import RequestsPage from "./pages/RequestsPage";
import PageNotFound from "./ui/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";

export const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
            <Route
              path="/signup"
              element={
                <ProtectedRoute navigateUrl="/pets">
                  <SignupPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute navigateUrl="/pets">
                  <LoginPage />
                </ProtectedRoute>
              }
            />
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="pets" />} />
              <Route path="/pets" element={<PetsPage />} />
              <Route path="/requests" element={<RequestsPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </DarkModeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
