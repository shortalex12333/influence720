// Site-wide HTTP Basic Auth gate. Credentials come only from the Vercel
// environment variables SITE_AUTH_USER / SITE_AUTH_PASS -- never hardcoded
// here, so nothing secret ever lands in git history.
export const config = {
  matcher: "/((?!_vercel).*)",
};

export default function middleware(request) {
  const user = process.env.SITE_AUTH_USER;
  const pass = process.env.SITE_AUTH_PASS;

  const authHeader = request.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Basic ")) {
    const decoded = atob(authHeader.slice(6));
    const sep = decoded.indexOf(":");
    const suppliedUser = decoded.slice(0, sep);
    const suppliedPass = decoded.slice(sep + 1);
    if (suppliedUser === user && suppliedPass === pass) {
      return;
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Influence 720"' },
  });
}
