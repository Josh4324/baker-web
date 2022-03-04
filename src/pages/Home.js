import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="parallax">
        <div className="tagline">
          <h2 className="baker">BAKER INDUSTRIES</h2>
          <div className="tag">Shaping the future of real estate</div>
        </div>
      </div>
      <div className="section1">
        <h3 className="section1-header">HighLights of Major Activities</h3>

        <div>
          We make use of the best technologies to improve customer experience in
          the real estate sector.
        </div>

        <div>We are pioneers in the property tech industry</div>
      </div>
      <div className="section2">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <div className="section3">
        <h3 className="section3-header">Partners</h3>
        <div className="section3-inner">
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
        </div>
      </div>

      <section id="faq" class=" faq container mt-3 faq-margin">
        <h4 class="mb-3 text-center text-uppercase text-bold fre">
          Frequently Asked Questions
        </h4>
        <hr />
        <h6 class="mb-5 text-center font-weight-light">
          Get enlightened with the stack of knowledge base you might just find
          that which you need
        </h6>
        <div class="mb-4">
          <i
            class="fas fa-plus-circle mr-3 size"
            data-toggle="collapse"
            data-target=".description1"
          ></i>
          <i
            class="fas fa-minus-circle mr-3 d-none size"
            data-toggle="collapse"
            data-target=".description1"
          ></i>
          <h6 class="d-inline bold text">Why get real estate?</h6>
          <p class="font-italic ml-5 my-3 collapse description1 text1">
            A solar calculator helps you calculate with precise accuracy how
            many kW system sizes are required to power your selected appliances.
            With this information, you can know the cost of the system and make
            adjustments where necessary. Worthy of note is to power only the
            most important appliances on Solar especially if you will be
            purchasing a hybrid/Grid-tied unit
          </p>
        </div>
        <div class="mb-4">
          <i
            class="fas fa-plus-circle mr-3 size"
            data-toggle="collapse"
            data-target=".description2"
          ></i>
          <i
            class="fas fa-minus-circle mr-3 d-none size"
            data-toggle="collapse"
            data-target=".description2"
          ></i>
          <h6 class="d-inline text">How can i invest in real estate?</h6>
          <p class="font-italic ml-5 my-3 collapse description2 text1">
            Solar energy offers great benefits both financially and
            environmentally. Money for electricity bills will be saved and
            increasing the electricity rate in the future will be protected. It
            also helps reduce greenhouse gas emissions which plays a role in
            climate change and air pollution.
          </p>
        </div>
        <div class="mb-4">
          <i
            class="fas fa-plus-circle mr-3 size"
            data-toggle="collapse"
            data-target=".description3"
          ></i>
          <i
            class="fas fa-minus-circle mr-3 d-none size"
            data-toggle="collapse"
            data-target=".description3"
          ></i>
          <h6 class="d-inline text">What is prop tech?</h6>
          <p class="font-italic ml-5 my-3 collapse description3 text1">
            Sunlight is converted into electricity using solar panels. The
            converted electricity can be stored in batteries to power electrical
            appliances. Excess energy harnessed from the panels can be exported
            to the grid. In the case of a grid-tied solar unit.
          </p>
        </div>

        <div class="mb-4">
          <i
            class="fas fa-plus-circle mr-3 size"
            data-toggle="collapse"
            data-target=".description4"
          ></i>
          <i
            class="fas fa-minus-circle mr-3 d-none size"
            data-toggle="collapse"
            data-target=".description4"
          ></i>
          <h6 class="d-inline text">How does prop tech affect real estate?</h6>
          <p class="font-italic ml-5 my-3 collapse description4 text1">
            The solar panel has no negative effect on your roof, instead it has
            been known to help increase the value of the house when putting it
            up for sale.
          </p>
        </div>

        <div class="mb-4">
          <i
            class="fas fa-plus-circle mr-3 size"
            data-toggle="collapse"
            data-target=".description5"
          ></i>
          <i
            class="fas fa-minus-circle mr-3 d-none size"
            data-toggle="collapse"
            data-target=".description5"
          ></i>
          <h6 class="d-inline text"> How can i invest in real estate?</h6>
          <p class="font-italic ml-5 my-3 collapse description5 text1">
            There can only be estimates as the installation cost varies
            considerably. This depends on your energy demands and how much
            autonomy you are willing to go for.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
