import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome to the simple POS for small business</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptate neque consequatur, cumque soluta distinctio
          dolores minima animi quasi tempora, sapiente perspiciatis
          iusto excepturi odio provident, natus sed delectus
          laboriosam necessitatibus.
        </p>
        <p>If you have an issue, call 443-444-xxxx anytimes</p>
        <Link to="/pos" className="btn btn-primary">
          Click here to sell products
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
