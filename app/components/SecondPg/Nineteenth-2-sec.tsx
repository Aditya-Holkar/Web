import styles from "@/Stylesheets/Secondpgstyles/Nineteenth-2-sec.module.css";
import videostyles from "@/Stylesheets/video-asset.module.css";

export default function Nineteenth_2_Sec() {
  return (
    <section
      className={styles.case_study_media_container__jyuDn}
      data-variation="1up"
      data-number="odd"
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -22230)",
      //   }}
    >
      <div className={styles.case_study_media_assets__lVMHg}>
        <div className={styles.case_study_media_asset__LPMOc}>
          <div className={`${videostyles.asset_video_asset__SxT4s} asset`}>
            <svg
              style={{ border: "black 2px solid" }}
              xmlns="http://www.w3.org/2000/svg"
              width="1440px"
              height="900px"
              viewBox="0 0 1440 900"
            ></svg>
            <video
              preload="metadata"
              loop
              playsInline
              src="https://cdn.sanity.io/files/8nn8fua5/production/54a25e5c7c71cb31bd7e4ffe5f64191e97bee25f.mp4"
              data-can-play="true"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
