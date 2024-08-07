import React, { useContext, useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGroup from "./components/ProductGroup";
import CategoryGroup from "./components/CategoryGroup";
import Spacer from "./components/Spacer";
import CartDrawer from "./components/CartDrawer";
import { DataContext } from "./context/DataContext";

const App = () => {
  const { cartDrawer } = useContext(DataContext);

  return (
    <Layout>
      <Header />
      <Spacer size={100} />
      <CategoryGroup />
      <ProductGroup />
      <Footer />
      {cartDrawer && <CartDrawer />}
    </Layout>
  );
};

export default App;
