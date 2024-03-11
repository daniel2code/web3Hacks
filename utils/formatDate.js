import moment from "moment";

export function formatDate(timestamp) {
  const date = moment(timestamp);
  return date.format("MMMM DD, YYYY");
}