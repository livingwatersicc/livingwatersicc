import Image from "react-bootstrap/Image";

export const Tony = () => {
  return (
    <>
      <p>
        Tony was born in the small town of Vaiyampatti, Tamil Nadu, India. He
        moved to New Zealand in 2003 to pursue higher education. Although raised
        as a Christian, he came to know the Lord personally only after joining
        the Dunedin Prayer Warriors group in 2018, and was baptized in 2022.
      </p>

      <p>
        Tony believes he is called to serve the Lord through acts of service.
      </p>

      <figure className="figure">
        <Image
          src="/people/elder2.jpeg"
          className="w-75"
          rounded
          alt="Lead minister"
        />
        <figcaption className="figure-caption">
          Tony, his wife Rexy, and their children, Rohan and Ria, are active
          members of the Living Waters church.
        </figcaption>
      </figure>
    </>
  );
};
