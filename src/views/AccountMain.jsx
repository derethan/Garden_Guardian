import { useTheme, useMediaQuery } from "@mui/material";

import { useAuth } from "../hooks/useAuthProvider";
import ProfileInfoBanner from "../components/myAccount/ProfileInfoBanner";
import AccountSettingsBanner from "../components/myAccount/AccountSettingsBanner";
import LinkedDevicesBanner from "../components/myAccount/LinkedDevicesBanner";

const AccountMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { user, hasDevice, devices } = useAuth();
  

  return (
    <>
      <ProfileInfoBanner user={user} isMobile={isMobile} />
      <AccountSettingsBanner user={user} isMobile={isMobile} />
      <LinkedDevicesBanner hasDevice={hasDevice} devices={devices}/> 
    </>
  );
};

export default AccountMain;
