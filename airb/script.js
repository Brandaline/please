function filterByCity(targetCity, listingCityArray) {
  const lowerCasedTargetCity = targetCity.toLowerCase();
  return listingCityArray.reduce((acc, city, index) => {
    if (city.toLowerCase() === lowerCasedTargetCity) {
      acc.push(index);
    }
    return acc;
  }, []);
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  return listingPriceArray.reduce((acc, price, index) => {
    if (price >= minPrice && price <= maxPrice) {
      acc.push(index);
    }
    return acc;
  }, []);

}


function filterByTypes(targetTypes, listingTypeArray) {
  return listingTypeArray.reduce((acc, type, index) => {
    if (targetTypes.includes(type)) {
      acc.push(index);
    }
    return acc;
  }, [])

}