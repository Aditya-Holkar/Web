import styles from "@/Stylesheets/Secondpgstyles/Sixteenth-2-sec.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";

export default function Sixteenth_2_Sec() {
  return (
    <section
      className={styles.case_study_media_container__jyuDn}
      data-variation="1up"
      data-number="odd"
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -18830)",
      //   }}
    >
      <div className={styles.case_study_media_assets__lVMHg}>
        <div className={styles.case_study_media_asset__LPMOc}>
          <div
            className={`${imagestyles.asset_image_asset__HB8_6} ${styles.asset}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1760 990"
              width="1760"
              height="990"
            ></svg>
            <picture>
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/94ffbeecc3f9876406f797d30f859d5dc00a40f2-1760x990.png?w=2240&fm=webp&q=65"
                media="(min-width: 1920px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/94ffbeecc3f9876406f797d30f859d5dc00a40f2-1760x990.png?w=1920&fm=webp&q=65"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/94ffbeecc3f9876406f797d30f859d5dc00a40f2-1760x990.png?w=1280&fm=webp&q=65"
                media="(min-width: 720px)"
              />
              <img
                src="https://cdn.sanity.io/images/8nn8fua5/production/94ffbeecc3f9876406f797d30f859d5dc00a40f2-1760x990.png?w=720&fm=webp&q=65"
                alt=""
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
