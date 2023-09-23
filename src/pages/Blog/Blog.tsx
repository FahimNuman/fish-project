import React from "react";
import Latest from "../../components/Blog/Latest";
import LatestArticle from "../../components/Blog/LatestArticle";
import MovieTrailer from "../../components/Blog/MovieTrailer";

export default function Blog() {
  return (
    <div className="xl:max-w-layout max-w-5xl mx-auto">
      <Latest />
      <LatestArticle />
      <MovieTrailer />
    </div>
  );
}
