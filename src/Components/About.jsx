import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil
          ratione porro tempore beatae quia atque labore sit velit temporibus.
          Sunt provident maiores unde sequi assumenda, odit voluptatibus fugiat
          illo. Sint maxime vero cumque nihil quaerat provident ullam deserunt
          ut quidem impedit autem atque neque eos exercitationem ducimus
          praesentium minima est sed cum consequatur, earum rerum totam harum?
          Facere, vel. Nihil aut iusto excepturi consectetur asperiores possimus
          laboriosam provident esse similique vero placeat mollitia eius,
          corporis reprehenderit officiis distinctio magni ex quasi accusamus
          nam in quo quos eaque pariatur? Aliquam. Dolore id unde velit amet
          quos in, laboriosam mollitia, illum iusto, natus animi necessitatibus
          fugiat rerum ab distinctio quae dicta placeat numquam ex quidem
          laborum libero harum ad. Consectetur, quia. Fugiat libero hic
          voluptatum dolore? Placeat ipsum, eaque voluptatibus nostrum esse
          possimus neque animi fuga? Blanditiis reprehenderit quasi architecto
          assumenda eaque veritatis consequatur corrupti. Sint non assumenda
          culpa minus reiciendis. Earum cumque reiciendis ipsam aut quis! Culpa
          possimus labortis atque, laudantium voluptatem unde fuga quam rerum
          odio maiores ab molestiae quos dolorem eligendi officia voluptatum id
          esse perspiciatis. Aut quos pariatur incidunt reiciendis nisi quod.
        </p>
      </div>
    </div>
  );
};

export default About;
