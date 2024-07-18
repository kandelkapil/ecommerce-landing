import React, { useState } from "react";
import {
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  CategoryTabs,
  CategoryTab,
  ActiveCategoryTab,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductDetails,
  ProductName,
  ProductBrand,
  ProductReviews,
  ProductPrice,
  ProductStatus,
  StatusIndicator,
  StatusText,
  ViewMoreButton,
} from "./NewArrivalsSection.Styled";
import { Products, productTabs } from "./constants";

const NewArrivalsSection = () => {
  const [state, setState] = useState(productTabs?.[1]?.identity);
  const products = Products?.[state] || Products?.[1];

  return (
    <SectionWrapper id="new-arrivals">
      <SectionTitle>New Arrivals</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </SectionDescription>
      <CategoryTabs>
        {productTabs.map((item) => (
          <React.Fragment key={item.identity}>
            {item.identity === state ? (
              <ActiveCategoryTab onClick={() => setState(item.identity)}>
                {item?.name}
              </ActiveCategoryTab>
            ) : (
              <CategoryTab onClick={() => setState(item.identity)}>
                {item?.name}
              </CategoryTab>
            )}
          </React.Fragment>
        ))}
      </CategoryTabs>
      <ProductGrid>
        {products?.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductReviews>{product.reviews}</ProductReviews>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductDetails>
              <ProductStatus>
                <StatusIndicator
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c61eec141392ff354bf8f3b4dbdf5c9655fdba9bed43b3e2db05468c7cfe956?apiKey=f85969f40c2d40348177d09483dc30e5&"
                  alt="Product status"
                />
                <StatusText>Almost Sold Out</StatusText>
              </ProductStatus>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
      <ViewMoreButton>View More</ViewMoreButton>
    </SectionWrapper>
  );
};

export default NewArrivalsSection;
