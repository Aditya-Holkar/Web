import styles from "@/Stylesheets/Secondpgstyles/First_2_sec.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";

export default function First_2_Sec() {
  return (
    <section
      className={styles.case_study_intro_container__Jgn_5}
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -242)",
      //   }}
    >
      <h1>
        <div data-disabled="false">
          <span className={styles.sliding_text_word__tDWB7}>
            <span>Patagonia</span>
          </span>
        </div>
      </h1>
      <div className={styles.case_study_intro_categories___ow1x}>
        <div data-disabled="false">
          <span className={styles.sliding_text_word__tDWB7}>
            <span>Project</span>
          </span>
          <span className={styles.sliding_text_word__tDWB7}>
            <span>Focus</span>
          </span>
        </div>
        <ul>
          <li>
            <div data-disabled="false">
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Fashion</span>
              </span>
              <span className={styles.sliding_text_word__tDWB7}>
                <span>+</span>
              </span>
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Apparel</span>
              </span>
            </div>
          </li>
          <li>
            <div data-disabled="false">
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Retail</span>
              </span>
              <span className={styles.sliding_text_word__tDWB7}>
                <span>+</span>
              </span>
              <span className={styles.sliding_text_word__tDWB7}>
                <span>eCommerce</span>
              </span>
            </div>
          </li>
          <li>
            <div data-disabled="false">
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Consumer</span>
              </span>
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Culture</span>
              </span>
            </div>
          </li>
          <li>
            <div data-disabled="false">
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Software</span>
              </span>
              <span className={styles.sliding_text_word__tDWB7}>
                <span>+</span>
              </span>
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Technology</span>
              </span>
            </div>
          </li>
          <li>
            <div data-disabled="false">
              <span className={styles.sliding_text_word__tDWB7}>
                <span>Environmental</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={styles.intro_asset_wrapper_container__5bfMd}
        data-disabled="false"
      >
        <div className={styles.intro_asset_wrapper_mask__DfCcu}>
          <div className={styles.intro_asset_wrapper_children___BE9p}>
            <div className={`${imagestyles.asset_image_asset__HB8_6} asset`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                width="1920"
                height="1080"
              ></svg>
              <picture>
                <source
                  srcSet="https://cdn.sanity.io/images/8nn8fua5/production/c34fff12c55d490d829301d182605e99e5d370e1-1920x1080.png?w=2240&amp;fm=webp&amp;q=65"
                  media="(min-width: 1920px)"
                />
                <source
                  srcSet="https://cdn.sanity.io/images/8nn8fua5/production/c34fff12c55d490d829301d182605e99e5d370e1-1920x1080.png?w=1920&amp;fm=webp&amp;q=65"
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet="https://cdn.sanity.io/images/8nn8fua5/production/c34fff12c55d490d829301d182605e99e5d370e1-1920x1080.png?w=1280&amp;fm=webp&amp;q=65"
                  media="(min-width: 720px)"
                />
                <img
                  src="https://cdn.sanity.io/images/8nn8fua5/production/c34fff12c55d490d829301d182605e99e5d370e1-1920x1080.png?w=720&amp;fm=webp&amp;q=65"
                  alt=""
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
