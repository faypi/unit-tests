export const hashtags = (text) => text = text.match(/#\w+/gm);

// export const hashtags = (text) => {
//   return text.split(' ').filter(word => word.startsWith('#'))
// }

// export const hashtags = (text) => {
//   return text.split(" ").filter((word) => word.charAt(0) === "#");
// };