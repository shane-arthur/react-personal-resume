import "./App.css";
import "./assets/css/pillar-1.css"
import "./assets/fontawesome/css/all.min.css"
import shaneSelfie from "./assets/images/shane.jpg"

function App() {
  return (
    <>
      <div id="firstPage">
        <article class="resume-wrapper text-center position-relative">
          <div
            style={{ border: "1px solid black" }}
            class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg"
          >
            <header class="resume-header pt-4 pt-md-0">
              <div class="media flex-column flex-md-row">
                <img
                  class="mr-3 img-fluid picture mx-auto"
                  src={shaneSelfie}
                  alt="shaneSelfie"
                />
                <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                  <div class="primary-info">
                    <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                      Shane Arthur
                    </h1>
                    <div class="title mb-3">Software Engineer</div>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <a href="/#">
                          <i
                            class="far fa-envelope fa-fw mr-2"
                            data-fa-transform="grow-3"
                          ></i>
                          shane.arthur@gmail.com
                        </a>
                      </li>
                      <li
                        style={{ transform: "translateY(10px)" }}
                        class="mb-2"
                      >
                        <a href="/#">
                          <i
                            class="fas fa-mobile-alt fa-fw mr-2"
                            data-fa-transform="grow-6"
                          ></i>
                          954-669-7998
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* primary-info */}
                  <div class="secondary-info ml-md-auto mt-2">
                    <ul class="resume-social list-unstyled">
                      <li class="mb-3">
                        <a href="/#">
                          <span class="fa-container text-center mr-2">
                            <i class="fab fa-linkedin-in fa-fw"></i>
                          </span>
                          https://www.linkedin.com/in/shane-arthur-8b902071
                        </a>
                      </li>
                      <li class="mb-3">
                        <a href="/#">
                          <span class="fa-container text-center mr-2">
                            <i class="fab fa-github-alt fa-fw"></i>
                          </span>
                          github.com/shane-arthur
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span class="fa-container text-center mr-2">
                            <i class="fas fa-globe"></i>
                          </span>
                          shane-arthur.io
                        </a>
                      </li>
                    </ul>
                    <div style={{ marginTop: "30px !important" }}>
                      <span class="fa-container text-center mr-2">
                        <i class="fas fa-globe"></i>
                      </span>
                      <span> Fort Lauderdale, FL, USA</span>
                    </div>
                  </div>
                  {/* secondary-info */}
                </div>
                {/* media-body */}
              </div>
              {/* media */}
            </header>
            <div style={{ padding: "2rem !important" }} class="resume-body p-5">
              <section
                style={{ marginBottom: "1.5rem !important" }}
                class="resume-section summary-section mb-5"
              >
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Career Summary
                </h2>
                <div class="resume-section-content">
                  <p style={{ fontSize: "15px" }} class="mb-0">
                    I am a full stack software engineer with over 10 years of
                    professional experience. I am currently frontend focused and
                    love working with modern web technologies. I graduated from
                    Memorial University of Newfoundland and am based out of Fort
                    Lauderdale, Florida, USA. I have a wide range of work
                    experience within software development including building
                    multiple greenfield e-commerce platforms, building
                    applications across multiple domains for various startups,
                    and acting as a software consultant for several major
                    financial institutions. My experience is not limited to the
                    frontend, as I have also worked as a full stack and backend
                    engineer with proficiency in Javascript, Java, C#, Node,
                    HTML, (CSS/LESS/SASS/SCSS), several frontend and mobile
                    frameworks, cloud technologies and more.
                  </p>
                </div>
              </section>
              {/* summary-section */}
              <div class="row">
                <div class="col-lg-9">
                  <section class="resume-section experience-section mb-5">
                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      Work Experience
                    </h2>
                    <div class="resume-section-content">
                      <div class="resume-timeline position-relative">
                        <article
                          style={{ paddingBottom: "1.5rem !important" }}
                          class="resume-timeline-item position-relative pb-5"
                        >
                          <div
                            style={{ marginTop: "25px" }}
                            class="resume-timeline-item-header mb-2"
                          >
                            <div
                              style={{
                                marginTop: "-10px",
                                justifyContent: "space-between",
                              }}
                              class="d-flex flex-column flex-md-row"
                            >
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Software Engineering Manager
                              </h3>
                              <div
                                style={{ textAlign: "end" }}
                                class="resume-company-name ml-auto"
                              >
                                <span> Wish </span>
                                <small
                                  style={{
                                    textAlign: "center",
                                    display: "block",
                                  }}
                                >
                                  Fort Lauderdale, FL, US
                                </small>
                              </div>
                            </div>
                            {/*/}/row*/}
                            <div
                              style={{ marginTop: "-15px" }}
                              class="resume-position-time"
                            >
                              Apr. 2022 - Present
                            </div>
                            <div
                              style={{ fontSize: "14px", marginTop: "8px" }}
                              class="resume-timeline-item-desc"
                            >
                              <p>
                                Hands on Software Engineering Manager managing a
                                small team of 3-4 software engineers.
                                Responsible for leading the implementation of
                                multiple tools used by the Wish Merchandising
                                team to facilitate customization of user buyer
                                experiences.
                              </p>
                            </div>
                            <div
                              style={{
                                justifyContent: "space-between",
                                marginTop: "16px",
                              }}
                              class="d-flex flex-column flex-md-row"
                            >
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Senior Software Engineer
                              </h3>
                              <div
                                style={{ textAlign: "end" }}
                                class="resume-company-name ml-auto"
                              >
                                <span> Wish </span>
                                <small
                                  style={{
                                    textAlign: "center",
                                    display: "block",
                                  }}
                                >
                                  Toronto, ON, CAN
                                </small>
                              </div>
                            </div>
                            {/*/}/row*/}
                            <div
                              style={{ marginTop: "-15px" }}
                              class="resume-position-time"
                            >
                              Mar. 2021 - Apr. 2022
                            </div>
                          </div>
                          {/* resume-timeline-item-header */}
                          <div
                            style={{ fontSize: "14px" }}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              Senior Software Engineer leading a small team of
                              2-4 engineers create a new e-commerce web platform
                              experience for Wish. Responsible for design,
                              architecture, implementation and mentorship.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Achievements:
                            </h4>
                            <ul style={{fontSize: "13px"}}>
                              <li>
                                Architected and developed the platform MVP from
                                scratch with full ecommerce capabilities with a
                                very lean team in less than 8 months.
                              </li>
                              <li>
                                Maintained a lighthouse performance score of >
                                80 for all pages in the above web platform.
                              </li>
                              <li>
                                Developed a social incentive module used to
                                drive Instagram influencers to the platform
                                which was reused in other web applications in
                                the organization.
                              </li>
                              <li>
                                Integrated the new platform into the core
                                infrastructure pipeline at Wish (Kubernetes,
                                Gitlab, and Kube Deploy)
                              </li>
                              <li>
                                Setup monitoring, analytics and error tracking
                                on the platform (Pagerduty, Google Analytics and
                                Sentry)
                              </li>
                              <li>
                                People & technical manager to several team
                                members and involving in the hiring of Frontend
                                Engineers on the greater team.
                              </li>
                            </ul>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Next.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Typescript
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Node.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Express.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  React
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Stripe
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  HTML/CSS/SCSS
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  AWS EC2
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Kubernetes
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  MongoDB
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Golang
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Flutter & Dart
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>
                        {/*/}/resume-timeline-item*/}
                      </div>
                      {/* resume-timeline */}
                    </div>
                  </section>
                  {/* experience-section */}
                </div>
                <div class="col-lg-3">
                  <section class="resume-section skills-section mb-5">
                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      Skills &amp; Tools
                    </h2>
                    <div class="resume-section-content">
                      <div class="resume-skill-item">
                        <h4 class="resume-skills-cat font-weight-bold">
                          Frontend
                        </h4>
                        <ul class="list-unstyled mb-4">
                          <li class="mb-2">
                            <div class="resume-skill-name">JavaScript</div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "95%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>

                          <li class="mb-2">
                            <div class="resume-skill-name">React</div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li class="mb-2">
                            <div class="resume-skill-name">Angular</div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li class="mb-2">
                            <div class="resume-skill-name">
                              HTML/CSS/SCSS/LESS
                            </div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li class="mb-2">
                            <div class="resume-skill-name">
                              Cordova, React Native, Nativescript
                            </div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* resume-skill-item */}

                      <div class="resume-skill-item">
                        <h4 class="resume-skills-cat font-weight-bold">
                          Backend
                        </h4>
                        <ul class="list-unstyled">
                          <li class="mb-2">
                            <div class="resume-skill-name">
                              Node.js (Hapi.js, express.js)
                            </div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li class="mb-2">
                            <div class="resume-skill-name">Java</div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "55%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li class="mb-2">
                            <div class="resume-skill-name">C# (.NET)</div>
                            <div class="progress resume-progress">
                              <div
                                class="progress-bar theme-progress-bar-dark"
                                role="progressbar"
                                style={{ width: "55%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* resume-skill-item */}

                      <div class="resume-skill-item">
                        <h4 class="resume-skills-cat font-weight-bold">
                          Others
                        </h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-light">
                              Google Cloud Platforms
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Firebase</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Bitbucket</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Jira</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Bamboo</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Git</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Docker</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Postgres SQL</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">MySQL</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">MSSQL</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">Jenkins</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">PWA</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-light">ASP.NET</span>
                          </li>
                        </ul>
                      </div>
                      {/* resume-skill-item */}
                    </div>
                    {/* resume-section-content */}
                  </section>
                </div>
              </div>
              {/* row */}
            </div>
            {/* resume-body */}
          </div>
        </article>
      </div>

      {/* Second PDF Page */}

      <div id="secondPage">
        <article class="resume-wrapper text-center position-relative">
          <div
            style={{ border: "1px solid black" }}
            class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg"
          >
            <div style={{ padding: "2rem !important" }} class="resume-body p-5">
              {/*/}/summary-section*/}
              <div class="row">
                <div class="col-lg-9">
                  <section class="resume-section experience-section mb-5">
                    <div class="resume-section-content">
                      <div class="resume-timeline position-relative">
                        <article
                          style={{ paddingBottom: "1.5rem !important" }}
                          class="resume-timeline-item position-relative pb-5"
                        >
                          <div
                            style={{ marginTop: "25px" }}
                            class="resume-timeline-item-header mb-2"
                          >
                            <div
                              style={{
                                marginTop: "-10px",
                                justifyContent: "space-between",
                              }}
                              class="d-flex flex-column flex-md-row"
                            >
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                UI Architect
                              </h3>
                              <div class="resume-company-name ml-auto">
                                Home Depot Canada
                                <small
                                  style={{
                                    textAlign: "center",
                                    display: "block",
                                  }}
                                >
                                  North York, ON, CAN
                                </small>
                              </div>
                            </div>
                            {/* row */}
                            <div
                              style={{ marginTop: "-15px" }}
                              class="resume-position-time"
                            >
                              Sept. 2018 - Mar. 2021
                            </div>
                          </div>
                          {/*/}/resume-timeline-item-header*/}
                          <div
                            style={{ fontSsize: "14px" }}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              UI Architect leading a large team of 20+ frontend
                              engineers through The Home Depot Canada's Digital
                              Transformation. Responsible for high level
                              architecture, feature delivery, crisis production
                              defect triaging, mentorship of junior engineers,
                              and more.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Achievements:
                            </h4>
                            <ul style={{ fontSize: "13px" }}>
                              <li>
                                Led the migration of over 75% of Home Depot
                                Canada's ecommerce platform to single page
                                Angular Applications.
                              </li>
                              <li>
                                Architected and developed pages responsible for
                                generating up to $10 Million CAD revenue daily
                                as of spring 2020.
                              </li>
                              <li>
                                Developed coding and design standards, style
                                guides, boilerplates, shared libraries,
                                component libraries and core modules used
                                organization wide for all UI.
                              </li>
                              <li>
                                Increased website conversion by over 25%
                                attributed to performance increases, and better
                                user experiences on redesigned pages.
                              </li>
                              <li>
                                Responsible for hiring and onboarding new
                                engineers as the frontend team more than doubled
                                in size.
                              </li>
                            </ul>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Angular
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Typescript
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Node.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Express.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  RxJs
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Webpack
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  HTML/CSS/SCSS
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Google Cloud Platforms
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Kubernetes
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Java
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Jenkins
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Bamboo
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Akamai
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Adobe AEM
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  SAP Hybris
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>
                        {/* resume-timeline-item */}

                        <article
                          style={{ paddingBottom: "1rem !important" }}
                          class="resume-timeline-item position-relative pb-5"
                        >
                          <div class="resume-timeline-item-header mb-2">
                            <div
                              style={{
                                marginTop: "-20px",
                                justifyContent: "space-between",
                              }}
                              class="d-flex flex-column flex-md-row"
                            >
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Senior Software Engineer
                                <small
                                  style={{fontSize: "12px"}}
                                  class="text-muted"
                                >
                                  (Contract)
                                </small>
                              </h3>
                              {/*<span style="display: flex; justify-content: center; flex-direction: column; align-items:center; margin-left: 10px; font-size: 12px;">(contract)</span> */}
                              <div class="resume-company-name ml-auto">
                                Royal Bank of Canada
                                <small style={{textAlign: "center", display: "block"}}>
                                  Toronto, ON, CAN
                                </small>
                              </div>
                            </div>
                            {/* row */}
                            <div
                              style={{marginTop: "-15px"}}
                              class="resume-position-time"
                            >
                              Apr. 2018 - Sept. 2018
                            </div>
                          </div>
                          {/*/}/resume-timeline-item-header*/}
                          <div
                            style={{fontSize: "14px"}}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              Senior frontend engineer, responsible for creating
                              interactive user interfaces and fixing legacy
                              defects on the Big Data Analytics team within the
                              Royal Bank of Canada's Capital Markets segment.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Achievements
                            </h4>
                            <ul style={{fontSize: "13px"}}>
                              <li>
                                Created a data-visualization dashboard in
                                Angular capable of consuming and visualizing
                                large unstructured batched data.
                              </li>
                              <li>
                                Ran demo and training sessions for navigating
                                and using said dashboard.
                              </li>
                              <li>
                                Identified and fixed legacy defects, some of
                                which were in production for over 5 years.
                              </li>
                            </ul>
                            <div
                              style={{fontSize: "14px"}}
                              class="resume-timeline-item-desc"
                            >
                              <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                                Technologies used:
                              </h4>
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    Angular
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    RxJs
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    NgRx
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    HTML/SASS
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    React
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    Redux
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    angular.js
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    Postgres SQL
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    Java
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    JQuery
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>

                        <article
                          style={{paddingBottom: "0 !important"}}
                          class="resume-timeline-item position-relative pb-5"
                        >
                          <div class="resume-timeline-item-header mb-2">
                            <div
                              style={{justifyContent: "space-between"}}
                              class="d-flex flex-column flex-md-row"
                            >
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Senior Software Engineer
                              </h3>
                              <div class="resume-company-name ml-auto">
                                Home Depot Canada
                                <small style={{textAlign: "center", display: "block"}}>
                                  North York, ON, CAN
                                </small>
                              </div>
                            </div>
                            {/*/}/row*/}
                            <div
                              style={{marginTop: "-15px"}}
                              class="resume-position-time"
                            >
                              Nov. 2017 - Apr. 2018
                            </div>
                          </div>
                          {/*/}/resume-timeline-item-header*/}
                          <div
                            style={{fontSize: "14px"}}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              Senior / Lead frontend engineer responsible for
                              leading the kick-off of The Home Depot Canada's
                              Digital Transformation from the frontend.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Achievements
                            </h4>
                            <ul style={{fontSize: "13px"}}>
                              <li>
                                Created the first non-static, responsive UI in
                                the Home Depot Canada's ecommerce platform,
                                resulting in a better start to end shopping
                                experience.
                              </li>
                              <li>
                                Architected the first server side rendered
                                implementation of our UI, allowing for social
                                sharing and better SEO.
                              </li>
                            </ul>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Angular
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Typescript
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  RxJs
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  HTML/CSS/SCSS
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Java
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Jenkins
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Adobe AEM
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  SAP Hybris
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  JQuery
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  JavaServer Pages
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>
                        {/* resume-timeline-item */}
                      </div>
                      {/* resume-timeline */}
                    </div>
                  </section>
                  {/* experience-section */}
                </div>
                <div class="col-lg-3">
                  <section class="resume-section education-section mb-5">
                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      Education
                    </h2>
                    <div class="resume-section-content">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <div class="resume-degree font-weight-bold">
                            BSc in Computer Science
                          </div>
                          <div class="resume-degree-org">
                            Memorial University of Newfoundland
                          </div>
                          <div class="resume-degree-time">2008 - 2012</div>
                        </li>
                      </ul>
                    </div>
                  </section>
                  {/* education-section */}
                  <section class="resume-section reference-section mb-5">
                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      Awards
                    </h2>
                    <div class="resume-section-content">
                      <ul class="list-unstyled resume-awards-list">
                        <li class="mb-2 pl-4 position-relative">
                          <i
                            class="resume-award-icon fas fa-trophy position-absolute"
                            data-fa-transform="shrink-2"
                          ></i>
                          <div class="resume-award-name">
                            Highest Impact Project
                          </div>
                          <div class="resume-award-desc">
                            Team member on the highest impact project in 2016
                            for Avande as selected by clients and peers.
                          </div>
                        </li>
                        <li class="mb-0 pl-4 position-relative">
                          <i
                            class="resume-award-icon fas fa-trophy position-absolute"
                            data-fa-transform="shrink-2"
                          ></i>
                          <div class="resume-award-name">Homer Award(s)</div>
                          <div class="resume-award-desc">
                            Received Homer Award in both 2018 and 2019 at Home
                            Depot. This award recognized outstanding work and
                            "going the extra mile" to drive projects to
                            completion.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </section>
                  {/* interests-section */}
                  <section class="resume-section language-section mb-5">
                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      Language
                    </h2>
                    <div class="resume-section-content">
                      <ul class="list-unstyled resume-lang-list">
                        <li class="mb-2">
                          <span class="resume-lang-name font-weight-bold">
                            English
                          </span>
                          <small class="text-muted font-weight-normal">
                            &nbsp;(Native)
                          </small>
                        </li>
                        <li class="mb-2 align-middle">
                          <span class="resume-lang-name font-weight-bold">
                            French
                          </span>
                          <small class="text-muted font-weight-normal">
                            &nbsp;(Working)
                          </small>
                        </li>
                        <li></li>
                      </ul>
                    </div>
                  </section>
                  {/* language-section */}
                  <section class="resume-section interests-section mb-5">
                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      Interests
                    </h2>
                    <div class="resume-section-content">
                      <ul class="list-unstyled">
                        <li class="mb-1">Live Sports</li>
                        <li class="mb-1">Running</li>
                        <li class="mb-1">Weightlifting</li>
                        <li class="mb-1">Basketball</li>
                        <li class="mb-1">Cooking</li>
                        <li class="mb-1">Reading</li>
                      </ul>
                    </div>
                  </section>
                  {/* interests-section */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* resume-body */}
          </div>
        </article>
      </div>

      <div id="thirdPage">
        <article class="resume-wrapper text-center position-relative">
          <div
            style={{border: "1px solid black"}}
            class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg"
          >
            <div style={{padding: "2rem !important"}} class="resume-body p-5">
              {/* summary-section */}
              <div class="row">
                <div class="col-lg-9">
                  <section class="resume-section experience-section mb-5">
                    <div class="resume-section-content">
                      <div class="resume-timeline position-relative">
                        <article
                          style={{paddingBottom: "0.5rem !important"}}
                          class="resume-timeline-item position-relative"
                        >
                          <div class="resume-timeline-item-header mb-2">
                            <div class="d-flex flex-column flex-md-row">
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Software Consultant
                              </h3>
                              <div
                                style={{textAlign: "right", marginTop: "-5px"}}
                                class="resume-company-name ml-auto"
                              >
                                Capco
                                <small style={{textAlign: "center", display: "block"}}>
                                  Toronto, ON, CAN
                                </small>
                              </div>
                            </div>
                            {/* row */}
                            <div
                              style={{marginTop: "-10px"}}
                              class="resume-position-time"
                            >
                              Jun. 2017 - Nov. 2017
                            </div>
                          </div>
                          {/* resume-timeline-item-header */}
                          <div
                            style={{fontSize: "14px"}}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              Acted as a frontend engineer on a test-driven
                              development style web application for one of the
                              big banks. Responsible for architecture, feature
                              development, and test automation. The function was
                              to complete back office/admin tasks for one of
                              their online mobile banking applications.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Angular
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  NGRX
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Protractor
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Typescript
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  RxJs
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  HTML/CSS/SCSS
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Bamboo
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Ionic 3
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Angular Material
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>
                        {/* resume-timeline-item */}

                        <article class="resume-timeline-item position-relative">
                          <div class="resume-timeline-item-header mb-2">
                            <div class="d-flex flex-column flex-md-row">
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Software Consultant
                              </h3>
                              <div
                                style={{marginTop: "-5px", textAlign: "right"}}
                                class="resume-company-name ml-auto"
                              >
                                Avande
                                <small style={{textAlign: "center", display: "block"}}>
                                  Toronto, ON, CAN & Greater New York City Area,
                                  NY, USA
                                </small>
                              </div>
                            </div>
                            {/*/}/row*/}
                            <div
                              style={{marginTop: "-10px"}}
                              class="resume-position-time"
                            >
                              Jan. 2016 - Jun. 2017
                            </div>
                          </div>
                          {/* resume-timeline-item-header */}
                          <div
                            style={{fontSize: "14px"}}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              Placed on two projects at Avande, both as a full
                              stack engineer. One project was a portfolio
                              visualization web application for a large American
                              hedge fund. The other project was a desktop
                              application used by call centre agents to better
                              serve clients with incoming inquiries at one of
                              the big banks in Canada.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  React
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  HighCharts.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Alt.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  C# (WPF)
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Hapi.js
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  HTML/LESS
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Java (Spring MVC)
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Grunt
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Xunit/Junit
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Angular.js
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>

                        <article
                          style={{marginTop: "16px"}}
                          class="resume-timeline-item position-relative"
                        >
                          <div class="resume-timeline-item-header mb-2">
                            <div class="d-flex flex-column flex-md-row">
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Software Consultant
                              </h3>
                              <div
                                style={{marginTop: "-5px", textAlign: "right"}}
                                class="resume-company-name ml-auto"
                              >
                                NTT Data
                                <small style={{textAlign: "center", display: "block"}}>
                                  Halifax, NS, CAN
                                </small>
                              </div>
                            </div>
                            {/* row */}
                            <div
                              style={{marginTop: "-10px"}}
                              class="resume-position-time"
                            >
                              Jan. 2015 - Jan. 2016
                            </div>
                          </div>
                          {/* resume-timeline-item-header */}
                          <div
                            style={{fontSize: "14px"}}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              Worked as a backend engineer, creating RESTful
                              endpoints for a large American Investment
                              Management Company relating to financial
                              transactions, and back office tasks.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Java Spring
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  IBatis
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Junit
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  WS02 Messasing Broker
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Maven
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Jenkins
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Java (Spring MVC)
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>

                        <article
                          style={{marginTop: "16px"}}
                          class="resume-timeline-item position-relative"
                        >
                          <div class="resume-timeline-item-header mb-2">
                            <div class="d-flex flex-column flex-md-row">
                              <h3 class="resume-position-title font-weight-bold mb-1">
                                Web Application Developer
                              </h3>
                              <div
                                style={{marginTop: "-5px", textAlign: "right"}}
                                class="resume-company-name ml-auto"
                              >
                                GreenNexxus
                                <small style={{textAlign: "center", display: "block"}}>
                                  Fredericton, NB, CAN
                                </small>
                              </div>
                            </div>
                            {/* row */}
                            <div
                              style={{marginTop: "-10px"}}
                              class="resume-position-time"
                            >
                              Apr. 2013 - Oct. 2014
                            </div>
                          </div>
                          {/* resume-timeline-item-header */}
                          <div
                            style={{fontSize: "14px"}}
                            class="resume-timeline-item-desc"
                          >
                            <p>
                              Part of a small team of full stack engineers,
                              creating a SaaS product. The product was a web
                              application that helped companies promote
                              environmentally-friendly actions amongst their
                              employees. Clients included major North American
                              Universities and Financial Institutions.
                            </p>
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  C#
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  ASP.NET Webforms/MVC
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  HTML/CSS
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  Javascript (ES5)
                                </span>
                              </li>
                              <li class="list-inline-item">
                                <span class="badge badge-primary badge-pill">
                                  JQuery Mobile
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* resume-timeline-item-desc */}
                        </article>
                        {/* resume-timeline-item */}
                      </div>
                      {/* resume-timeline */}
                    </div>
                  </section>
                  {/* experience-section */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* resume-body */}
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
