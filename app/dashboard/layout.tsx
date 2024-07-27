import Navbar from "@/components/Navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-screen relative">
            <div className="w-72 flex-none border-r-2 border-gray-200 rounded-r-xl">
                <Navbar />
            </div>
            <div className=" flex-grow m-5">{children}</div>
        </main>
    );
};

export default DashboardLayout;
