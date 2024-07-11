import styles from "@/Stylesheets/Secondpgstyles/Eighteenth-2-sec.module.css";
import textstyles from "@/Stylesheets/text.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";

export default function Eighteenth_2_Sec() {
  return (
    <section
      className={styles.case_study_mobile_comp_container__2kpPx}
      data-direction="left"
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -20930)",
      //   }}
    >
      <div className={styles.row}>
        <div className={styles.col}>
          <div data-sticky="true" className={styles.sticky}>
            <div className={textstyles.text_block_text_block__r6lwJ}>
              <span
                className={textstyles.text_block_text_block__label__4M5QT}
              ></span>
              <h4>AN IMMERSIVE STORY</h4>
              <p>
                Our goal with The Footprint Chronicles was to first build
                empathy with customers, then drive action. Our content strategy
                and component design allowed us to tell rich, dynamic stories
                through interactive content that allows users to explore and
                learn. The flexibility of this design lets us not only educate
                consumers about the brand mission, but impacts real change in
                cultural mindset.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <ul data-aligned="false">
            <li>
              <div className={`${imagestyles.asset_image_asset__HB8_6} asset`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 530 1126"
                  width="530"
                  height="1126"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/38e2b1badf5a32d3d36dc780bf4c636c2223b588-530x1126.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/38e2b1badf5a32d3d36dc780bf4c636c2223b588-530x1126.jpg?w=720&fm=webp&q=65"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </div>
            </li>
            <li>
              <div className={`${imagestyles.asset_image_asset__HB8_6} asset`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 530 1126"
                  width="530"
                  height="1126"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/84a8a976a3a040137aca88cc6ee9c57c345b15f1-530x1126.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/84a8a976a3a040137aca88cc6ee9c57c345b15f1-530x1126.jpg?w=720&fm=webp&q=65"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </div>
            </li>
            <li>
              <div className={`${imagestyles.asset_image_asset__HB8_6} asset`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 530 1126"
                  width="530"
                  height="1126"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/5487e33c70cd84b50a22977870e03cc6aee06412-530x1126.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/5487e33c70cd84b50a22977870e03cc6aee06412-530x1126.jpg?w=720&fm=webp&q=65"
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
