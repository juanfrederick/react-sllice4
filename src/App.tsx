import { useState } from "react";
import Navigation from "./Fragments/Navigation";
import Jumbotron from "./Fragments/Jumbotron";
import FigurePart from "./Fragments/FigurePart";
import QuestionPart from "./Fragments/QuestionPart";
import HalfImagePart from "./Fragments/HalfImagePart";
import ReviewPart from "./Fragments/ReviewPart";
import FullImagePart from "./Fragments/FullImagePart";
import CardPart from "./Fragments/CardPart";
import ContentDivider from "./Fragments/ContentDivider";
import Footer from "./Fragments/Footer";

function App() {
  return (
    <div className="h-[200vh] font-nunito">
      <Navigation />
      <Jumbotron />
      <FigurePart />
      <QuestionPart />
      <HalfImagePart />
      <ReviewPart />
      <FullImagePart />
      <CardPart />
      <ContentDivider />
      <Footer />
    </div>
  );
}

export default App;
