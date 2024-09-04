import Image from "next/image";
import React from "react";

import aboutImg from "../../public/images/why-talentely/talentely-main.jpg";

const AcademyGalleryOne = () => {
  return (
    <>
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <div className="content">
            <Image
              className="w-100 radius-10"
              src={aboutImg}
              width={526}
              height={645}
              alt="About Images"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <div className="section-title text-start">
              <h2 className="title">Why Talentely?</h2>
              <p className="description mt--20">
                <strong>Talentely integrates</strong> institutions, corporates,
                and talents, engages students, provides skill insights, offers
                diverse learning options, and rewards hard work, making it the
                ideal choice for hiring.
              </p>
              <div className="plan-offer-list-wrapper">
                <div>
                  <h5 className="mb--20">
                    Access to Largest Pre-Trained Talent with Zero Cost
                  </h5>
                  <div className="plan-offer-list-wrapper">
                    <ul className="plan-offer-list">
                      <li>
                        <i className="feather-check"></i> Employability Skills
                        Trained
                      </li>
                      <li>
                        <i className="feather-check"></i> Future Skills Trained
                      </li>
                      <li>
                        <i className="feather-check"></i> Custom &amp; Niche
                        Skill Trained
                      </li>
                      <li>
                        <i className="feather-check"></i> AI Driven Training
                        &amp; Assessment Platform
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="mb--20">360° Profiled Candidates</h5>
                  <div className="plan-offer-list-wrapper">
                    <ul className="plan-offer-list">
                      <li>
                        <i className="feather-check"></i> Learner’s DNA Pattern
                        Captured
                      </li>
                      <li>
                        <i className="feather-check"></i> Student Skill
                        credibility verified with EIS Authentication Framework
                      </li>
                      <li>
                        <i className="feather-check"></i> Certifications,
                        Projects &amp; Competitive Programing Scores Captured
                      </li>
                      <li>
                        <i className="feather-check"></i> Student Job Preference
                        Captured
                      </li>
                      <li>
                        <i className="feather-check"></i> Personal &amp;
                        Academic Information
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt--30">
                <h5 className="mb--20">Pan India Recruitment Support</h5>
                <div className="plan-offer-list-wrapper">
                  <ul className="plan-offer-list">
                    <li>
                      <i className="feather-check"></i> Access to Largest Pool
                      of Pre-Trained Talent across Tier 1, 2 &amp; 3
                      Institutions
                    </li>
                    <li>
                      <i className="feather-check"></i> Precise Recruitment
                      based on EIS, Student Preference &amp; Performance
                    </li>

                    <li>
                      <i className="feather-check"></i> Spot Hidden Gems in Tier
                      2 &amp; 3 Institutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyGalleryOne;
