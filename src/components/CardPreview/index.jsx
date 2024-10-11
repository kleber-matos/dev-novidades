import * as S from "./style";

export default function index({ video, description }) {
  return (
    <S.Section>
      <div>
        <iframe
          src={video}
          title="This entire Ad was written by ChatGPT (for ChatGPT)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h2>Descrição</h2>
        <p>{description}</p>
      </div>
    </S.Section>
  );
}
