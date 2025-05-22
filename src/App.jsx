import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyles";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import WelcomePage from "./pages/WelcomePage";
import SavedAds from "./pages/SavedAds";
import MyAds from "./pages/MyAds";
import NewAd from "./pages/NewAd";
import Notifications from "./pages/Notifications";
import Ads from "./pages/Ads";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserProtectedRoot from "./ui/UserProtectedRoot";
import { Toaster } from "react-hot-toast";
import AdminProtectedRoot from "./ui/AdminProtectedRoot";
import PageNotFound from "./ui/PageNotFound";
import AdsDetails from "./pages/AdsDetails";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<Login />}>
            <Route path="login" element={<Login />} />
            <Route path="sign" element={<Login />} />
          </Route>

          <Route
            path="/app"
            element={
              <UserProtectedRoot>
                <AppLayout />
              </UserProtectedRoot>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<WelcomePage />} />
            <Route path="saved-ads" element={<SavedAds />}>
              <Route path="ad-details" element={<AdsDetails />} />
              <Route path="ad-details/:id" element={<AdsDetails />} />
            </Route>
            <Route path="my-ads" element={<MyAds />} />
            <Route path="new-ad" element={<NewAd />} />
            <Route path="notfications" element={<Notifications />} />
            <Route path="ads" element={<Ads />} />
            {/* <Route path="ad-details" element={<AdsDetails />} />
            <Route path="ad-details/:id" element={<AdsDetails />} /> */}
          </Route>

          <Route
            path="/admin"
            element={
              <AdminProtectedRoot>
                <AppLayout />
              </AdminProtectedRoot>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<WelcomePage />} />
            <Route path="saved-ads" element={<SavedAds />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontSize: "1.6rem",
            },
          }}
        />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
