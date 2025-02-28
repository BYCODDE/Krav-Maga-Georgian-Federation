import React, { useEffect } from "react";
import ModalForm from "./ModalForm";
import { usePutSignUp } from "../../../hooks/usePutSignUp";
import { toast } from "react-toastify";
function SignUpModal({ setIsModalOpen }) {
  const { mutate: sendSignUpData } = usePutSignUp();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Name = formData.get("name");
    const Username = formData.get("username");
    const Age = formData.get("age");
    const Phone = formData.get("phone");
    if (!Name || !Username || !Age || !Phone)
      return toast.error("Please fill all the fields");
    if (Phone.length !== 9) return toast.error("Phone number must be 9 digits");
    if (Age < 6 || Age > 100)
      return toast.error("Age must be between 6 and 100");
    sendSignUpData({ name: Name, username: Username, age: Age, phone: Phone });
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (setIsModalOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [setIsModalOpen]);
  
  return (
    <div>
      <ModalForm handleClose={handleClose} handleSubmit={handleSubmit} />
    </div>
  );
}

export default SignUpModal;
