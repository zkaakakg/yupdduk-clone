import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import styles from "../styles/OrderPage1.module.css";
import { useNavigate } from "react-router-dom";

const OrderPage1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("acccessToken"); // 철자: acccess → access 수정!

    fetch("http://localhost:8080/stores", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include", // 쿠키도 같이 보낼 때만 필요!
    })
      .then(async (response) => {
        if (!response.ok) {
          console.error("응답 실패", response.status);
          return;
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log("받은 데이터:", data);
          setStores(data); // 받아온 데이터 저장
        } else {
          console.warn("JSON 응답 아님");
        }
      })
      .catch((err) => {
        console.error("요청 실패:", err);
      });
  }, []);

  const filteredStores = stores.filter((store) =>
    store.storeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrder2 = (storeId) => {
    navigate(`/order2/${storeId}`);
  };

  return (
    <div>
      <div className={styles.fixed}>
        <Header title="방문 매장 찾기" />
        <nav>
          <div className={styles.search}>
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
      <main className={styles.main}>
        <ul className={styles.storeList}>
          {filteredStores.length > 0 ? (
            <>
              {filteredStores.map((store) => (
                <li
                  className={styles.store}
                  key={store.id}
                  onClick={() => handleOrder2(store.id)}
                >
                  <p className={styles.storeName}>{store.storeName}</p>
                  <p className={styles.storeAddress}>{store.address}</p>
                </li>
              ))}
              <div className={styles.grayLine}></div>
            </>
          ) : (
            <div className={styles.noStore}>
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
