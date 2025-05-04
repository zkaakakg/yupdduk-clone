import React, { useState, useEffect } from "react";
import styles from "../styles/UserListTab.module.css";
import axios from "axios";

const UserListTab = () => {
  const [users, setUsers] = useState([]);
  const [roleEdit, setRoleEdit] = useState(null);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios
      .get("http://localhost:8080/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleRoleChange = (userId) => {
    if (newRole !== "USER" && newRole !== "ADMIN") {
      console.error("Invalid role");
      return;
    }

    fetch(`http://localhost:8080/admin/users/${userId}/role`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newRole,
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Role change failed");
        }
        alert("역별 변경 완료!");
      })
      .then((data) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user, userRole: newRole } : user
          )
        );
        setRoleEdit(null);
      })
      .catch((err) => {
        console.error(err);
        alert("역할 변경에 실패했습니다.");
      });
  };

  return (
    <div>
      <h3>회원 목록</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th></th>
            <th>이름</th>
            <th>이메일</th>
            <th>역할</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={
                user.userRole === "ADMIN" ? styles.adminRow : styles.userRow
              }
            >
              <td>{index + 1}</td>
              <td>{user.name || "-"}</td>
              <td>{user.email}</td>
              <td className={styles.role}>
                {roleEdit === user.id ? (
                  <select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className={styles.select}
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                ) : (
                  user.userRole
                )}
              </td>
              <td>
                {roleEdit === user.id ? (
                  <button
                    onClick={() => handleRoleChange(user.id)}
                    className={styles.saveBtn}
                  >
                    저장
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setRoleEdit(user.id);
                      setNewRole(user.userRole);
                    }}
                    className={styles.updateBtn}
                  >
                    수정
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTab;
