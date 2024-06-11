import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/style.css";
import Root from "./pages/Root.jsx";

import MonthFlavor from "./menu/MonthFlavour.jsx";
import IceCream from "./menu/IceCream.jsx";
import Prepack from "./menu/Prepack.jsx";
import IceCreamCake from "./menu/IceCreamCake.jsx";
import IceCreamDetail from "./menu/IceCreamDetail.jsx";
import PrepackDetail from "./menu/PrepackDetail.jsx";
import IceCreamCakeDetail from "./menu/IceCreamCakeDetail.jsx";

import Main from "./pages/Main.jsx";
import Event from "./pages/Event.jsx";
import EventPromotion from "./pages/EventPromotion.jsx";
import EventBenefit from "./pages/EventBenefit.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import BRRecipe from "./pages/BRRecipe.jsx";
import BRRecipeDetail from "./pages/BRRecipeDetail.jsx";
import Flavor from "./pages/Flavor.jsx";
import Flow from "./pages/Flow.jsx";
import CScenter from "./pages/CScenter.jsx";
import FaQ from "./pages/FaQ.jsx";
import Notice from "./pages/Notice.jsx";
import NoticeDetail from "./pages/NoticeDetail.jsx";

import Bebetter from "./pages/Bebetter.jsx";
import History from "./pages/History.jsx";
import Story from "./pages/Story.jsx";
import Ccm from "./pages/Ccm.jsx";
import Praise from "./pages/Praise.jsx";
import PolicyReward from "./pages/PolicyReward.jsx";
import Policy from "./pages/Policy.jsx";
import PolicyCctv from "./pages/PolicyCctv.jsx";
import Safety from "./pages/Safety.jsx";

import DeliveryOrder from "./pages/DeliveryOrder.jsx";
import GroupOrder from "./pages/GroupOrder.jsx";
import GroupOrderForm from "./pages/GroupOrderForm.jsx";
import Login from "./pages/Login.jsx";
import MyCart from "./pages/MyCart.jsx";
import NewStore from "./pages/NewStore.jsx";
import OpenStore from "./pages/OpenStore.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Main /> },

        { path: "/menu", element: <IceCream /> },
        { path: "/menu/monthflavor", element: <MonthFlavor /> },
        { path: "/menu/icecream", element: <IceCream /> },
        { path: "/menu/prepack", element: <Prepack /> },
        { path: "/menu/icecreamcake", element: <IceCreamCake /> },

        { path: "/menu/icecreamdetail/:id", element: <IceCreamDetail /> },

        { path: "/menu/prepackdetail/:id", element: <PrepackDetail /> },

        {
          path: "/menu/icecreamcakedetail/:id",
          element: <IceCreamCakeDetail />,
        },

        { path: "/play", element: <Event /> },
        { path: "/play/event", element: <Event /> },
        { path: "/play/event/detail/:id", element: <EventDetail /> },

        { path: "/play/event/promotion", element: <EventPromotion /> },

        { path: "/play/event/benefit", element: <EventBenefit /> },
        { path: "/play/brrecipe", element: <BRRecipe /> },
        { path: "/cscenter/notice/detail/:id", element: <NoticeDetail /> },
        { path: "/play/brrecipe/detail/:id", element: <BRRecipeDetail /> },

        { path: "/story", element: <Story /> },
        { path: "/story/story", element: <Story /> },
        { path: "/story/history", element: <History /> },
        { path: "/story/bebetter", element: <Bebetter /> },

        { path: "/store", element: <Flavor /> },
        { path: "/store/flavor", element: <Flavor /> },
        { path: "/store/flow", element: <Flow /> },
        { path: "/store/openstore", element: <OpenStore /> },
        { path: "/store/newstore", element: <NewStore /> },
        { path: "/store/delivery", element: <DeliveryOrder /> },
        { path: "/store/catering", element: <GroupOrder /> },

        { path: "/store/catering-order", element: <GroupOrderForm /> },

        { path: "/cscenter", element: <CScenter /> },
        { path: "/cscenter/faq", element: <FaQ /> },
        { path: "/cscenter/ccm", element: <Ccm /> },
        { path: "/cscenter/praise", element: <Praise /> },
        { path: "/cscenter/notice", element: <Notice /> },

        { path: "/cscenter/policy-reward", element: <PolicyReward /> },
        ,
        { path: "/cscenter/policy", element: <Policy /> },
        { path: "/cscenter/policy-cctv", element: <PolicyCctv /> },
        { path: "/cscenter/safety-management", element: <Safety /> },

        { path: "/carts", element: <MyCart /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
