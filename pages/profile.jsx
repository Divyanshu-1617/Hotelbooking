import { useDispatch, useSelector } from "react-redux";
import { logout } from "../service/authslice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>My Profile</h2>

      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button onClick={handleLogout} style={{ marginTop: 15 }}>
        Logout
      </button>
    </div>
  );
}
