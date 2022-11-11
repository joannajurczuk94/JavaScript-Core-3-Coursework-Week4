function sales(carsSold) {
  let totals = {};
  carsSold.forEach((el) => {
    if (el.make !== totals[el.make]) {
      totals[el.make] = 0;
    }
  });

  carsSold.forEach((el) => {
    totals[el.make] += el.price;
    return totals;
  });
  return totals;
}

module.exports = sales;
