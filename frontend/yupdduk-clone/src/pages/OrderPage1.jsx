import { useState } from "react";
import Header from "../components/Header.jsx";
import "../styles/OrderPage1.css";

const OrderPage1 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stores = [
    {
      id: 1,
      name: "김포사우점",
      address: "경기도 김포시 돌문로86번길 12-18 (사우동) 1층 103호",
    },
    {
      id: 2,
      name: "김포풍무점",
      address: "경기도 김포시 풍무로 51 (풍무동) 104호",
    },
    {
      id: 3,
      name: "김포운양점",
      address: "경기도 김포시 한강1로 247(운양동), 김포운양헤리움타운 124호",
    },
    {
      id: 4,
      name: "김포고촌점",
      address: "김포시 고촌읍 장차로5번길 10 1층103호",
    },
    {
      id: 1,
      name: "김포사우점",
      address: "경기도 김포시 돌문로86번길 12-18 (사우동) 1층 103호",
    },
    {
      id: 2,
      name: "김포풍무점",
      address: "경기도 김포시 풍무로 51 (풍무동) 104호",
    },
    {
      id: 3,
      name: "김포운양점",
      address: "경기도 김포시 한강1로 247(운양동), 김포운양헤리움타운 124호",
    },
    {
      id: 4,
      name: "김포고촌점",
      address: "김포시 고촌읍 장차로5번길 10 1층103호",
    },
    {
      id: 1,
      name: "김포사우점",
      address: "경기도 김포시 돌문로86번길 12-18 (사우동) 1층 103호",
    },
    {
      id: 2,
      name: "김포풍무점",
      address: "경기도 김포시 풍무로 51 (풍무동) 104호",
    },
  ];

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="fixed">
        <Header title="방문 매장 찾기" />
        <nav>
          <div className="search">
            <img
              src="https://www.yupdduk.com/bj-images/yupdduk_sub/searchicon.png"
              alt=""
            />
            <input
              type="text"
              placeholder="매장명 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setSearchTerm("")}>
              <img
                src="	https://www.yupdduk.com/bj-images/yupdduk_sub/searchicon_close.png"
                alt=""
              />
            </button>
          </div>
        </nav>
      </div>
      <main>
        <ul className="storeList">
          {filteredStores.length > 0 ? (
            <>
              {filteredStores.map((store) => (
                <li className="store" key={store.id}>
                  <p className="storeName">{store.name}</p>
                  <p className="storeAddress">{store.address}</p>
                </li>
              ))}
              <div className="grayLine"></div>
            </>
          ) : (
            <div className="noStore">
              <p>매장 내역이 없습니다.</p>
            </div>
          )}
        </ul>
        <div
          style={{ width: "100%", background: "white", padding: "4%" }}
        ></div>
      </main>
    </div>
  );
};

export default OrderPage1;
