import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import Header from "../../components/Header";
import Text from "../../components/Text";
import CardPreview from "../../components/CardPreview";

export default function index() {
  const { id } = useParams();

  const selecioando = data.find((e) => e.id == id);
  console.log(selecioando);

  return (
    <>
      <Header />
      <Text texto={selecioando.title} />

      <CardPreview
        video={selecioando.video}
        description={selecioando.description}
      />
    </>
  );
}
