import Image from "next/future/image";
import React from "react";
import style from "./news.module.css";

const News = ({ newsData }) => {
  // index [0]
  const description = newsData[0].description;
  const descriptionParagraphs = description
    .replace("</p>", "")
    .replace("&nbsp;", "")
    .replace("&nbsp;", "")
    .replace("</p>", "")
    .replace("</p>", "")
    .replace("</p>", "")
    .replace("&nbsp;", "")
    .split("<p>");
  const filteredParagraphs = descriptionParagraphs.filter(
    (p) => p.trim() !== ""
  );
  const paragraphs = filteredParagraphs.map((p, index) => (
    <p  key={index}>{p}</p>
  ));
  // index [1]
  const descriptionOne = newsData[1].description;
  const descriptionOneParagraphs = descriptionOne
    .replace("</p>", "")
    .replace("&nbsp;", "")
    .replace("&nbsp;", "")
    .replace("</p>", "")
    .replace("</p>", "")
    .replace("</p>", "")
    .replace("&nbsp;", "")
    .split("<p>");
  const filteredParagraphsOne = descriptionOneParagraphs.filter(
    (m) => m.trim() !== ""
  );
  const paragraphsOne = filteredParagraphsOne.map((m, index) => (
    <p className="mt-1" key={index}>{m}</p>
  ));
  // index [2]
  const descriptionTwo = newsData[2].description;
  const descriptionTwoParagraphs = descriptionTwo
    .replace("</p>", "")
    .replace("&nbsp;", "")
    .replace("&nbsp;", "")
    .replace("</p>", "")
    .replace("</p>", "")
    .replace("</p>", "")
    .replace("&nbsp;", "")
    .split("<p>");
  const filteredParagraphsTwo = descriptionTwoParagraphs.filter(
    (m) => m.trim() !== ""
  );
  const paragraphsTwo = filteredParagraphsTwo.map((m, index) => (
    <p className="mt-1" key={index}>{m}</p>
  ));

  console.log(newsData[1].description);
  return (
    <div className={`px-3 w-100 ${style.news_bg}`}>
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <h1 className="primary-color my-3"> Magazine</h1>

            <div className="col-12 position-relative">
              <Image
                width={500}
                height={300}
                src={newsData[0].image}
                alt={newsData[0].image_alt}
                className="w-100 h-100"
              />
              <div className="position-absolute bottom-0 h-100">
                <div
                  className={`m-auto d-flex flex-column justify-content-end pb-5 align-align-items-end h-100 text-white fs-5 ${style.overlayText}`}
                >
                  {paragraphs}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
             <div className="h-100 d-flex flex-column justify-content-center">
             {paragraphsOne} 
             </div>
              
            </div>
            <div className="col-md-5">
              <Image width={500} height={500} alt="ss" src={newsData[1].image} className="w-100" />
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-5">
          
             <Image width={500} height={500} alt="ss" src={newsData[2].image} className="w-100" />

            </div>
            <div className="col-md-7">
            <div className="h-100 d-flex flex-column justify-content-center">
             {paragraphsTwo} 
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
export const getStaticProps = async () => {
  const newsRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/latest-news/"
  );
  const newsData = await newsRes.json();
  if (!newsData) {
    return {
      props: {
        newsData: [],
      },
    };
  }
  return {
    props: {
      newsData,
    },
  };
};
