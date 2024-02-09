import { red } from "@mui/material/colors";

function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name} </h1>
      <h6 style={{ marginTop: "0px" }}>{content} </h6>
      <i>
        <p style={{ color: "red", marginTop: "50px", fontWeight: "700" }}>
          {" "}
          {price} TL{" "}
        </p>{" "}
      </i>
    </div>
  );
}

export default MenuItem;
