import CardPreview from "../../components/CardPreview";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import data from "../../data/data.json";

export default function index() {
  const { id } = useParams();
  const selecioando = data.find((e) => e.id == id);

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
