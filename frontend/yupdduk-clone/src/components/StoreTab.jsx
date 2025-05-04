import { useState, useEffect } from "react";
import styles from "../styles/StoreTab.module.css";
import axios from "axios";

const StoreTab = () => {
  const [form, setForm] = useState({
    storeName: "",
    managerName: "",
    address: "",
    storePhone: "",
    openTime: "",
    closeTime: "",
  });
  const [stores, setStores] = useState([]);

  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    if (onlyNums.length > 11) return; // 최대 11자리 제한
    setForm({ ...form, storePhone: onlyNums });
  };
  const formatPhone = (num) => {
    if (num.length <= 3) return num;
    if (num.length <= 7) return `${num.slice(0, 3)}-${num.slice(3)}`;
    return `${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5)}`;
  };
  const formChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/stores", {
        withCredentials: true,
      })
      .then((res) => setStores(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/admin/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });

      if (response.ok) {
        alert("매장 등록이 완료되었습니다.");
      } else {
        console.error("서버 에러", response);
        alert("매장등록에 실패했습니다.");
      }
    } catch (err) {
      console.error("네트워크 에러", err);
      alert("요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h3>매장 등록</h3>
      <form class={styles.formContainer} onSubmit={handleSubmit}>
        <div class={styles.formGroup}>
          <label for="storeName">매장명</label>
          <input
            type="text"
            id="storeName"
            name="storeName"
            value={form.storeName}
            onChange={formChange}
            required
          />
        </div>

        <div class={styles.formGroup}>
          <label for="managerName">대표자</label>
          <input
            type="text"
            id="managerName"
            name="managerName"
            value={form.managerName}
            onChange={formChange}
            required
          />
        </div>

        <div class={styles.formGroup}>
          <label for="address">주소</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={formChange}
            required
          />
        </div>

        <div class={styles.formGroup}>
          <label for="storePhone">전화번호</label>
          <input
            type="text"
            id="storePhone"
            name="storePhone"
            value={formatPhone(form.storePhone)}
            onChange={(e) => {
              formChange(e);
              handleChange(e);
            }}
            required
          />
        </div>

        <div class={styles.formGroup}>
          <label for="openTime">영업 시작 시간</label>
          <input
            type="time"
            id="openTime"
            name="openTime"
            value={form.openTime}
            onChange={formChange}
            required
          />
        </div>

        <div class={styles.formGroup}>
          <label for="closeTime">영업 종료 시간</label>
          <input
            type="time"
            id="closeTime"
            name="closeTime"
            value={form.closeTime}
            onChange={formChange}
            required
          />
        </div>

        <div>
          <button type="submit" class={styles.submitBtn}>
            저장
          </button>
        </div>
      </form>
      <div className={styles.storeContainer}>
        {stores.map((store) => (
          <div key={store.id} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.namePhone}>
                <div className={styles.name}>{store.storeName}</div>
                <div className={styles.phone}>📞{store.storePhone}</div>
              </div>
            </div>
            <div className={styles.address}>{store.address}</div>
            <div>
              🕐운영시간: {store.openTime} ~ {store.closeTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreTab;
