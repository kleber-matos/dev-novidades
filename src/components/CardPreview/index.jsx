import * as S from "./style";

export default function index({ video, description, title }) {
  return (
    <S.Section>
      <div>
        <h2>{title}</h2>
        <iframe
          src={video}
          title="This entire Ad was written by ChatGPT (for ChatGPT)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h3>Descrição</h3>
        <p>{description}</p>
      </div>
    </S.Section>
  );
}
