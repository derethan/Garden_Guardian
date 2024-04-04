import { Box } from "@mui/material";

import IconSeedling from "../../assets/iconSeedling.png";

const SeedlingIcon = () => (
    <Box component='img' src={IconSeedling} alt='Seedling Icon' sx={{
        width: "36px",
        height: "36px",
        ml: "auto",
        mr: "auto",
    }} />
);

export default SeedlingIcon;