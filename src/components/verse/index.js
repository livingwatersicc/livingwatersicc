import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const Word = ({ children, verse }) => {
  return (
    <figure>
      <blockquote className="">
        <p>
          <em>{children}</em>
        </p>
      </blockquote>
      <figcaption className="blockquote-footer">{verse}</figcaption>
    </figure>
  );
};

export const Reference = ({ children, verse }) => {
  const renderTooltip = props => <Tooltip {...props}>{verse}</Tooltip>;
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}>
      <span className="text-nowrap">{children}</span>
    </OverlayTrigger>
  );
};
