import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import NotFound from "./Component/Shared/NotFound";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Login from "./Component/SignIn/Login";
import RequireAuth from "./Component/Shared/RequireAuth";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* <Route index element={<MyProfile />} />
          <Route path="myOrder" element={<MyOrders />} />
          <Route path="addReview" element={<MyReview />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="manageProducts" element={<ManageProducts />} /> */}
          {/* <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          /> */}
          {/* <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          /> */}
          {/* <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
