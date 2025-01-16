import AddPage from "../pages/Add";
import DetailPage from "../pages/Detail";
import Home from "../pages/home";
import NotFound from "../pages/not found";
import UserLayout from "../pages/UserLayout";
import Wishlist from "../pages/wishlist";

const ROUtes = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/favorites",
                element: <Wishlist />
            },
            {
                path: "/add",
                element: <AddPage />
            },
            {
                path: "/detail/:id",
                element: <DetailPage />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]

export default ROUtes
