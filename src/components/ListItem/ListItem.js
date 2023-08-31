import React from "react";
import Item from "../item/Item";
import items from "../../db/items.json";

export default function ListItem() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map((item, id) => (
        <Item item={item} key={id} />
      ))}
    </div>
  );
}
