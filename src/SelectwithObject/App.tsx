import { ModelCombo } from "./ModelCombo";
import { posts } from "./postalcodes";
import { PostalCombo } from "./PostalCombo";

export const App = () => {
  return (
    <div>
      <ModelCombo />
      <PostalCombo postalcodes={posts} />
    </div>
  );
};
