import { styled } from "styled-components";

import Header from "./Header";
import Synopsis from "./Synopsis";
import Subtitle from "./Subtitle";
import BuyButton from "./BuyButton";
import SocialMedia from "./SocialMedia";
import Sponsor from "./Sponsor";

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default function Body(state: { language: string }) {
  return (
    <BodyStyle>
      <Subtitle language={state.language} />
      <Synopsis language={state.language} />
      <BuyButton />
      <SocialMedia />
    </BodyStyle>
  );
}
