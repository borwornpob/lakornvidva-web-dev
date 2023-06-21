import Image from "next/image";
import { styled } from "styled-components";
import { chopsin } from "../fonts";
import ticketPic from "../images/ticket.png";
import cursor from "../images/cursor.png";

const FullButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: #d9d9d9;
  width: max(200px, 24.5vw);
  height: max(59px, 7.3vw);
  border-radius: max(29.5px, 3.65vw);

  font-family: ${chopsin.style.fontFamily};
  font-size: max(20px, 2.23vw);

  color: #000000;

  padding-right: 2.6vw;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TicketBg = styled.div`
  width: max(40px, 4.94vw);
  height: max(40px, 4.94vw);

  padding: max(6px, 0.703vw);

  background: #ffffff;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Cursor = styled.div`
  width: max(50px, 6.66vw);
  margin-top: min(-20px, -2.86vw);
  margin-left: max(191.3px, 23.4375vw);
`;

export default function BuyButton() {
  return (
    <FullButton>
      <Button
        onClick={() =>
          (window.location.href =
            "https://www.google.com/doodles/doodle-champion-island-games-begin")
        }
      >
        <TicketBg>
          <Image src={ticketPic.src} width={68} height={68} alt=">>" />
        </TicketBg>
        BUY NOW
      </Button>
      <Cursor>
        <Image
          layout="responsive"
          src={cursor.src}
          width={128}
          height={128}
          alt="Click here"
        />
      </Cursor>
    </FullButton>
  );
}
