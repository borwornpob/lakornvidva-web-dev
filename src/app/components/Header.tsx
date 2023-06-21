"use client";

import styled from "styled-components";
import { chopsin, sukhumvit_medium, sukhumvit_text } from "../fonts";

const TitleEng = styled.div`
  font-family: ${chopsin.style.fontFamily};
  font-size: max(30px, 6.25vw);
  font-weight: 400;
  text-align: center;

  margin-top: -9.5vw;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #00e225 -20deg,
    var(--bright-red) 75deg,
    #ba3345 85deg,
    #c22d61 95deg,
    #47206d 120deg,
    #47206d 260deg,
    #358faf 268deg,
    #66b234 275deg,
    #00e225 300deg
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  background-blend-mode: lighten;
  mix-blend-mode: normal;

  text-border: 1px solid #846e6e;
  text-shadow: 0px 4px 30px rgba(255, 254, 254, 0.2);
`;

const TitleEngShadow = styled(TitleEng)`
  border: 1px solid #ffffff;
  filter: blur(15px);
  margin: 0px;
`;

const TitleTh = styled.div`
  font-family: ${sukhumvit_text.style.fontFamily};
  font-size: max(30px, 6.7vw);
  font-weight: 400;

  text-align: center;

  margin-top: -2.64vw;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #00e225 -15deg,
    #66b234 75deg,
    #358faf 93.07deg,
    #47206d 120deg,
    #c22d61 201.4deg,
    #ba3345 256.21deg,
    #e93224 280deg,
    #00e225 320deg,
    #66b234 394.06deg
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  text-fill-color: transparent;

  -webkit-text-stroke-color: #86a087;
  -webkit-text-stroke-width: 1px;

  text-shadow: 0px 4px 30px rgba(255, 255, 255, 0.2);
`;

export default function Header() {
  return (
    <div>
      <TitleEngShadow>LAKORNVIDVA</TitleEngShadow>
      <TitleEng>LAKORNVIDVA</TitleEng>
      <TitleTh>ละครวิดวะ</TitleTh>
    </div>
  );
}
