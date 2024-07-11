import styles from "@/Stylesheets/Secondpgstyles/Twelvth-2-sec.module.css";
import textstyles from "@/Stylesheets/text.module.css";
import videostyles from "@/Stylesheets/video-asset.module.css";

export default function Twelvth_2_sec() {
  return (
    <section
      className={styles.case_study_media_container__jyuDn}
      data-variation="1up"
      data-number="odd"
      // style={{ visibility: 'visible', transform: 'matrix(1, 0, 0, 1, 0, -12730)' }}
    >
      <div className={styles.case_study_media_text__juIwh}>
        <div className={textstyles.text_block_text_block__r6lwJ}>
          <span
            className={textstyles.text_block_text_block__label__4M5QT}
          ></span>
          <h4>A DESIGN SYSTEM AS A PRODUCT</h4>
          <p>
            Constant collaboration between Patagonia&apos;s team and ours—both
            designers and developers—resulted in a refined digital style guide,
            with a technical solution to support it. Each element of the
            redesigned system, from the homepage to navigation to our new
            product filtering system, was built into the style guide to the
            highest fidelity. As the project progressed, our development team
            was embedded into Patagonia&apos;s tech team to offer seamless
            support in building out The Footprint Chronicles and Patagonia.com.
            From this, we built an intuitive content model within the Salesforce
            Commerce Cloud, while our frontend efforts produced a highly
            interactive site with meticulously rendered motion to tell The
            Footprint Chronicle story.
          </p>
        </div>
      </div>
      <div className={styles.case_study_media_assets__lVMHg}>
        <div className={styles.case_study_media_asset__LPMOc}>
          <div
            className={`${videostyles.asset_video_asset__SxT4s} ${styles.asset}`}
          >
            <svg
              style={{ border: "black 2px solid" }}
              xmlns="http://www.w3.org/2000/svg"
              width="1440px"
              height="900px"
              viewBox="0 0 1440 900"
            ></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
