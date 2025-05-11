import { HiMiniXMark } from "react-icons/hi2";
import { IoBookmark } from "react-icons/io5";
import styled from "styled-components";
import ItemsPage from "./ItemsPage";
import AdForm from "./AdForm";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(6px);
  transition: all 0.5s;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem 4rem;
  transition: all 0.5s;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  & svg {
    height: 3rem;
    width: auto;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;

  & :hover {
    cursor: pointer;
    transform: rotateX("angle");
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

function Modal({ children }) {
  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <IoBookmark />
          <CloseButton>
            <HiMiniXMark />
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
