import styled from "styled-components";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

type InfoType = {
  name: string;
  email: string;
  message: string;
};

const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const VITE_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID;

const Form = () => {
  const [info, setInfo] = useState<InfoType>({
    name: "",
    email: "",
    message: "",
  });

  const isDisabled =
    !info.name || !info.email || !info.message || !info.email.includes("@");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    let templateParams = {
      name: info.name,
      email: info.email,
      message: info.message,
    };

    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, templateParams, VITE_API_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast("Email sent successfully!", {
            position: "bottom-left",
          });
          setInfo({ name: "", email: "", message: "" });
          const autoReplyParams = {
            name: info.name,
            email: info.email,
          };
          emailjs
            .send(
              VITE_SERVICE_ID,
              VITE_AUTOREPLY_TEMPLATE_ID,
              autoReplyParams,
              VITE_API_KEY
            )
            .then(
              (response) => {
                console.log(response);
              },
              (error) => {
                console.error(error);
              }
            );
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Oops! Something went wrong.", {
            position: "bottom-left",
          });
        }
      );
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={info.message}
              onChange={(e) => setInfo({ ...info, message: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="form-submit-btn"
            disabled={isDisabled}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 500px;
    background: linear-gradient(#0d121b, #0d121b) padding-box,
      linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input,
  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    resize: none;
    height: 96px;
  }

  .form-container .form-group input:focus,
  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #0566b6;
  }

  .form-container .form-submit-btn {
    width: 40%;
    background-color: #fff;
    color: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.3s ease;
  }

  .form-container .form-submit-btn:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  .form-container .form-submit-btn:hover:not(:disabled) {
    background-color: #313131;
    color: #fff;
  }

  @media screen and (width<=780px) {
    .form-container {
      width: 350px;
    }
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Form;
