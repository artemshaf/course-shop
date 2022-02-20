import { AppBar, Badge, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountBox, ShoppingBasket } from "@mui/icons-material";

const Header = ({handleCart,orderLength}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    Магазин концелярии
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    {/* <AccountBox/> */}
                </IconButton>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={
                            orderLength
                        }
                    >
                    <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
