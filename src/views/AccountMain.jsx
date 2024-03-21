import { useTheme, useMediaQuery } from "@mui/material";

import { useAuth } from "../hooks/useAuthProvider";
import ProfileInfoBanner from "../components/myAccount/ProfileInfoBanner";

const AccountMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = useAuth();

  return <ProfileInfoBanner user={user} isMobile={isMobile} />;
};

export default AccountMain;
