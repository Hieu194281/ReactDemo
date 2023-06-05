import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import TableUser from "./TableUser";
import { getAllUser } from "../../../service/apiServices";
import { useEffect } from "react";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <button
          className="btn btn-primary"
          onClick={() => setShowModalCreateUser(true)}
        >
          <IoIosAdd className="mr-2"></IoIosAdd>
          <span>Add new user</span>
        </button>
        <div className="table-users-container">
          <TableUser listUser={listUser} setListUser={setListUser} />
        </div>

        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
