export const Word = ({ children, verse }) => {
  return (
    <figure>
      <blockquote className="">
        <p>{children}</p>
      </blockquote>
      <figcaption class="blockquote-footer">{verse}</figcaption>
    </figure>
  );
};
