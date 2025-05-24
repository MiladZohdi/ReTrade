import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useGetAd } from "./useGetAd";
import Loader from "../../ui/Loader";
import { BiImageAlt } from "react-icons/bi";
import { formatDate } from "../../helpers/formatDate";
import { formatCurrency } from "../../helpers/formatCurrncy";
import { IoBookmark, IoBookmarkOutline, IoLeafOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useGetUser } from "../Auth/useGetUser";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import useGetSavedAds from "./useGetSavedAds";
import { useDeleteAd } from "./useDeleteAd";

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

  & svg {
    align-self: center;
    height: 3rem;
    width: auto;
    color: var(--color-primary);
  }

  :hover {
    cursor: pointer;
    color: var(--color-primary-dark);
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
  const { ad, loadingAd } = useGetAd();
  const { user_id } = useGetUser();
  const { savedAds, loadingSavedAds } = useGetSavedAds();
  const { deleteAd, loadingDeleteAd } = useDeleteAd();
  const navigat = useNavigate();

  if (loadingSavedAds || loadingAd) return <Loader />;

  const isSaved = savedAds.data?.some((savedAd) => savedAd.id === ad?.id);

  return (
    <ProductContainer>
      <AdHeader>
        <Button onClick={() => navigat(-1)}>
          <FaArrowLeft />
        </Button>

        <ControlButtonGroup>
          {isSaved ? (
            <Button>
              <IoBookmark />
            </Button>
          ) : (
            <Button>
              <IoBookmarkOutline />
            </Button>
          )}
          {ad.user_id === user_id && (
            <>
              <Button>
                <TbEdit />
              </Button>
              <Button
                onClick={() =>
                  deleteAd(ad.id, { onSuccess: () => navigat(-1) })
                }
                disabled={loadingDeleteAd}
              >
                <RiDeleteBin5Line />
              </Button>
            </>
          )}
        </ControlButtonGroup>
      </AdHeader>
      <ProductDetails>
        <Heading as="h1">{ad?.title}</Heading>
        <ProductInfo>{formatDate(ad?.created_at)}</ProductInfo>
        <ProductInfo>{formatCurrency(ad?.price)}</ProductInfo>
        <ProductInfo>{ad?.contactInfo}</ProductInfo>
        <ProductInfo>{ad?.description}</ProductInfo>
      </ProductDetails>
      {ad.image ? <Image src={ad?.image} /> : <BiImageAlt />}
    </ProductContainer>
  );
}

export default ItemsPage;
