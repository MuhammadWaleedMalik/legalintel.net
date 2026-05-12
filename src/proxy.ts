import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/services/:path*",
    "/profile/:path*",
    "/pro/:path*",
  ],
};
