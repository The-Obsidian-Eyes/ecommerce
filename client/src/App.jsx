import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "./components/ui/auth/layout.jsx";
import AuthLogin from "./pages/auth/login.jsx";
import AuthRegister from "./pages/auth/register.jsx";
import AdminLayout from "./components/admin-view/layout.jsx";
import AdminDashboard from "./pages/admin-view/dashboard.jsx";
import AdminFeatures from "./pages/admin-view/features.jsx";
import AdminOrders from "./pages/admin-view/orders.jsx";
import AdminProducts from "./pages/admin-view/products.jsx";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";

function App() {
  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header</h1>
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />

        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthPage />} />
      </Routes>
    </div>
  );
}

export default App;
