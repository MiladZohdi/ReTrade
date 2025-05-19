// import { Form } from "react-hook-form";

import Heading from "../ui/Heading";
import AdForm from "../featuers/ads/AdForm";

function NewAd() {
  return (
    <>
      <Heading as="h2">Create New Ad</Heading>
      <AdForm />
    </>
  );
}

export default NewAd;
