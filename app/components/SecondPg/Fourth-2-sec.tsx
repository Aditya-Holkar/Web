import styles from "@/Stylesheets/Secondpgstyles/Fourth_2_sec.module.css";
import metastyles from "@/Stylesheets/metabar.module.css";

export default function Fourth_2_Sec() {
  return (
    <section
      className={styles.case_study_results_container__T0QAc}
      data-variation="2column"
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -3901)",
      //   }}
    >
      <div
        className={metastyles.meta_bar_container__8XWWy}
        data-meta-bar="true"
      >
        <figure className={metastyles.meta_bar_line__C8oDB}></figure>
        <div className={metastyles.meta_bar_row__SB8nu}>
          <div>BASIC/DEPT®</div>
          <div>/ Results</div>
        </div>
      </div>
      <div className={styles.case_study_results_content___bjpQ}>
        <h2>Results</h2>
        <ul>
          <li>
            <div className={styles.case_study_results_result__UbWbj}>
              <h6>Increase in Mobile Revenue</h6>
              <span>25%</span>
            </div>
          </li>
          <li>
            <div className={styles.case_study_results_result__UbWbj}>
              <h6>In L2 Gartner Digital IQ Index, In "Activewear" Category</h6>
              <span>#6</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
