import { Pagination } from "@mui/material";

const PaginationItem = (props) => {
    const { page, pageQty, setPage } = props;

    return (
        <div style={{marginLeft: "auto", marginRight: "auto"}}>
            {!!pageQty && (
                <Pagination
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    showFirstButton
                    showLastButton
                />
            )}
        </div>
    );
};

export default PaginationItem;
