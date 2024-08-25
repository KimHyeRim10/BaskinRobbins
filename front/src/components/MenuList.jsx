import { Link } from "react-router-dom";
import "../css/menulist.css";

export default function MenuList() {
  return (
    <div className="menu">
      <div className="menu_item">
        <Link to="/menu/icecream">
          {" "}
          <p id="menu">Menu</p>
        </Link>
        <ul className="menulists">
          <li className="menulist">
            <Link to="/menu/monthflavor">
              <p className="footer_menu_text">이달의 맛</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/menu/icecream">
              <p className="footer_menu_text">아이스크림</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/menu/prepack">
              <p className="footer_menu_text">프리팩</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/menu/icecreamcake">
              <p className="footer_menu_text">아이스크림 케이크</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu_item">
        <Link to="/play/event">
          <p id="menu">BR Play</p>
        </Link>
        <ul className="menulists">
          <li className="menulist">
            <Link to="/play/event">
              <p className="footer_menu_text">이벤트</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/play/brrecipe">
              <p className="footer_menu_text">BR레시피</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu_item">
        <Link to="/story/story">
          <p id="menu">BR Story</p>
        </Link>
        <ul className="menulists">
          <li className="menulist">
            <Link to="/story/story">
              <p className="footer_menu_text">브랜드 스토리</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/story/history">
              <p className="footer_menu_text">이달의 맛 히스토리</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/story/bebetter">
              <p className="footer_menu_text">Be Better</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu_item">
        <Link to="/store/flavor">
          {" "}
          <p id="menu">Delivery/Store</p>
        </Link>
        <ul className="menulists">
          <li className="menulist">
            <Link to="/store/flavor">
              <p className="footer_menu_text">100 flavor 플래그십스토어</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/store/flow">
              <p className="footer_menu_text">flow매장</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/store/openstore">
              <p className="footer_menu_text">점포개설문의</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/store/delivery">
              <p className="footer_menu_text">배달주문</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/store/catering">
              <p className="footer_menu_text">단체주문</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu_item">
        <Link to="/cscenter">
          <p id="menu">Information Center</p>
        </Link>
        <ul className="menulists">
          <li className="menulist">
            <Link to="/cscenter">
              <p className="footer_menu_text">고객센터</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/cscenter/ccm">
              <p className="footer_menu_text">소비자중심경영(CCM)</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/cscenter/praise">
              <p className="footer_menu_text">칭찬점포</p>
            </Link>
          </li>
          <li className="menulist">
            <Link to="/cscenter/notice">
              <p className="footer_menu_text">공지사항</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
