import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Haircare"
          title="Haircare"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Skincare"
          title="Skincare"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Food"
          title="Food"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Extras"
          title="Extras"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
