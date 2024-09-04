import Image from "next/image";
import React from "react";
import CourseSlider from "./CourseSlider";

export default function SingleCourseProp({data }) {
  console.log("data: ", data);
  return (
    <>
      <div className="col-lg-12">
        {/* {data.map((data, index) => ( */}
        <div className="modern-course-features-box-new h-100">
          <div className="inner">
            <div className="thumbnail">
              <Image
                src={data.content1?.img}
                width={604}
                height={408}
                alt="Image"
              />
            </div>
            <div className="content">
              <h2 className="title" style={{fontWeight:"normal"}}>{data?.content1?.title}</h2>
              <p>{data?.content1?.desc}</p>
              <ul className="course-feature-list ">
                {data?.content1?.imgs?.map((list, i) => (
                  <li key={i}>
                    <div className="flex flex-start">
                      <Image
                        src={list}
                        width={"100%"}
                        height={'100%'}
                        alt="Icon Image"
                      />
                    </div>
                    {/* <div className="feature-content">
                          <h4 className="featute-title">
                            {list.num}K+ <span>{list.text}</span>
                          </h4>
                        </div>  */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>

      <div className="col-lg-6">
        <div className="modern-course-features-box-new one-colume-grid h-80">
          <div className="inner">
            <div className="thumbnail">
              <Image
                src={data?.content2?.img}
                width={558}
                height={397}
                alt="Image"
              />
            </div>
            <div className="content">
              <h2 className="title" style={{fontWeight:"normal"}}>{data?.content2.title}</h2>
              <p>{data?.content2.desc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6" style={{border:'2px'}}>
        <div className="modern-course-features-box-new grid-content-reverse ">
          <div className="inner">
          <div className="h-20 w-full radius-20 thumbnail"><br></br>
              <Image
                src={data?.content3?.img}
                width={"100%"}
                height={"100%"}
                alt="Image"
              
              />
            </div>
            {/* <CourseSlider {...data.container3} course={data.container3.img} /> */}
            <div className="content">
              <h2 className="title" style={{fontWeight:"normal"}}>{data.content3.title}</h2>
              <p>{data.content3.desc}</p>
              <ul className="rbt-list-style-2-new flex-wrap g-1 mb-40">
                {data.content3.subContent.map((innerData, i) => (
                  <li key={i} className="flex ">
                    <i className="feather-check"></i>
                    <p>{innerData.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
