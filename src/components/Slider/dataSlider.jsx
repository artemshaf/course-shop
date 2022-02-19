import { v4 as uuidv4 } from "uuid";

const dataSlider = [
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + `/imgs/slider/1.jpg`,
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + `/imgs/slider/2.jpg`,
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + `/imgs/slider/3.jpg`,
    },
    {
        id: uuidv4(),
        src: process.env.PUBLIC_URL + `/imgs/slider/4.jpg`,
    },
];

export default dataSlider;
