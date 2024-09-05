import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

import BlogData from "../../data/blog/blog.json";
import CourseDetails from "../../data/course-details/courseData.json";
import Separator from "@/components/Common/Separator";

import client1 from "../../public/images/banner/banner-icon-1.jpg";
import client2 from "../../public/images/banner/banner-icon-2.jpg";
import client3 from "../../public/images/banner/banner-icon-3.jpg";
import client4 from "../../public/images/testimonial/client-12.png";
import languageClub from "../../public/images/banner/language-club.png";
import SingleCourseData from "../../data/pages/11-singleCourse.json";

import CategoryFour from "../Category/CategoryFour";
import Counter from "../Counters/Counter";
import AboutTwo from "../Abouts/About-Two";
import CountDownTwo from "../Counters/CountDownTwo";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "../Cards/Card";
import BrandThree from "../Brand/Brand-Three";
import BrandTwo from "../Brand/Brand-Two";
import CategoryOne from "../Category/CategoryOne";
import CallToActionSix from "../Call-To-Action/CallToAction-Six";
import AdvanceTabFour from "../AdvanceTab/AdvanceTab-Four";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import SingleCourseProp from "../11-single-course/SingleCourseProp";
import TeamEight from "../Team/TeamEight";
import aluminiLogo1 from "../../public/images/alumini/1.png";
import aluminiLogo2 from "../../public/images/alumini/2.png";
import aluminiLogo3 from "../../public/images/alumini/3.png";
import aluminiLogo4 from "../../public/images/alumini/4.png";
import aluminiLogo5 from "../../public/images/alumini/5.png";
import recogLogo1 from "../../public/images/recognize/1.png";
import recogLogo2 from "../../public/images/recognize/2.png";
import recogLogo3 from "../../public/images/recognize/3.png";
import recogLogo4 from "../../public/images/recognize/4.png";

import brandLogo1 from "../../public/images/brand/l-6.png";
import brandLogo2 from "../../public/images/brand/l-10.png";
import brandLogo3 from "../../public/images/brand/l-9.png";
import brandLogo4 from "../../public/images/brand/l-8.png";
import brandLogo5 from "../../public/images/brand/l-7.png";
import brandLogo6 from "../../public/images/brand/l-11.png";
import brandLogo7 from "../../public/images/brand/l-5.png";
import brandLogo8 from "../../public/images/brand/l-12.png";
import brandLogo9 from "../../public/images/brand/l-4.png";
import brandLogo10 from "../../public/images/brand/l-3.png";
import brandLogo11 from "../../public/images/brand/l-1.png";
import brandLogo12 from "../../public/images/brand/l-2.png";

import recognize1 from "../../public/images/recognize/img-1.jpg";
import recognize2 from "../../public/images/recognize/img-2.jpg";
import recognize3 from "../../public/images/recognize/img-3.jpg";

import containerLogo1 from "../../public/images/recognize/logo-1.jpg";
import containerLogo2 from "../../public/images/recognize/logo-3.jpg";
import containerLogo3 from "../../public/images/recognize/logo-2.jpg";
import containerLogo4 from "../../public/images/recognize/logo-5.jpg";
import containerLogo5 from "../../public/images/recognize/logo-4.jpg";
import containerLogo6 from "../../public/images/recognize/logo-6.jpg";
import containerLogo7 from "../../public/images/recognize/logo-9.jpg";
import containerLogo8 from "../../public/images/recognize/logo-7.jpg";
import containerLogo9 from "../../public/images/recognize/logo-8.jpg";

import aca_1 from "../../public/images/scroll/log-1.png";
import aca_2 from "../../public/images/scroll/log-2.png";
import aca_3 from "../../public/images/scroll/log-3.png";
import aca_4 from "../../public/images/scroll/log-4.png";
import aca_5 from "../../public/images/scroll/log-1.png";
import aca_6 from "../../public/images/scroll/log-2.png";
import aca_7 from "../../public/images/scroll/log-3.png";
import aca_8 from "../../public/images/scroll/log-4.png";
import { companies } from "@/utils.js/constant.utils";

