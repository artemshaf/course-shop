import { AppBar, Badge, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountBox, ShoppingBasket } from "@mui/icons-material";

const Header = () => {
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
                >
                    <AccountBox/>
                </IconButton>
                <IconButton
                    color="inherit"
                    
                >
                    <Badge
                        color="secondary"
                        
                    >
                    <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
