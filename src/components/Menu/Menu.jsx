import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import MenuItem from "./MenuItem";
import './style.css';

function Menu({categories}) {
    const [activeIndex, setActive] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "fit-content",
                backgroundColor: "#eee",
                padding: "1rem",
                borderRadius: "25px",
                margin: "20px auto",
            }}
        >
            <AnimateSharedLayout>
                {categories.map((item, index) => (
                    <MenuItem 
                        key={item} 
                        item={item} 
                        isSelected={activeIndex === index} 
                        handleClick={() => setActive(index)} 
                    />
                ))}
            </AnimateSharedLayout>
        </div>
    );
}

export default Menu;