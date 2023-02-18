import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../util/auth";

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return null;

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
