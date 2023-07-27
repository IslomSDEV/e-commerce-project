import React, { useEffect } from "react";
import Like from "../../components/Like/Like";
import Products from "../Home/components/Products/Products";
import Card from "../../components/Card/Card";
import qaychi from "../../assets/qaychi.png";
import "./LikePage.css";
import { useQuery } from "react-query";
import { API_URL, getLikeProductData } from "../../api";
import { Box, CircularProgress } from "@mui/material";

function LikePage() {
  const { data, isLoading, isError } = useQuery("likeData", getLikeProductData);

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={"80vh"}>
        <CircularProgress
          color="success"
          style={{ width: "100px", height: "100px" }}
        />
      </Box>
    );
  }

  console.log(data)
  return (
    <div>
      <Like />
      <div className="like">
        <div className="container">
          <div className="product-list">
            <h2 className="product-name">TANLANGANLAR</h2>
          </div>
          <div className="products">
            <Card title="Bog’ingiz uchun jihozalar" img={qaychi} link="Eski" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikePage;
