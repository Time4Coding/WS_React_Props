import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Item({ item: { url, name, price, description } }) {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price} $</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

Item.defaultProps = {
  item: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png",
    name: "foulen",
  },
};
