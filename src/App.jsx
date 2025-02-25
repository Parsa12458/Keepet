import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import FullSpinner from "./ui/FullSpinner";

const SignupPage = lazy(() => import("./pages/SignupPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const PetsPage = lazy(() => import("./pages/PetsPage"));
const RequestsPage = lazy(() => import("./pages/RequestsPage"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));

export const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-center"
          reverseOrder={true}
          containerClassName="mt-2 !fixed"
          toastOptions={{
            className:
              "!pr-4 !max-w-full dark:!bg-chocolateBrown dark:!text-background",
          }}
        />
        <DarkModeProvider>
          <Suspense fallback={<FullSpinner />}>
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
          </Suspense>
        </DarkModeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
