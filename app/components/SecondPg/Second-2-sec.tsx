import styles from "@/Stylesheets/Secondpgstyles/Second_2_sec.module.css";
import buttonstyles from "@/Stylesheets/button.module.css";
import metastyles from "@/Stylesheets/metabar.module.css";

export default function Second_2_sec() {
  return (
    <section
      className={styles.case_study_overview_container__AhFvg}
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -900)",
      //   }}
    >
      <div
        className={metastyles.meta_bar_container__8XWWy}
        data-meta-bar="true"
      >
        <figure className={metastyles.meta_bar_line__C8oDB}></figure>
        <div className={metastyles.meta_bar_row__SB8nu}>
          <div>Patagonia</div>
          <div>/ Overview</div>
        </div>
      </div>
      <div className={styles.case_study_overview_wrapper__AS_Se}>
        <div className={styles.case_study_overview_sticky__03n99}>
          <div
            data-sticky="true"
            data-adjustment="0"
            // style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
          >
            <h3>
              patagonia.com — An eCommerce experience driven by Patagonia&apos;s
              brand mission
            </h3>
            <ul className={styles.case_study_overview_tags__9lF81}>
              <li>Content Strategy</li>
              <li>Copywriting</li>
              <li>Design + Art Direction</li>
              <li>Development</li>
              <li>UX Strategy</li>
            </ul>
            <a
              className={buttonstyles.button_pill_container__aFzFU}
              target="_blank"
              href="https://www.patagonia.com"
            >
              View live site
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.4 8.4">
                  <path d="m8.4 0-.1 3.6h-.7l-.2-1.9L.7 8.4 0 7.8 6.8 1l-2-.1V.1z"></path>
                </svg>
              </figure>
            </a>
          </div>
        </div>
        <div className={styles.case_study_overview_content__JppPK}>
          <div>
            <h5>Challenge</h5>
            <p>
              Patagonia is a family-owned apparel and outdoor sporting goods
              outfitter, rooted in sustainability. As a leader in eco-friendly
              business models, they&apos;ve paved the way for others to
              reimagine their practices with sustainability in mind.
            </p>
            <p>
              For Patagonia&apos;s flagship experience, we were tasked with
              crafting a design solution that brought its massive product and
              content library to life in a simple yet insightful way. For a
              brand that truly lives it&apos;s values, it was vital that the
              user experience echo that—meaning that our challenge was to create
              a digital shopping experience that tells a brand story at every
              touchpoint.
            </p>
            <h5>Approach</h5>
            <p>
              Being no stranger to storytelling, Patagonia has always maintained
              a strong voice. Our approach was to elevate this voice, and bring
              it to life in a clear, simple execution, while striking a balance
              between culture, business, and the environment. One that begs
              consumers to consider the impact of their choices—right down to
              the clothes they wear.
            </p>
            <p>
              The reimagined eCommerce platform serves as a brand hub for both
              activism and content, through a cohesive digital style guide, UX
              principles, and a consistent narrative. The experience invokes
              human emotion and rational understanding, and is entirely driven
              by the brand&apos;s mission. Most importantly, it serves both
              function and storytelling by not only selling clothes, but
              transforming value systems.
            </p>
            <h5>Accolades/Press</h5>
            <ul>
              <li>Webby Awards — Winner — Fashion & Beauty — 2021</li>
              <li>
                Webby Awards — People&apos;s Voice Winner — Fashion & Beauty —
                2021
              </li>
            </ul>
          </div>
          <button className={buttonstyles.button_pill_container__aFzFU}>
            View Full Award List
          </button>
        </div>
      </div>
    </section>
  );
}
