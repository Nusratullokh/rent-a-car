import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-[420px] w-full  p-10">
                <Outlet />

            </div>
        </div>
    );
};

export default Auth;
