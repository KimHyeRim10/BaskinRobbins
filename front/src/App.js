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

import Main from "./Main.jsx";
import Event from "./Event.jsx";
import EventPromotion from "./EventPromotion.jsx";
import EventBenefit from "./EventBenefit.jsx";
import BRRecipe from "./BRRecipe.jsx";
import BRRecipeDetail from "./BRRecipeDetail.jsx";
import Flavor from "./Flavor.jsx";
import Flow from "./Flow.jsx";
import CScenter from "./CScenter.jsx";
import FaQ from "./FaQ.jsx";

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
      children: [{ path: "/", element: <Main /> }],

      children: [{ path: "/menu", element: <IceCream /> }],
      children: [{ path: "/menu/monthflavor", element: <MonthFlavor /> }],
      children: [{ path: "/menu/icecream", element: <IceCream /> }],
      children: [{ path: "/menu/prepack", element: <Prepack /> }],
      children: [{ path: "/menu/icecreamcake", element: <IceCreamCake /> }],
      children: [
        { path: "/menu/icecreamdetail/:id", element: <IceCreamDetail /> },
      ],
      children: [
        { path: "/menu/prepackdetail/:id", element: <PrepackDetail /> },
      ],
      children: [
        {
          path: "/menu/icecreamcakedetail/:id",
          element: <IceCreamCakeDetail />,
        },
      ],

      children: [{ path: "/play", element: <Event /> }],
      children: [{ path: "/play/event", element: <Event /> }],
      children: [
        { path: "/play/event/promotion", element: <EventPromotion /> },
      ],
      children: [{ path: "/play/event/benefit", element: <EventBenefit /> }],
      children: [{ path: "/play/brrecipe", element: <BRRecipe /> }],
      children: [
        { path: "/play/brrecipe/detail:id", element: <BRRecipeDetail /> },
      ],

      children: [{ path: "/story", element: <Story /> }],
      children: [{ path: "/story/story", element: <Story /> }],
      children: [{ path: "/story/history", element: <History /> }],
      children: [{ path: "/story/bebetter", element: <Bebetter /> }],

      children: [{ path: "/store", element: <Flavor /> }],
      children: [{ path: "/store/flavor", element: <Flavor /> }],
      children: [{ path: "/store/flow", element: <Flow /> }],
      children: [{ path: "/store/openstore", element: <OpenStore /> }],
      children: [{ path: "/store/newstore", element: <NewStore /> }],
      children: [{ path: "/store/delivery", element: <DeliveryOrder /> }],
      children: [{ path: "/store/catering", element: <GroupOrder /> }],
      children: [
        { path: "/store/catering-order", element: <GroupOrderForm /> },
      ],

      children: [{ path: "/cscenter", element: <CScenter /> }],
      children: [{ path: "/cscenter/faq", element: <FaQ /> }],
      children: [{ path: "/cscenter/ccm", element: <Ccm /> }],
      children: [{ path: "/cscenter/praise", element: <Praise /> }],
      children: [{ path: "/cscenter/notice", element: <Notice /> }],

      children: [
        { path: "/cscenter/policy-reward", element: <PolicyReward /> },
      ],
      children: [{ path: "/cscenter/policy", element: <Policy /> }],
      children: [{ path: "/cscenter/policy-cctv", element: <PolicyCctv /> }],
      children: [{ path: "/cscenter/safety-management", element: <Safety /> }],

      children: [{ path: "/carts", element: <MyCart /> }],
      children: [{ path: "/login", element: <Login /> }],
      children: [{ path: "/signup", element: <Signup /> }],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
