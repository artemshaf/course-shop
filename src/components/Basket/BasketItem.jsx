import { Close } from "@mui/icons-material";
import { Grid, IconButton, ListItem, Typography } from "@mui/material";
import { fontSize } from "@mui/system";

const flexContainer = {
    display: "flex",
    juctifyContent: "start",
    flexDirection: "column",
    padding: 0,
};
const BasketItem = ({ removeFromOrder, id, title, price, descr, quantity,src}) => {
    return (
        <ListItem style={flexContainer}>
            <Typography
                className="basket-title"
                variant="h6"
            >
                {title} 
            </Typography>
            <img src={src} className="basket-img"/>
            <Typography
                variant="span"
                sx={{fontSize: "14px", fontWeight: 900}}
            >
                {price} руб x {quantity} штук
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;
