import styles from "@/Stylesheets/fifth-sec.module.css";
import buttonstyles from "@/Stylesheets/button.module.css";

export default function Fifth_sec() {
  return (
    <section
      className={styles.home_spotlight_container__w673I}
      // style={{
      //   visibility: "visible",
      //   transform: "matrix(1, 0, 0, 1, 0, -2856)",
      // }}
    >
      <div className={styles.home_spotlight_row__6fm_G}>
        <div className={styles.home_spotlight_col__YN9bv}>
          <div className={styles.asset_video_asset__SxT4s}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="866px"
              height="1214px"
              viewBox="0 0 866 1214"
            ></svg> */}
            <video
              preload="metadata"
              loop
              src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4"
              data-can-play="true"
            ></video>
          </div>
        </div>
        <div className={styles.home_spotlight_col__YN9bv}>
          <div
            className={styles.home_spotlight_sticky__BmQSw}
            data-sticky="true"
            // style={{ transform: "matrix(1, 0, 0, 1, 0, 122)" }}
            data-adjustment="0"
          >
            <q>BASIC/DEPT® helps brands ● connect w/ culture</q>
            <span className={styles.home_spotlight_label__5uJTZ}>
              Adweek<strong>Agency Spotlight</strong>
              <p>
                <a
                  className={buttonstyles.button_pill_container__aFzFU}
                  href="/about"
                >
                  About Us
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
