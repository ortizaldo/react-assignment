import slugify from "slugify";
const slugWithId = (title, id) => {
  const slug = `${slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })}-${id}`;

  return slug;
};
export default slugWithId;
