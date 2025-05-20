import styled from "styled-components";
import InputRow from "../../ui/InputRow";
import Button from "../../ui/Button";
import ImageInput from "../../ui/ImageInput";
import { BiImageAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import useNewAd from "./useNewAd";
import { useGetUser } from "../Auth/useGetUser";
import { useState } from "react";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
`;

const StyledAdFromContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`;

const ImageContainer = styled.div`
  align-self: center;
  justify-self: center;
  padding-right: 10rem;

  & svg {
    height: 20rem;
    width: 20rem;
    color: var(--color-primary-dark);
  }
`;

function AdForm() {
  const { register, handleSubmit } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const { newAd } = useNewAd();
  const { user_id } = useGetUser();

  function submit(data) {
    newAd({
      ...data,
      image: data.image[0],
      user_id: user_id,
      isConfirmed: false,
    });
  }

  function updateImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(() => reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <StyledAdFromContainer>
      <form onSubmit={handleSubmit(submit)}>
        <StyledFormRow>
          <InputRow name="title" title="Title">
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Used iPhone 15 pro"
              {...register("title")}
            />
          </InputRow>

          <InputRow name="price" title="Price">
            <input
              type="number"
              id="price"
              name="price"
              required
              placeholder="1000"
              {...register("price")}
            />
          </InputRow>

          <InputRow name="contactInfo" title="Contact Info">
            <input
              type="contactInfo"
              id="contactInfo"
              name="contactInfo"
              required
              placeholder="07123456789"
              {...register("contactInfo")}
            />
          </InputRow>

          <InputRow name="description" title="Description">
            <textarea
              type="text"
              id="desc"
              name="desc"
              required
              placeholder="iPhone 15 which is used for 1 year ..."
              {...register("desc")}
            />
          </InputRow>

          <InputRow name="image" title="Select image">
            <ImageInput>
              <label htmlFor="image">
                <span>Upload image</span>
                <HiMiniArrowUpTray />
              </label>
              <input
                type="file"
                id="image"
                name="image"
                placeholder="Upload image"
                accept="image/*"
                {...register("image")}
                onChange={(e) => {
                  updateImage(e);
                  register("image").onChange(e);
                }}
              />
            </ImageInput>
          </InputRow>

          <Button variations="sub">Place Your ad</Button>
        </StyledFormRow>
      </form>

      <ImageContainer>
        <img src={imagePreview} height="auto" width="600rem" />
        {/* <BiImageAlt /> */}
      </ImageContainer>
    </StyledAdFromContainer>
  );
}

export default AdForm;
