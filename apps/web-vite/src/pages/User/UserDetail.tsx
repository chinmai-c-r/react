import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="user-detail-wrapper">
      <h1>User Details</h1>
      <div>Name: {id}</div>
    </div>
  );
};

export default UserDetail;