const LanguageAcademy = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.languageAcademy));
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  const data = [
    {
      logo: "/images/banner/banner-img-1.jpg",
      discount: "-40% Off",
      lession: 12,
      students: 50,
      title: "Stay competitive",
      content: "",
      rating: 5,
      review: 15,
      desc: "Future-proof your career with cutting-edge courses and stay competitive to meet evolving job market needs",
    },
    {
      logo: "/images/banner/banner-img-2.jpg",
      discount: "-40% Off",
      lession: 12,
      students: 50,
      title: "Tailored courses",
      content: "",
      rating: 5,
      review: 15,
      desc: "We provide courses for both beginners and experienced professionals to achieve career success.",
    },
  ];

  const alumini = [
    {
      title: "Alumini Insights, Your Competitve Edge",
      logo: [
        aluminiLogo1,
        aluminiLogo2,
        aluminiLogo3,
        aluminiLogo4,
        aluminiLogo5,
      ],
    },
  ];

  const recognize = [
    {
      title: "Recognized for Excellence",
      logo: [recogLogo1, recogLogo2, recogLogo3, recogLogo4],
    },
  ];

  const shipping = {
    counterOne: [
      {
        body: [
          {
            text: "Universities & Colleges on Board",
            num: 700,
            top: true,
          },
          {
            text: "Companies Hired with Us",
            num: 2600,
            top: false,
          },
          {
            text: "Freshers Ready to Deploy",
            num: 4500,
            top: true,
          },
          {
            text: "TPO Connects across India ",
            num: 5000,
            top: false,
          },
        ],
      },
    ],
  };

  const brand = [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
    brandLogo9,
    brandLogo10,
    brandLogo11,
    brandLogo12,
  ];

  const courseData = {
    content1: {
      img: recognize1,
      title: `As a trusted leader in the industry`,
      desc: "we continuously strive for excellence - Our global recognition validates our commitment to sustaining standards in imparting education.",
      imgs: [
        containerLogo1,
        containerLogo2,
        containerLogo3,
        containerLogo4,
        containerLogo5,
        containerLogo6,
        containerLogo7,
        containerLogo8,
        containerLogo9,
      ],
    },
    content2: {
      img: recognize2,
      title: `Awards`,
      desc: "We've been honoured with numerous awards for our commitment to innovation and for consistently delivering outstanding results.",
    },
    content3: {
      img: recognize3,
      title: `Vestibulum hendrerit`,
      desc: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      subContent: [
        {
          text: "Cras ornare tristique",
        },
        {
          text: "Lorem ipsum",
        },
        {
          text: "Vestibulum commodo",
        },
        {
          text: "Aliquam tincidunt",
        },
        {
          text: "Integer vitae libero",
        },
      ],
    },
  };

  const academic = [aca_1, aca_2, aca_3, aca_4, aca_5, aca_6, aca_7, aca_8];
  return (
    <>
      <div className="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div
                  className="content"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-primary-opacity">
                        Transform Your Hiring Process with Talentely
                      </span>
                    </div>

                    <h3 className="title">
                      Access Top Talent,
                      <br />
                      <span className="theme-gradient"> No Costs</span>
                      {""} & Accelerate
                      <br />
                      <span> Recruitment Cycles</span>
                    </h3>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Mark JOrdan"
                          tabIndex="0"
                        >
                          <Image
                            src={client1}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Mark"
                          tabIndex="0"
                        >
                          <Image
                            src={client2}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Jordan"
                          tabIndex="0"
                        >
                          <Image
                            src={client3}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 3000+ Students
                          </h5>
                          <p className="subtitle">
                            Have a new ideas every week.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-button-group justify-content-start mt--30">
                      <Link
                        className="rbt-btn btn-gradient rbt-switch-btn"
                        href="#"
                        style={{
                          height: "53px",
                          lineHeight: "53px",
                          fontSize: "14px",
                        }}
                      >
                        <span data-text="Sign Up Now">Sign Up Now</span>
                      </Link>
                      <Link
                        className="rbt-btn btn-border rbt-switch-btn"
                        href="#"
                        style={{
                          height: "53px",
                          lineHeight: "53px",
                          fontSize: "14px",
                        }}
                      >
                        <span data-text="Find Courses">Find Courses</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="row g-5">
                  <Card
                    col="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                    mt=""
                    start={0}
                    end={2}
                    isDesc={false}
                    isUser={false}
                    data={data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <CategoryFour />
          </div>
        </div>
      </div> */}
      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <BrandThree data={alumini} />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      <Separator />

      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <BrandThree data={recognize} />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>

      <div className="rbt-counterup-area ptb--60 bg-theme-lightblue ">
        <div className="container">
          <div className="row mb--50 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Empowering Talent, Building Futures
                </span>
                <div>
                  <h2
                    className="title "
                    style={{
                      fontWeight: "500",
                      fontSize: "38px",
                      lineHeight: "52px",
                    }}
                  >
                    Shaping Careers and Connecting
                    <br />
                    Top Talent Since 2010
                  </h2>
                </div>
                <p
                  className="description has-medium-font-size mt--20 mb--0"
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "black",
                  }}
                >
                  We are at the forefront of shaping careers and connecting top
                  talent with leading companies, helping countless professionals
                  and businesses thrive in a competitive world
                </p>
              </div>
            </div>
          </div>
          <Counter head={false} data={shipping} />
        </div>
      </div>

      <div className="rbt-counterup-area ptb--60 bg-color-white ">
        <div className="container">
          <div className="row mb--20 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  {" "}
                  Working in synergy to drive growth
                </span>
                <h2
                  className="title"
                  style={{ fontWeight: "500", fontSize: "38px" }}
                >
                  Our Brands
                </h2>
                {/* <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p> */}
              </div>
            </div>
          </div>
          <div className="row rbt-brand-area bg-color-white ">
            <CategoryOne data={brand} />
          </div>
        </div>
      </div>
      {/* [#37A282] */}
      <div className="rbt-course-banner-area bg-color-green ptb--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div
                  className="section-title text-center"
                  style={{
                    borderBottom: "1px solid #646da8",
                    marginBottom: "3px",
                  }}
                >
                  <span className="subtitle bg-secondary-opacity-new">
                    Accredited for sustaining global standards
                  </span>
                  <h2
                    className="title color-white"
                    style={{ fontWeight: "500", fontSize: "38px" }}
                  >
                    {/* Recognions and Accreditations */}
                    Recognitions and Accreditations
                  </h2>
                  {/* <p className="description has-medium-font-size mt--20 mb--0">
                    Language Academic?
                  </p> */}
                  <Link
                    className="rbt-btn hover-icon-reverse btn-border color-white-off mt--30 mb--30"
                    href="#"
                    style={{
                      padding: "0px 22px",
                      lineHeight: "53px",
                      height: "53px",
                    }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Know More</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="row g-5">
                  <SingleCourseProp
                    // courseData={SingleCourseData.certificate}
                    // image={true}
                    data={courseData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-grey rbt-section-gap-own ptb--60">
        <div className="container">
          <div className="row  mb--40 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity ">
                  Strong alliances to empower learning
                </span>
                <h2
                  className="title"
                  style={{ fontWeight: "500", fontSize: "38px" }}
                >
                  Our Academic Partners
                </h2>
                {/* <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <TeamEight head={false} data={academic} />
      </div>
      <div className="bg-color-white rbt-section-gap-own ptb--60">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Industry-ready talent ideal for all sectors
                </span>
                <h2
                  className="title"
                  style={{ fontWeight: "500", fontSize: "38px" }}
                >
                  2500+ Companies Hire our
                  <br />
                  Pre-trained Candidates
                </h2>
                <p
                  className="description has-medium-font-size mt--20 mb--0"
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "black",
                  }}
                >
                  Our students are equipped with the expertise and skillsets
                  required to thrive in today’s competitive work environments.
                </p>
              </div>
            </div>
          </div>
          <BrandTwo data={companies} />
        </div>
      </div>

      <div
        className="rbt-call-to-action-area  bg-gradient-16 rbt-section-gap-own"
        style={{ padding: "60px" }}
      >
        <CallToActionSix />
      </div>
    </>
  );
};

export default LanguageAcademy;
