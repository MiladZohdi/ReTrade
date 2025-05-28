import styled from "styled-components";
import Logo from "./Logo";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Modal from "./Modal";
import ConfirmationComponent from "./ConfirmationComponent";
import { useNavigate } from "react-router";
import { useLogOut } from "../featuers/Auth/useLogOut";

const StyledHeader = styled.div`
  grid-column: 2/-1;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  padding: 2rem 4rem 1rem 4rem;

  border-bottom: 0.1px solid var(--color-white);
`;

const Button = styled.button`
  background: none;
  border: none;

  color: var(--color-primary);
  font-size: 2.4rem;

  &:hover {
    cursor: pointer;
    color: var(--color-primary-dark);
  }

  & svg {
    width: 3rem;
    height: auto;
  }
`;

function Header() {
  const navigate = useNavigate();
  const { logout } = useLogOut();
  return (
    <Modal>
      <StyledHeader>
        <Modal.Open opens="logOut">
          <Button>
            <HiArrowRightOnRectangle />
          </Button>
        </Modal.Open>
        <Logo />
      </StyledHeader>

      <Modal.Window name="logOut">
        <ConfirmationComponent
          title="Are you Sure you want to Logout?"
          cancelButtonTitle="Cancel"
          confirmButtonTitle="LogOut"
          onClick={() => {
            logout("", {
              onSuccess: () => {
                navigate("/auth/login", { replace: true });
                close();
              },
            });
          }}
        />
      </Modal.Window>
    </Modal>
  );
}

export default Header;
