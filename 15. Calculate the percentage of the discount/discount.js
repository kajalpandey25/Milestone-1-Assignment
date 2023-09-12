let percentageOfTheDiscount = (products) => {
    let discountPercentage = [];
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      discountPercentage.push(
        Math.floor(
          ((product.originalPrice - product.discountedPrice) /
            product.originalPrice) *
            100
        ) + "%"
      );
    }
    return discountPercentage;
  };
  
  let products = [
    { originalPrice: 50, discountedPrice: 30 },
    { originalPrice: 30, discountedPrice: 15 },
    { originalPrice: 1150, discountedPrice: 120 },
    { originalPrice: 80, discountedPrice: 50 },
  ];
  console.log(percentageOfTheDiscount(products));