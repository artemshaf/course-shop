import { data } from "./store/data";
import { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import MenuItem from "./components/Menu/MenuItem";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography, Container } from "@mui/material";
import "./components/Menu/style.css";
import "./components/Products/style.css";
import "./index.css";
import PaginationItem from "./components/Products/PaginationItem";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

const Products = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState(data);
    const [activeIndex, setActive] = useState(0);
    const [search, setSearch] = useState("");
    //pagination
    const [pageProducts, setPageProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);
    //order
    const [order, setOrder] = useState([]);
    //basket
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSnackOpen, setIsSnackOpen] = useState(false);

    const addToOrder = (productsItem) => {
        console.log(productsItem);
        let quantity = 1;

        const indexInOrder = order.findIndex((item) => item.id === productsItem.id);

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(
                order.map((item) => {
                    if (item.id !== productsItem.id) return item;

                    return {
                        id: productsItem.id,
                        title: productsItem.title,
                        descr: productsItem.descr,
                        price: productsItem.price,
                        src: productsItem.src,
                        quantity,
                    };
                })
            );
        } else {
            setOrder([
                ...order,
                {
                    id: productsItem.id,
                    title: productsItem.title,
                    descr: productsItem.descr,
                    price: productsItem.price,
                    src: productsItem.src,
                    quantity,
                },
            ]);
        }

        //setIsSnackOpen(true);
    };

    const removeFromOrder = (productsItem) => {
        setOrder(order.filter((item) => item.id !== productsItem));
    };

    useEffect(() => {
        setPageQty(Math.ceil(products.length / 16));
        setPageProducts(products.slice((page - 1) * 16, page * 16));
    }, [page]);

    useEffect(() => {
        setPageQty(Math.ceil(products.length / 16));
        setPageProducts(products.slice((page - 1) * 16, page * 16));
        setPage(1);
    }, [activeIndex]);

    const searchProduct = (e) => {
        if (!e.target.value) {
            setProducts(data);
            setSearch("");
            return;
        }

        setSearch(e.target.value);
        setPageProducts(pageProducts.filter((data) => data.title.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    useEffect(() => {
        const categ = data.reduce(
            (acc, el) => {
                if (acc.includes(el.category)) return acc;

                return [...acc, el.category];
            },
            ["Все товары"]
        );

        setCategories(categ);
    }, [products]);

    const handleFilter = (selector) => {
        if (selector === "Все товары") {
            setProducts(data);
            return;
        }

        setProducts(data.filter((el) => el.category === selector));
    };

    return (
        <>
            <Header handleCart={() => setIsCartOpen(true)} orderLength={order.length} />
            <Slider />
            <div className="animate-menu">
                <AnimateSharedLayout>
                    {categories.map((item, index) => {
                        return (
                            <MenuItem
                                key={item}
                                item={item}
                                handleClick={() => {
                                    handleFilter(item);
                                    setActive(index);
                                }}
                                isSelected={activeIndex === index}
                            />
                        );
                    })}
                </AnimateSharedLayout>
            </div>
            <Container>
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        {pageProducts.map((el) => {
                            const { src, category, descr, price, title, id } = el;

                            return (
                                <Grid item xs={6} sm={4} md={3} className="card" key={id}>
                                    <Card sx={{ height: "100%" }}>
                                        <CardMedia component="img" image={src} alt={category} height="140" />
                                        <CardContent>
                                            <div className="card-title">
                                                <Typography variant="h6" component="h3" sx={{ fontSize: "16px", fontWeight: 900 }}>
                                                    {title}
                                                </Typography>
                                            </div>
                                            <div className="card-descr">
                                                <Typography variant="body1">{descr}</Typography>
                                            </div>

                                            <Typography variant="h6">Цена: {price} руб.</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <div className="card-btn">
                                                <Button
                                                    onClick={() =>
                                                        addToOrder({
                                                            id,
                                                            title,
                                                            descr,
                                                            price,
                                                            src,
                                                        })
                                                    }
                                                >
                                                    Купить
                                                </Button>
                                            </div>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <PaginationItem page={page} pageQty={pageQty} setPage={setPage} />
                    <Basket order={order} removeFromOrder={removeFromOrder} cartOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
                </Stack>
            </Container>
        </>
    );
};

export default Products;
