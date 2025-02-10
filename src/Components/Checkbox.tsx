import styled from "styled-components";
import { useContext, useEffect } from "react";
import { DeviceContext } from "../context/DeviceContext2";

const Checkbox = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("context not found");
  }

  const { isDroppedTheMenu, setisDroppedTheMenu } = context;

  useEffect(() => {
    console.log(isDroppedTheMenu);
  }, [isDroppedTheMenu]);

  return (
    <StyledWrapper
      className="text-white cursor-pointer hidden max-[600px]:block font-extrabold"
      onClick={() => {
        setisDroppedTheMenu(!isDroppedTheMenu);
      }}
    >
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={isDroppedTheMenu}
          readOnly
        />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 30px;
    height: 25px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 21px;
    left: 5px;
  }
`;

export default Checkbox;
