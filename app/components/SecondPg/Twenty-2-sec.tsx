import styles from "@/Stylesheets/Secondpgstyles/Twenty-2-sec.module.css";
import textstyles from "@/Stylesheets/text.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";

export default function Twenty_2_Sec() {
  return (
    <section
      className={styles.case_study_media_container__jyuDn}
      data-variation="2up"
      data-number="even"
      // style={{
      //   visibility: "visible",
      //   transform: "matrix(1, 0, 0, 1, 0, -23000)",
      // }}
    >
      <div className={styles.case_study_media_text__juIwh}>
        <div className={textstyles.text_block_text_block__r6lwJ}>
          <span
            className={textstyles.text_block_text_block__label__4M5QT}
          ></span>
          <h4>A CALL TO ACTION</h4>
          <p>
            Our overall strategy and goal for The Footprint Chronicles
            culminates into one simple storytelling structure. We start with why
            each aspect of our mission is important—why these points need to be
            made and stories be told. Consumers are then given an honest
            explanation of where we stand in this journey to make and see
            change. Finally, the brand&apos;s commitment to what&apos;s next.
            Where does Patagonia progress from here and what can consumers and
            every brand do to play a role in this shift.
          </p>
        </div>
      </div>
      <div className={styles.case_study_media_assets__lVMHg}>
        <div className={styles.case_study_media_asset__LPMOc}>
          <div className={imagestyles.asset_image_asset__HB8_6}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1760 9287"
              width="1760"
              height="9287"
            ></svg>
            <picture>
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/e1884364ea6e4a0f9952f61fefbd06a930c60850-1760x9287.jpg?w=2240&fm=webp&q=65"
                media="(min-width: 1920px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/e1884364ea6e4a0f9952f61fefbd06a930c60850-1760x9287.jpg?w=1920&fm=webp&q=65"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/e1884364ea6e4a0f9952f61fefbd06a930c60850-1760x9287.jpg?w=1280&fm=webp&q=65"
                media="(min-width: 720px)"
              />
              <img
                src="https://cdn.sanity.io/images/8nn8fua5/production/e1884364ea6e4a0f9952f61fefbd06a930c60850-1760x9287.jpg?w=720&fm=webp&q=65"
                alt=""
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div className={styles.case_study_media_asset__LPMOc}>
          <div className={imagestyles.asset_image_asset__HB8_6}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1760 9266"
              width="1760"
              height="9266"
            ></svg>
            <picture>
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/3326b474a877416ef2947488dcbc05661c951f19-1760x9266.jpg?w=2240&fm=webp&q=65"
                media="(min-width: 1920px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/3326b474a877416ef2947488dcbc05661c951f19-1760x9266.jpg?w=1920&fm=webp&q=65"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/3326b474a877416ef2947488dcbc05661c951f19-1760x9266.jpg?w=1280&fm=webp&q=65"
                media="(min-width: 720px)"
              />
              <img
                src="https://cdn.sanity.io/images/8nn8fua5/production/3326b474a877416ef2947488dcbc05661c951f19-1760x9266.jpg?w=720&fm=webp&q=65"
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
