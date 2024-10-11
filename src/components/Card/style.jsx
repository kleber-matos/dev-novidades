import styled from "styled-components";

export const Div = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  width: 100vw;
  height: 55vh;
  max-width: 550px;
  margin-bottom: 2rem;

  div {
    height: 22vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 8px 0 8px;
  }

  img {
    width: 100%;
    height: 60%;
    border-radius: 5px 5px 0 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  /* 𝟺𝟾𝟷𝚙𝚡 - 𝟽𝟼𝟾𝚙𝚡: 𝚃𝚊𝚋𝚕𝚎𝚝𝚜 */
  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  /* 𝟹𝟸0𝚙𝚡 - 𝟺𝟾0𝚙𝚡: 𝙳𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘𝚜 𝚖𝚘𝚟𝚎𝚒𝚜 */
  @media (max-width: 480px) {
    h2 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
      padding-bottom: 10px;
    }
  }
`;
