import { useEffect, useState } from "react";
import { getAllUser } from "../../../service/apiServices";

const TableUser = (props) => {
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
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-secondary">View</button>
                  <button className="btn btn-warning mx-2">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
