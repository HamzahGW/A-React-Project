// import { Navigate, Outlet, useLocation } from "react-router";
// import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// export const ProtectedRoute = ({
//   allowedRoles,
// }: {
//   allowedRoles: EUserRole[];
// }) => {
//   let location = useLocation();
//   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
//   const { data, isLoading, isFetched, isError } = useFetchUser();

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   if (!isAuthenticated && isFetched) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   if (isError) {
//     return <div />;
//   }

//   const userHasRequiredRole = handleIsAllowed(data?.userRoles, allowedRoles);

//   if (isAuthenticated && !userHasRequiredRole) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   return <Outlet />;
// };

// const handleIsAllowed = (
//   userRoles: EUserRole[],
//   allowed: EUserRole[],
// ): boolean => {
//   return (
//     userRoles?.some((r) => allowed.indexOf(r) >= 0) ||
//     userRoles[0] == EUserRole.ADMIN_SUPER
//   );
// };

export {};
