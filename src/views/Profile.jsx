import { useUserContext } from "../hooks/contextHooks";

const Profile = () => {
  const { user } = useUserContext();
  if (!user) return <p>Please login</p>;
  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default Profile;
