import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export default function timeAgo(published) {
  published = new Date() - new Date(published);
  return new TimeAgo("en-US").format(new Date() - published);
}
