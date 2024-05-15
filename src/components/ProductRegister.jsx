const ProductRegister = () => {
  return (
    <div className="container">
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Title</label>
        <input type="text" placeholder="Title" />
        <label htmlFor="">Description</label>
        <textarea name="" id=""></textarea>
        <label htmlFor="">Category</label>
        <select name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Size</label>
        <select name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Color</label>
        <select name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Gender</label>
        <select name="" id="">
          <option value=""></option>
        </select>
        <label htmlFor="">Price</label>
        <input type="text" placeholder="Price" />
        <button>Upload</button>
      </form>
    </div>
  );
};

export default ProductRegister;
