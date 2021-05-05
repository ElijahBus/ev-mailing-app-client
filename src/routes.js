import Home from "./views/Home";
import Inbox from "./components/Inbox";
import Draft from "./components/Draft";
import SentMessages from "./components/SentMessages";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/inbox',
        component: Inbox,
    },
    {
        path: '/draft',
        component: Draft
    },
    {
        path: '/sent-messages',
        component: SentMessages
    }
]

export default routes;