import styles from "@/Stylesheets/Secondpgstyles/Third_2_sec.module.css";
import videostyles from "@/Stylesheets/video-asset.module.css";

export default function Third_2_Sec() {
  return (
    <section
      className={styles.case_study_media_container__jyuDn}
      data-variation="1up"
      data-number="odd"
      //   style={{
      //     visibility: "hidden",
      //     transform: "matrix(1, 0, 0, 1, 0, -2808)",
      //   }}
    >
      <div className={styles.case_study_media_assets__lVMHg}>
        <div className={styles.case_study_media_asset__LPMOc}>
          <div
            className={`${videostyles.asset_video_asset__SxT4s} ${styles.asset}`}
          >
            <svg
              style={{ border: "black 2px solid" }}
              xmlns="http://www.w3.org/2000/svg"
              width="1920px"
              height="1080px"
              viewBox="0 0 1920 1080"
            ></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
