import styles from "@/Stylesheets/Secondpgstyles/Sixth_2_sec.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";
import metastyles from "@/Stylesheets/metabar.module.css";

export default function Sixth_2_sec() {
  return (
    <section
      className={styles.case_study_mobile_comp_container__2kpPx}
      data-direction="left"
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -5901)",
      //   }}
    >
      <div
        className={metastyles.meta_bar_container__8XWWy}
        data-meta-bar="true"
      >
        <figure className={metastyles.meta_bar_line__C8oDB}></figure>
        <div className={metastyles.meta_bar_row__SB8nu}>
          <div>BASIC/DEPT®</div>
          <div>/ Content Strategy</div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div
            data-sticky="true"
            data-adjustment="0"
            // style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
          >
            <div className={styles.text_block_text_block__r6lwJ}>
              <span className={styles.text_block_text_block__label__4M5QT}>
                A Central System
              </span>
              <h4>Content Strategy</h4>
              <p>
                The delicate balance between purpose and product truly came to
                life throughout our overall content strategy for this redesign.
                We set out to create a central system that could not only serve
                as a shopping platform, but a brand initiative as well. In doing
                so, we were able to weave Patagonia’s passion and purpose right
                into each product story, and keep consumers engaged in the
                brand, even if they were just looking to shop.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <ul data-aligned="false" style={{ color: "rgb(37, 36, 34)" }}>
            <li>
              <div
                className={`${imagestyles.asset_image_asset__HB8_6} ${styles.asset}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 530 1128"
                  width="530"
                  height="1128"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/7aca076d8b91f120d769f8ac138cac8a64cc79ee-530x1128.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/7aca076d8b91f120d769f8ac138cac8a64cc79ee-530x1128.jpg?w=720&fm=webp&q=65"
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
                  viewBox="0 0 530 1129"
                  width="530"
                  height="1129"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/385299d34fa86fdd89603cf3119678934fd502cb-530x1129.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/385299d34fa86fdd89603cf3119678934fd502cb-530x1129.jpg?w=720&fm=webp&q=65"
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
                  viewBox="0 0 530 1129"
                  width="530"
                  height="1129"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/0e0f67f64e5f0dde87a0e4994cd686804da9b42d-530x1129.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/0e0f67f64e5f0dde87a0e4994cd686804da9b42d-530x1129.jpg?w=720&fm=webp&q=65"
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
                  viewBox="0 0 530 1129"
                  width="530"
                  height="1129"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/d134e706bac10ab084b62372f1347612f8bf576f-530x1129.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/d134e706bac10ab084b62372f1347612f8bf576f-530x1129.jpg?w=720&fm=webp&q=65"
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
