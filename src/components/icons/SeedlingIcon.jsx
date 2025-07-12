import { Box } from "@mui/material";
import { SvgIcon } from "@mui/material";

const SeedlingIcon = (props) => (
  <SvgIcon xmlns="http://www.w3.org/2000/svg" 
{...props}
  viewBox="0 0 80.000000 80.000000" 
  preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,80.000000) scale(0.050000,-0.050000)" stroke="none">
      <path
        d="M1279 1480 c-126 -21 -275 -102 -360 -193 -129 -139 -127 -131 -51
-244 38 -56 75 -130 82 -165 14 -60 17 -62 94 -50 279 45 556 374 556 663 0
14 -219 6 -321 -11z"
      />
      <path
        d="M14 1215 c36 -294 289 -550 583 -592 l93 -13 10 -227 c10 -225 31
-283 104 -283 91 0 128 292 77 606 -60 366 -357 594 -772 594 l-105 0 10 -85z"
      />
    </g>
  </SvgIcon>
);

export default SeedlingIcon;

// <Box component='img' src={IconSeedling} alt='Seedling Icon' sx={{
//     width: width,
//     height: height,
//     ml: "auto",
//     mr: "auto",
// }} />
