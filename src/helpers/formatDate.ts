//format dates into MM/DD/YYYY If date is invalid will return an empty
export default function formatDate(
  date: string = "Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)"
) {
  let d = new Date(date);
  if (d instanceof Date && !isNaN(d.valueOf())) {
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  } else {
    return "";
  }
}
