import { Box, Divider, List, ListItem } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { styled } from "@mui/material/styles";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./product.css";
import { useState } from "react";

const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: "grey",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export function RelatedProducts({ products = [] }) {
  const [show, setShow] = useState(false);

  const list = () => {
    return (
      <Box sx={"bottom"} role="presentation">
        <List>
          {products.map(({ imgUrl, title, price }) => (
            <>
              <ListItem key={title} disablePadding>
                <div className="product__item">
                  <img src={imgUrl} />
                  <h3>{title}</h3>
                  <h4>${price}</h4>
                </div>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    );
  };

  const ShopButton = () => <LocalOfferIcon onClick={() => setShow(true)} />;

  const toggleDrawer = (event) => (state) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShow(state);
  };

  return (
    <>
      <ShopButton />
      <SwipeableDrawer
        anchor={"bottom"}
        open={show}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={56}
      >
        <Puller />
        {list()}
      </SwipeableDrawer>
    </>
  );
}
