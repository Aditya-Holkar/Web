import styles from "@/Stylesheets/Secondpgstyles/Tenth-2-sec.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";

export default function Tenth_2_Sec() {
  return (
    <section
      className={styles.case_study_media_container__jyuDn}
      data-variation="1up"
      data-number="odd"
      // style={{ visibility: 'visible', transform: 'matrix(1, 0, 0, 1, 0, -10751)' }}
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
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/5d7e0f1c1f0db07f2be073e180fc05ea67147f52-1760x990.jpg?w=2240&amp;fm=webp&amp;q=65"
                media="(min-width: 1920px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/5d7e0f1c1f0db07f2be073e180fc05ea67147f52-1760x990.jpg?w=1920&amp;fm=webp&amp;q=65"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/5d7e0f1c1f0db07f2be073e180fc05ea67147f52-1760x990.jpg?w=1280&amp;fm=webp&amp;q=65"
                media="(min-width: 720px)"
              />
              <img
                src="https://cdn.sanity.io/images/8nn8fua5/production/5d7e0f1c1f0db07f2be073e180fc05ea67147f52-1760x990.jpg?w=720&amp;fm=webp&amp;q=65"
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
