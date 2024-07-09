import styles from "@/Stylesheets/third-sec.module.css"; // Adjust the path as needed
import videostyles from "@/Stylesheets/video-asset.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";

const CaseStudies = () => {
  return (
    <section
      className={styles.home_case_studies_container__Oupmp}
      // style={{
      //   visibility: "visible",
      //   transform: "matrix(1, 0, 0, 1, 0, -1322)",
      // }}
    >
      <ul>
        <li className={styles.home_case_studies_item__bw2QJ}>
          <a href="/case-studies/patagonia-ecommerce-website">
            <div className={styles.home_case_studies_item_asset__gik_x}>
              <div className={`${imagestyles.asset_image_asset__HB8_6} asset`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 720 900"
                  width="720"
                  height="900"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=1024&amp;fm=webp&amp;q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=720&amp;fm=webp&amp;q=65"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div className={styles.home_case_studies_item_info__cTMfU}>
              <h5>Patagonia</h5>
              <p>An eCommerce experience driven by Patagonia’s brand mission</p>
            </div>
          </a>
        </li>
        <li className={styles.home_case_studies_item__bw2QJ}>
          <a href="/case-studies/wilson">
            <div className={styles.home_case_studies_item_asset__gik_x}>
              <div className={`${imagestyles.asset_image_asset__HB8_6} asset`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 720 900"
                  width="720"
                  height="900"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.jpg?w=1024&amp;fm=webp&amp;q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.jpg?w=720&amp;fm=webp&amp;q=65"
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div className={styles.home_case_studies_item_info__cTMfU}>
              <h5>Wilson</h5>
              <p>A century-old sports brand finding its place in culture</p>
            </div>
          </a>
        </li>
        <li className={styles.home_case_studies_item__bw2QJ}>
          <a href="/case-studies/google-ecommerce-web-design">
            <div className={styles.home_case_studies_item_asset__gik_x}>
              <div className={`${videostyles.asset_video_asset__SxT4s} asset`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="574px"
                  height="716px"
                  viewBox="0 0 574 716"
                ></svg>
                <video
                  preload="metadata"
                  loop
                  src="https://cdn.sanity.io/files/8nn8fua5/production/9dc5a490bd877e8685f2089209db192188dd21e7.mp4"
                  data-can-play="true"
                ></video>
              </div>
            </div>
            <div className={styles.home_case_studies_item_info__cTMfU}>
              <h5>Google Store</h5>
              <p>
                An eCommerce experience helping Google bring its hardware to
                people across the globe
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default CaseStudies;
