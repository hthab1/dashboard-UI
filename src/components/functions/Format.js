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

export function TimeFormat(value) {

  const date = new Date(value);

  let hour = date.getHours()
  let stamp = hour > 12 ? "PM" : hour === 0 ? "PM" : "AM"
  hour = hour > 12 ? hour - 12 : hour
  let minute = date.getMinutes()
  minute = minute < 10 ? `0${minute}` : minute

  return hour + ":" + minute + " " + stamp;
}

export function DateFormat(value) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(value);
  let month = months[date.getMonth()];
  let day = date.getDate();

  return day + " " + month;
}

export function FullDateFormat(value) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(value);
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();

  const formattedDate = day + " " + month + ", " + year;

  return formattedDate;
}
