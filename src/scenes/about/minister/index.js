import { Image } from "react-bootstrap";

import { Wrapper } from "components/wrapper";

export const Minister = () => {
  return (
    <Wrapper>
      <p>
        Prasath is the lead minister of the Living Waters church. Prasath was
        born in a small town Vellore, in southern India and moved to New Zealand
        in 2008 to study at the University of Otago.
      </p>
      <p>
        Prasath was born and grew up in a christian family; yet he was not saved
        until 2013. He came to the conviction that being born in a christian
        family or going to church regularly does not make one a christian but
        being born again of God (John 1:13).
      </p>
      <p>
        By the grace and mercy of God, he was serving as the primary preaching
        elder of a home church (Dunedin Prayer Warriors) in Dunedin. Initially
        (2018-2022), he only was a facilitator of Bible study for this group,
        which met fortnightly. In 2022, he sensed the call to shepherd a church
        in the city with teaching, preaching & pastoral care. He is currently
        pursuing a theological degree (https://apcbiblecollege.org/) to further
        equip himself in the ministry of God.
      </p>
      <p>
        Additionally, since April 2023, he has been actively assisting Pastor
        Sujan at Peniel IPC Dunedin in worship and delivering the Word of God
        upon request.
      </p>

      <figure className="figure">
        <Image
          src="minister1.png"
          className="w-75"
          rounded
          alt="Lead minister"
        />
        <figcaption className="figure-caption">
          Prasath is married to Leema and they have three school-age children
          Adrian, Austin and Salomi.
        </figcaption>
      </figure>
      <p>
        Leema supports Prasath in his pastoral ministry and leads the women's
        and youth ministry of the church.
      </p>
      <p>Supporting elders and their family</p>
    </Wrapper>
  );
};
