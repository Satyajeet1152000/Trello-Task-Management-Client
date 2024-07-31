import { logout } from "@/actions/logout";

export default async function LogoutPage() {
    // await logout();

    // Optionally render a message or nothing
    return <div className="text-2xl font-semibold">Logging out...</div>;
}
