import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Text from "../../components/Text";
import Card from "../../components/Card";

import data from "../../data/data.json";

import * as S from "./style";

export default function index() {
  return (
    <>
      <Header />
      <Banner />
      <Text texto="Artigos recomendados" />
      <S.Container>
        <section>
          {data.map((e) => (
            <Card
              title={e.title}
              description={e.info}
              imagem={e.imagem}
              id={e.id}
            />
          ))}
        </section>
      </S.Container>
      <Footer />
    </>
  );
}
