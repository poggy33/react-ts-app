import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next"; //i18next

const MyTypography = styled(Typography)(() => ({
  color: "white",
  margin: "20px 50px 20px 30px",
}));

export default function Profile({ isLoggedIn }: any) {
  const { t } = useTranslation(); //i18n
  const navigate = useNavigate();

  useEffect(() => {
    let userPassword = localStorage.getItem("admin");
    if (!userPassword || userPassword !== "12345") {
      navigate("/");
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 144px)",
        padding: "20px 0",
        backgroundImage: `url("/images/profile.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <MyTypography variant="h6">{t("text1")}</MyTypography>
      <MyTypography variant="h6">{t("text2")}</MyTypography>
      <MyTypography variant="h6">{t("text3")}</MyTypography>
    </Box>
  );
}
