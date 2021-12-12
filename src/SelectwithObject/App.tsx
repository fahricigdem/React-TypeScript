import { ModelCombo } from "./ModelCombo";
//import { ModelSelect } from "./ModelSelect";
import { ModelSelect2 } from "./ModelSelect2";
import { posts } from "./postalcodes";
import { PostalCombo } from "./PostalCombo";

export const App = () => {
  return (
    <div>
      <ModelCombo />
      <PostalCombo postalcodes={posts} />
      <br />
      <br />
      <br />
      <br />
      <ModelSelect2 />
    </div>
  );
};
