import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";

const CardItem = (props) => {
    const { category, title, src, price, descr } = props;

    return (
        <Grid>
            <Card sx={{ height: "100%" }}>
                <CardMedia component="img" image={src} alt={category} height="140" />
                <CardContent>
                    <Typography variant="h6" component="h3">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {descr}
                    </Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        // onClick={() =>
                        //     setOrder({
                        //         id: props.id,
                        //         name: props.name,
                        //         price: props.price,
                        //     })
                        // }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardItem;
