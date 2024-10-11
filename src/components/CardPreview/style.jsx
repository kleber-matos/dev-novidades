import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    width: 70%;
  }

  iframe {
    width: 100%;
    height: 60vh;
  }

  h3,
  h2 {
    margin: 10px 0 10px 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 19px;
  }

  @media (max-width: 900px) {
    div {
      width: 100%;
    }

    iframe {
      height: 35vh;
    }

    h2 {
      font-size: 1.5rem;
      margin: 15px 2% 15px 2%;
    }

    h3 {
      margin: 0 2% 0 2%;
    }

    p {
      margin: 0 2% 15px 2%;
    }
  }

  /* 𝟹𝟸0𝚙𝚡 - 𝟺𝟾0𝚙𝚡: 𝙳𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘𝚜 𝚖𝚘𝚟𝚎𝚒𝚜 */
  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
      text-align: end;
    }

    h3 {
      font-size: 16px;
      margin: 10px 0 10px 2%;
    }

    p {
      font-size: 12px;
    }
  }

  /* 𝟺𝟾𝟷𝚙𝚡 - 𝟽𝟼𝟾𝚙𝚡: 𝚃𝚊𝚋𝚕𝚎𝚝𝚜 */
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
      margin: 10px 0 10px 2%;
    }

    p {
      font-size: 14px;
    }
  }
`;
