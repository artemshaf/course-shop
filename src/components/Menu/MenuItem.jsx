import { motion } from "framer-motion";

function MenuItem(props) {
    const { item, isSelected, handleClick = Function.prototype } = props;

    return (
        <motion.div
            onClick={handleClick}
            style={{
                margin: "0 1rem",
                fontWeight: 900,
                position: "relative",
                cursor: "pointer",
            }}
            initial={{ color: "#000" }}
            animate={{ color: isSelected ? "rgb(53, 60, 160)" : "#000" }}
        >
            {isSelected && <ActiveLine />}
            {item}
        </motion.div>
    );
}

function ActiveLine() {
    return (
        <motion.div

            layoutId="activeItem"
            style={{
                width: "calc(100% - 10px)",
                height: "4px",
                position: "absolute",
                bottom: "-6px",
                left: "5px",
                backgroundColor: "rgb(53, 60, 160)",
            }}
        />
    );
}

export default MenuItem;
