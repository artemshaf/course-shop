import { AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import './style.css';

function Menu({categories}) {
    const [activeIndex, setActive] = useState(0);

    return (
        <div className="animate-menu"
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