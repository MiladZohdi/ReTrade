import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { IoBookmark } from "react-icons/io5";
import styled from "styled-components";

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

  &:hover {
    cursor: pointer;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = (name) => setOpenName(name);
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const r = useRef();
  if (name !== openName) return null;

  function handleClickOutSide(e) {
    e.target.classList === r.current.classList && close();
  }

  return createPortal(
    <Overlay ref={r} onClick={handleClickOutSide}>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={close}>
            <HiMiniXMark />
          </CloseButton>
        </ModalHeader>
        {cloneElement(children, { close })}
      </ModalContainer>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
