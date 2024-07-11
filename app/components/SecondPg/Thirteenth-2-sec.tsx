import styles from "@/Stylesheets/Secondpgstyles/Thirteenth-2-sec.module.css";

export default function Thirteenth_2_Sec() {
  return (
    <section
      className={styles.case_study_ordered_list_container__tmuxV}
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -14230)",
      //   }}
    >
      <div className={styles.case_study_ordered_list_labels__BWbTX}>
        <div>Challenge</div>
        <div>Solution</div>
      </div>
      <ol>
        <li>
          <div>
            <h6>
              Patagonia needed a design library that was useful to more than
              just the design team.
            </h6>
          </div>
          <div>
            <p>
              We built a dynamic, atomic based design system that acted as a
              centralized library for the Patagonia design and marketing teams
              to reference. It contained rules for various elements of a
              comprehensive design structure, guidelines for photography and
              content usage, component use cases and functionality, as well as
              high level guardrails for simple aspects like ADA compliance best
              practices.
            </p>
          </div>
        </li>
        <li>
          <div>
            <h6>
              In order to properly prototype, our code had to be built
              responsively and with purpose.
            </h6>
          </div>
          <div>
            <p>
              From the start we knew this entire system had to be built with the
              intent of prototyping useful interactions, motion references, and
              experience references at a component, module, and page level. We
              were mindful of this every step of the build, and even worked with
              actual brand content when creating user flows, in an effort to
              help stimulate realistic key journeys throughout the experience.
              Each element was built responsively and with purpose, so that the
              Patagonia teams could preview various pages and moments exactly as
              they would appear for a consumer.
            </p>
          </div>
        </li>
        <li>
          <div>
            <h6>Our system needed to perform beyond internal documentation.</h6>
          </div>
          <div>
            <p>
              The final product of our efforts aimed to create useful front-end
              prototypes that Patagonia could use with customers in a testing
              process that ran concurrently with our design and build. Our
              digital design library, filled with useful documentation and
              references, became a vital tool in creating better QA and testing
              processes, as our live builds of the platform moved forward.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
