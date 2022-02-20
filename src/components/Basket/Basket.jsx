import { ShoppingBasket } from "@mui/icons-material";
import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import BasketItem from "./BasketItem";
import "./style.css";

const Basket = (props) => {
    const { cartOpen, closeCart, order = [], removeFromOrder } = props;
    console.log(order);
    return (
        <>
            <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
                <List sx={{ width: "400px" }}>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingBasket />
                        </ListItemIcon>
                        <ListItemText primary="Корзина товаров:" />
                    </ListItem>
                    <Divider />

                    {!order.length ? (
                        <ListItem>Корзина пуста!</ListItem>
                    ) : (
                        <>
                            {order.map((item) => {
                                return (
                                    <>
                                        <BasketItem key={item.id} removeFromOrder={removeFromOrder} {...item} />
                                        <Divider />
                                    </>
                                );
                            })}
                            <ListItem>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Общая стоимость:{" "}
                                    {order
                                        .reduce((acc, item) => {
                                            return acc + item.price * item.quantity;
                                        }, 0)
                                        .toFixed(2)}{" "}
                                    рублей.
                                </Typography>
                            </ListItem>
                        </>
                    )}
                </List>
            </Drawer>
        </>
    );
};

export default Basket;
