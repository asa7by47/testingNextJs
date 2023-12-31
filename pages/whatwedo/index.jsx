import React from "react";
import style from "./whatwedo.module.css";
import Image from "next/future/image";
import one from "../../public/item1.jpg";
import Head from "next/head";
const WhatWeDo = ({ whatWeDoData, seoData }) => {
  return (
    <>
      <Head>
        <title>
          {seoData[5].name.charAt(0).toUpperCase() +
            seoData[5].name.slice(1).replace("-", " ").replace("-", " ")}
        </title>
        <meta
          name="description"
          content={seoData[5].seo_fields.meta_description}
        />
        <meta name="title" content={seoData[5].seo_fields.meta_title} />
      </Head>
      <section className={`px-3 pt-4 ${style.whatWeDoPage} px-lg-5`}>
        {whatWeDoData.map((data) => (
          <div key={data.id}>
            {data.id != 5 && (
              <div key={data.id}>
                <h1 className="primary-color pb-4">
                  {data.id != 5 && data.name}
                </h1>
                <div
                  className={`${data.id == 1 && style.whatWeDoGridRetail} ${
                    data.id == 2 && style.whatWeDoGridEntertainment
                  } ${data.id == 3 && style.whatWeDoGridResidential}
            ${data.id == 4 && style.whatWeDoGridOffices}
            `}
                  id={data.name}
                >
                  {data.items.map((item) => (
                    <div
                      className={`${style.whatWedo_item} whatWedo_item${item.id} position-relative bg-danger`}
                      key={item.id}
                    >
                      <Image
                        className={`${style.hover} w-100 h-100 object-fit-cover`}
                        alt="one"
                        src={item.image}
                        width={500}
                        height={500}
                      />
                      <div
                        className={`position-absolute bottom-0 px-2 p-lg-4 ${style.bgOverlay}`}
                      >
                        <h6 className="text-white mb-2 mb-lg-3">
                          {item.title}
                        </h6>
                        <div className={`${style.hiddenParagraph}`}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                            className="text-white mb-2"
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default WhatWeDo;
export const getStaticProps = async () => {
  const whatWeDoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/what-we-do/"
  );
  const whatWeDoData = await whatWeDoRes.json();

  // SEO
  const seoRes = await fetch(
    "https://backend-staging-marakez.bit68.com/en/api/pages-seo/"
  );
  const seoData = await seoRes.json();
  if (!whatWeDoData) {
    return {
      props: {
        whatWeDoData: [],
      },
    };
  }
  return {
    props: {
      whatWeDoData,
      seoData,
    },
  };
};
