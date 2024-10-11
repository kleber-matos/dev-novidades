import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import Header from "../../components/Header";
import Text from "../../components/Text";
import CardPreview from "../../components/CardPreview";
import Footer from "../../components/Footer";

export default function index() {
  const { id } = useParams();

  const selecioando = data.find((e) => e.id == id);
  console.log(selecioando);

  return (
    <>
      <Header />

      <CardPreview
        title={selecioando.title}
        video={selecioando.video}
        description={selecioando.description}
      />
    </>
  );
}
