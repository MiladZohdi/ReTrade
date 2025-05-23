import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useGetAd } from "./useGetAd";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10rem;
  justify-content: space-around;
  padding: 2rem 1rem;
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
  const x = useGetAd();
  return (
    <ProductContainer>
      <ProductDetails>
        <Heading as="h1">Product Title</Heading>
        <ProductInfo>Product Place Date:</ProductInfo>
        <ProductInfo>Price</ProductInfo>
        <ProductInfo>Contact Info</ProductInfo>
        <ProductInfo>Product Discription</ProductInfo>
      </ProductDetails>
      <Image src="/Logo.png"></Image>
    </ProductContainer>
  );
}

export default ItemsPage;
