import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/style.css";
import Root from "./pages/Root.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

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
import { getUser } from "./util/localStorage.js";

function App() {
  const userInfo = getUser();
  const [cartCount, setCartCount] = useState(0); // 장바구니 기본값 0개로 설정
  const [cartItems, setCartItems] = useState([]); // My Cart에 들어갈 정보를 저장할 곳. 정보한개 당 객체로 담겨서 배열로 감싸줘야함!

  //TODO 1.로그인 여부를 체크하기
  useEffect(() => {
    const url = `http://localhost:8080/carts/count`;
    if (userInfo) {
      axios({
        method: "post",
        url: url,
        data: { userId: "lee" },
      })
        .then((result) => setCartCount(parseInt(result.data.count)))
        .catch((error) => console.log(error));
    }
  }, []);

  //TODO DetailProduct.jsx에서 처리한 장바구니 추가결과 가져오기 [ DB연동버전 ]
  const addCartCount = (result) => {
    console.log("result ==>", result);
    if (result === 1) setCartCount(cartCount + 1);
  };

  //TODO My Cart에서 상품삭제하면 장바구니 수량도 감소하게 하기 (정보는 삭제안되서 계속 남아있음)
  const removeCartCount = (qty) => {
    setCartCount(cartCount - qty);
  };

  //TODO My Cart에서 상품삭제하면 장바구니 수량도 감소하게 하고, 정보도 삭제시키기
  const handleDelete = (cid, qty) => {
    alert("해당 상품을 삭제하시겠습니까?");
    const removeIndex = cartItems.findIndex((item) => item.cid === cid);
    const updateCartList = cartItems.filter((item, i) => i !== removeIndex); //! "!==" 사용해서 삭제할 아이템 제외하고 나머지 반환
    //                                     (item,i)의 i는 index정보임
    setCartItems(updateCartList);
    setCartCount(cartCount - qty);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root cartCount={cartCount} />,
      children: [
        { path: "/", element: <Main /> },

        { path: "/menu", element: <IceCream /> },
        { path: "/menu/monthflavor", element: <MonthFlavor /> },
        { path: "/menu/icecream", element: <IceCream /> },
        { path: "/menu/prepack", element: <Prepack /> },
        { path: "/menu/icecreamcake", element: <IceCreamCake /> },

        {
          path: "/menu/icecreamdetail/:id",
          element: <IceCreamDetail addCartCount={addCartCount} />,
        },

        {
          path: "/menu/prepackdetail/:id",
          element: <PrepackDetail addCartCount={addCartCount} />,
        },

        {
          path: "/menu/icecreamcakedetail/:id",
          element: <IceCreamCakeDetail addCartCount={addCartCount} />,
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

        {
          path: "/carts",
          element: <MyCart removeCartCount={removeCartCount} />,
        },
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
