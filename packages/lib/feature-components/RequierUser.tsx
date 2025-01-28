// import { useAuthStore, useFetchUser } from "@tx/data-access";
// import { Navigate, Outlet, useLocation } from "react-router-dom";

// export const RequireUser = () => {
//   const location = useLocation();
//   const auth = useAuthStore();
//   const { data: user } = useFetchUser();

//   if (auth.authStatus === "LOADING" || !!auth?.token) {
//     return <Outlet />;
//   }

//   return auth.authStatus === "DONE" && !!user ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" replace state={{ from: location }} />
//   );
// };

// export default RequireUser;

export {};
