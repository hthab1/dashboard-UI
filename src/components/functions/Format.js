export function NumberFormat(number) {
  if (typeof number === "string") {
    return parseFloat(number)
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export function MoneyFormat(number) {
  if (typeof number === "string") {
    return (
      "\u20A6" +
      parseFloat(number)
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  } else {
    return "\u20A6" + number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export function MoneyFloatFormat(number) {
  if (typeof number === "string") {
    return (
      "\u20A6" +
      parseFloat(number)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  } else {
    return "\u20A6" + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
