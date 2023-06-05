import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import img from "../../../assets/bg2.jpg";
import { IoIosAdd } from "react-icons/io";
import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../service/apiServices";
const ModalCreateUser = (props) => {
  const { show, setShow, fetchListUser } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setRole("USER");
    setUserName("");
    setImage("");
    setPreviewImg("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  const handleUploadImg = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleCreateNewUser = async () => {
    // let data = {
    //   email: email,
    //   password: password,
    //   username: userName,
    //   role: role,
    //   userImage: image,
    // };
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Email Invalid");
      return;
    }

    // console.log(data);
    let data = await postCreateNewUser(email, password, userName, role, image);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await fetchListUser();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div>
      <Modal
        backdrop="static"
        size="xl"
        show={show}
        onHide={handleClose}
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">UserName</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              >
                <option value="USER">USERS</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="uploadFile">
                {" "}
                <IoIosAdd />
                <span>Upload File Image</span>
              </label>

              <input
                type="file"
                hidden
                id="uploadFile"
                onChange={(event) => {
                  handleUploadImg(event);
                }}
              />
            </div>

            <div className="col-md-12 img-preview">
              {previewImg ? (
                <img src={previewImg} />
              ) : (
                <span>Image Preview</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateNewUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCreateUser;
