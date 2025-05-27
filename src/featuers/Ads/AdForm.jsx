import styled from "styled-components";
import InputRow from "../../ui/InputRow";
import Button from "../../ui/Button";
import ImageInput from "../../ui/ImageInput";
import { BiImageAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import { useGetUser } from "../Auth/useGetUser";
import { useState } from "react";
import useUpdateAd from "./useUpdateAd";

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

  & img {
    height: 30rem;
    width: auto;
  }
`;

function AdForm({ ad, close }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: ad?.title || "",
      price: ad?.price || "",
      contactInfo: ad?.contactInfo || "",
      description: ad?.description || "",
      image: ad?.image || "",
    },
  });

  const [imagePreview, setImagePreview] = useState(null);
  const { updateAd } = useUpdateAd();
  const { user_id } = useGetUser();
  const isEditing = ad ? true : false;

  isEditing && !imagePreview && ad?.image && setImagePreview(ad?.image);

  function submit(data) {
    updateAd(
      {
        ...data,
        image: typeof data?.image === "string" ? ad.image : data.image[0],
        user_id: user_id,
        isConfirmed: false,
        id: isEditing ? ad.id : undefined,
      },
      {
        onSuccess: () => {
          if (close) close();
        },
      }
    );
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
              id="description"
              name="description"
              required
              placeholder="iPhone 15 which is used for 1 year ..."
              {...register("description")}
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
        {imagePreview ? (
          <img src={imagePreview} height="auto" width="30rem" />
        ) : (
          <BiImageAlt />
        )}
      </ImageContainer>
    </StyledAdFromContainer>
  );
}

export default AdForm;
