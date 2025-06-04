import styled from "styled-components";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import { useGetAd } from "./useGetAd";
import Loader from "../../ui/Loader";
import { BiImageAlt } from "react-icons/bi";
import { formatDate } from "../../helpers/formatDate";
import { formatCurrency } from "../../helpers/formatCurrncy";
import {
  IoBookmark,
  IoBookmarkOutline,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line, RiHourglassFill } from "react-icons/ri";
import { useGetUser } from "../Auth/useGetUser";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import useGetSavedAds from "./useGetSavedAds";
import { useDeleteAd } from "./useDeleteAd";
import { useToggleSavedAd } from "./useToggleSavedAd";
import { useConfirmReject } from "./useConfirmReject";
import AdForm from "./AdForm";
import ConfirmationComponent from "../../ui/ConfirmationComponent";
import { HiOutlineBadgeCheck, HiOutlineBan } from "react-icons/hi";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10rem;
  justify-content: space-around;
  padding: 2rem 1rem;

  & svg {
    align-self: center;
    height: 10rem;
    width: auto;
    color: var(--color-primary);
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  height: 3rem;
  width: 3rem;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    color: var(--color-primary-dark);
  }

  & svg {
    align-self: center;
    height: 3rem;
    width: auto;
    color: var(--color-primary);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const AdHeader = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
`;

const ControlButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ProductInfo = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;

const Image = styled.img`
  align-self: center;
  height: 30rem;
`;

function ItemsPage() {
  const { user_id, isAdmin } = useGetUser();
  const { ad, loadingAd } = useGetAd();
  const { savedAds, loadingSavedAds } = useGetSavedAds();
  const { deleteAd, loadingDeleteAd } = useDeleteAd();
  const { toggleSavedAd, loadingToggleSavedAd } = useToggleSavedAd();
  const { confirmOrReject, isLoadingConfirmReject } = useConfirmReject();
  const navigat = useNavigate();

  if (loadingSavedAds || loadingAd) return <Loader />;

  const isDisabled = loadingDeleteAd || loadingToggleSavedAd;
  const isSaved = savedAds?.data?.some((savedAd) => savedAd.id === ad?.id);

  const {
    id,
    title,
    user_id: adUserId,
    created_at,
    price,
    contactInfo,
    image,
    description,
    isConfirmed: adIsConfrimed,
  } = ad;

  return (
    <Modal>
      <ProductContainer>
        <AdHeader>
          <Button onClick={() => navigat(-1)}>
            <FaArrowLeft />
          </Button>

          <ControlButtonGroup>
            {!adIsConfrimed && user_id === adUserId && (
              <Button>
                <RiHourglassFill />
              </Button>
            )}
            {adIsConfrimed && user_id === adUserId && (
              <Button>
                <IoCheckmarkCircleSharp />
              </Button>
            )}
            {isSaved && adIsConfrimed && (
              <Button
                onClick={() => toggleSavedAd({ ad_id: id, isSaved: isSaved })}
                disabled={isDisabled}
              >
                <IoBookmark />
              </Button>
            )}
            {!isSaved && adIsConfrimed && (
              <Button
                onClick={() => toggleSavedAd({ ad_id: id, isSaved: isSaved })}
                disabled={isDisabled}
              >
                <IoBookmarkOutline />
              </Button>
            )}
            {isAdmin && (
              <>
                <Modal.Open opens="confirmAd">
                  <Button disabled={isLoadingConfirmReject}>
                    <HiOutlineBadgeCheck />
                  </Button>
                </Modal.Open>
                <Modal.Open opens="rejectAd">
                  <Button disabled={isLoadingConfirmReject}>
                    <HiOutlineBan />
                  </Button>
                </Modal.Open>
              </>
            )}
            {adUserId === user_id && (
              <>
                <Modal.Open opens="editAd">
                  <Button disabled={isDisabled}>
                    <TbEdit />
                  </Button>
                </Modal.Open>
                <Modal.Open opens="deleteAd">
                  <Button disabled={isDisabled}>
                    <RiDeleteBin5Line />
                  </Button>
                </Modal.Open>
              </>
            )}
          </ControlButtonGroup>
        </AdHeader>
        <ProductDetails>
          <Heading as="h1">{title}</Heading>
          <ProductInfo>{formatDate(created_at)}</ProductInfo>
          <ProductInfo>{formatCurrency(price)}</ProductInfo>
          <ProductInfo>{contactInfo}</ProductInfo>
          <ProductInfo>{description}</ProductInfo>
        </ProductDetails>
        {image ? <Image src={image} /> : <BiImageAlt />}
      </ProductContainer>
      <Modal.Window name="editAd">
        <AdForm ad={ad} />
      </Modal.Window>
      <Modal.Window name="deleteAd">
        <ConfirmationComponent
          title="Are you sure you want to delete this ad?"
          cancelButtonTitle="Cancel"
          confirmButtonTitle="Delete"
          onClick={() => deleteAd(id, { onSuccess: () => navigat(-1) })}
        />
      </Modal.Window>

      <Modal.Window name="confirmAd">
        <ConfirmationComponent
          title="Are you sure you want to Confirm this ad?"
          cancelButtonTitle="Cancel"
          confirmButtonTitle="Confirm"
          onClick={() =>
            confirmOrReject(
              {
                ad_id: id,
                ad_title: title,
                user_id: adUserId,
                admin_id: user_id,
                isConfirmed: true,
              },
              { onSuccess: () => navigat(-1) }
            )
          }
        />
      </Modal.Window>

      <Modal.Window name="rejectAd">
        <ConfirmationComponent
          title="Are you sure you want to reject this ad?"
          cancelButtonTitle="Cancel"
          confirmButtonTitle="Reject"
          onClick={() =>
            confirmOrReject(
              {
                ad_id: id,
                ad_title: title,
                user_id: adUserId,
                admin_id: user_id,
                isConfirmed: false,
              },
              { onSuccess: () => navigat(-1) }
            )
          }
        />
      </Modal.Window>
    </Modal>
  );
}
export default ItemsPage;
