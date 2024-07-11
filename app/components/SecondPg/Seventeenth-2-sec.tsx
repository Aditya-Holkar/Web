import styles from "@/Stylesheets/Secondpgstyles/Seventeenth-2-sec.module.css";
import textstyles from "@/Stylesheets/text.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";
import videostyles from "@/Stylesheets/video-asset.module.css";

export default function Seventeenth_2_Sec() {
  return (
    <section
      className={styles.case_study_mobile_comp_container__2kpPx}
      data-direction="left"
      //   style={{ visibility: 'visible', transform: 'matrix(1, 0, 0, 1, 0, -20030)' }}
    >
      <div className={styles.row}>
        <div className={styles.col}>
          <div data-sticky="true" className={styles.sticky}>
            <div className={textstyles.text_block_text_block__r6lwJ}>
              <span
                className={textstyles.text_block_text_block__label__4M5QT}
              ></span>
              <h4>Give People Pause</h4>
              <p>
                In an effort to shift the consumers&apos; mindset, we used
                product detail pages as an opportunity to invite bigger brand
                purpose. By gently educating shoppers on how products are made
                and the impact it has on the planet, we&apos;re able to give
                them a moment to pause and consider their habits. In doing so,
                we can convert product seekers into purpose driven shoppers,
                while telling meaningful product stories.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <ul data-aligned="false" style={{ color: "#252422" }}>
            <li>
              <div
                className={`${videostyles.asset_video_asset__SxT4s} ${styles.asset}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="374px"
                  height="812px"
                  viewBox="0 0 374 812"
                ></svg>
                <video
                  preload="metadata"
                  loop
                  playsInline
                  src="https://cdn.sanity.io/files/8nn8fua5/production/128954dcd4e1f0601dacabdbdca0edee2228de43.mp4"
                  data-can-play="true"
                ></video>
              </div>
            </li>
            <li>
              <div
                className={`${imagestyles.asset_image_asset__HB8_6} ${styles.asset}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 530 1126"
                  width="530"
                  height="1126"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/a3fc08a391b41d7134eb23c0dd2d27d1c3ef3221-530x1126.png?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/a3fc08a391b41d7134eb23c0dd2d27d1c3ef3221-530x1126.png?w=720&fm=webp&q=65"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </div>
            </li>
            <li>
              <div
                className={`${imagestyles.asset_image_asset__HB8_6} ${styles.asset}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 530 1126"
                  width="530"
                  height="1126"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/6b547ecf6fe9c95f9cb5fcba058a9ac675a284ee-530x1126.png?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/6b547ecf6fe9c95f9cb5fcba058a9ac675a284ee-530x1126.png?w=720&fm=webp&q=65"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
