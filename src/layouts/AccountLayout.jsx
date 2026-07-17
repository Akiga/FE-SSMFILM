import { Outlet } from "react-router-dom";
import AccountSidebar from "../components/account/AccountSidebar";

export default function AccountLayout() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6 lg:flex-row">

                {/* Sidebar */}
                <aside className="lg:w-72">
                    <AccountSidebar />
                </aside>

                {/* Content */}
                <main className="flex-1">
                    <Outlet />
                </main>

            </div>
        </div>
    );
}