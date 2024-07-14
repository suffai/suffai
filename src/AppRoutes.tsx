import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PartnerWithUs from "./pages/PartnerWithUs";
import PlaceOrder from "./pages/PlaceOrder";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ExploreStores from "./components/ExploreStores";
import PrepareBasket from "./components/PrepareBasket";
import SetupProfile from "./pages/SetupProfile";
import SelectStore from "./pages/SelectStore";
import StorePage from "./pages/stores/StorePage";
import CartPage from "./pages/cart/CartPage";
import ReviewPage from "./pages/reviews/ReviewPage";
import PaymentPage from "./pages/payment/PaymentPage";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import UserSettings from "./pages/user/UserSettings";
import UserEditProfile from "./pages/user/UserEditProfile";
import UserSavedAddress from "./pages/user/UserSavedAddress";
import UserUpdateAddress from "./pages/user/UserUpdateAddress";
import UserInvoices from "./pages/user/UserInvoices";
import HelpPage from "./pages/HelpPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./admin/dashboard/dashboard";
import LoginPage from "./admin/login/page";
import UsersPage from "./admin/dashboard/users/page";
import AddUserPage from "./admin/dashboard/users/add/page";
import SingleUserPage from "./admin/dashboard/users/[id]/page";
import ServicesPage from "./admin/dashboard/services/page";
import AddServicePage from "./admin/dashboard/services/add/page";
import SingleServicePage from "./admin/dashboard/services/[id]/page";
import OrdersPage from "./admin/dashboard/orders/page";
import AddOrderPage from "./admin/dashboard/orders/add/page";
import SingleOrderPage from "./admin/dashboard/orders/[id]/page";
import TransactionPage from "./admin/dashboard/transactions/page";
import SingleTransactionPage from "./admin/dashboard/transactions/[id]/page";
import RidersPage from "./admin/dashboard/riders/page";
import AddRiderPage from "./admin/dashboard/riders/add/page";
import SingleRiderPage from "./admin/dashboard/riders/[id]/page";
import ShopsPage from "./admin/dashboard/shops/page";
import AddShopPage from "./admin/dashboard/shops/add/page";
import SingleShopPage from "./admin/dashboard/shops/[id]/page";
import Help from "./admin/dashboard/help/page";
import Setting from "./admin/dashboard/settings/page";
import Revenue from "./admin/dashboard/revenue/page";
import Reports from "./admin/dashboard/reports/page";
import CustomersPage from "./admin/dashboard/customers/page";
import AddCustomerPage from "./admin/dashboard/customers/add/page";
import SingleCustomerPage from "./admin/dashboard/customers/[id]/page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/placeorder/explore-stores"
        element={
          <Layout>
            <PlaceOrder>
              <ExploreStores />
            </PlaceOrder>
          </Layout>
        }
      />
      <Route
        path="/placeorder/prepare-basket"
        element={
          <Layout>
            <PlaceOrder>
              <PrepareBasket />
            </PlaceOrder>
          </Layout>
        }
      />
      <Route
        path="/partner"
        element={
          <Layout>
            <PartnerWithUs />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/select-store"
        element={
          <Layout>
            <SelectStore />
          </Layout>
        }
      />
      <Route
        path="/store-page"
        element={
          <Layout>
            <StorePage />
          </Layout>
        }
      />
      <Route
        path="/review-page"
        element={
          <Layout>
            <ReviewPage />
          </Layout>
        }
      />
      <Route
        path="/help-center"
        element={
          <Layout>
            <HelpPage />
          </Layout>
        }
      />
      <Route
        path="/privacy"
        element={
          <Layout>
            <Privacy />
          </Layout>
        }
      />
      <Route
        path="/terms"
        element={
          <Layout>
            <Terms />
          </Layout>
        }
      />
      <Route
        path="/setup-profile"
        element={
          <ProtectedRoute>
            <Layout>
              <SetupProfile />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart-page"
        element={
          <ProtectedRoute>
            <Layout>
              <CartPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment-page"
        element={
          <ProtectedRoute>
            <Layout>
              <PaymentPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment-success"
        element={
          <ProtectedRoute>
            <Layout>
              <PaymentSuccess />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-settings"
        element={
          <ProtectedRoute>
            <Layout>
              <UserSettings />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-edit-profile"
        element={
          <ProtectedRoute>
            <Layout>
              <UserEditProfile />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-saved-address"
        element={
          <ProtectedRoute>
            <Layout>
              <UserSavedAddress />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-update-address"
        element={
          <ProtectedRoute>
            <Layout>
              <UserUpdateAddress />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-invoice"
        element={
          <ProtectedRoute>
            <Layout>
              <UserInvoices />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin/dashboard/users" element={<UsersPage />} />
      <Route path="/admin/dashboard/users/add" element={<AddUserPage />} />
      <Route path="/admin/dashboard/users/:id" element={<SingleUserPage />} />
      <Route path="/admin/dashboard/services" element={<ServicesPage />} />
      <Route
        path="/admin/dashboard/services/add"
        element={<AddServicePage />}
      />
      <Route
        path="/admin/dashboard/services/:id"
        element={<SingleServicePage />}
      />
      <Route path="/admin/dashboard/orders" element={<OrdersPage />} />
      <Route path="/admin/dashboard/orders/add" element={<AddOrderPage />} />
      <Route path="/admin/dashboard/orders/:id" element={<SingleOrderPage />} />
      <Route
        path="/admin/dashboard/transactions"
        element={<TransactionPage />}
      />
      <Route
        path="/admin/dashboard/transactions/:id"
        element={<SingleTransactionPage />}
      />
      <Route path="/admin/dashboard/riders" element={<RidersPage />} />
      <Route path="/admin/dashboard/riders/add" element={<AddRiderPage />} />
      <Route path="/admin/dashboard/riders/:id" element={<SingleRiderPage />} />
      <Route path="/admin/dashboard/shops" element={<ShopsPage />} />
      <Route path="/admin/dashboard/shops/add" element={<AddShopPage />} />
      <Route path="/admin/dashboard/shops/:id" element={<SingleShopPage />} />
      <Route path="/admin/dashboard/revenue" element={<Revenue />} />
      <Route path="/admin/dashboard/reports" element={<Reports />} />
      <Route path="/admin/dashboard/customers" element={<CustomersPage />} />
      <Route path="/admin/dashboard/customers/add" element={<AddCustomerPage />} />
      <Route
        path="/admin/dashboard/customers/:id"
        element={<SingleCustomerPage />}
      />
      <Route path="/admin/dashboard/settings" element={<Setting />} />
      <Route path="/admin/dashboard/help" element={<Help />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
