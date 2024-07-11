import styles from "@/Stylesheets/Secondpgstyles/Eight-2-sec.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";
import videostyles from "@/Stylesheets/video-asset.module.css";

export default function Eight_2_sec() {
  return (
    <section
      className={styles.case_study_stack_container__XtZF0}
      data-direction="left"
      //   style={{
      //     visibility: "visible",
      //     transform: "matrix(1, 0, 0, 1, 0, -6951)",
      //   }}
    >
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.case_study_stack_asset__2ThXX}>
            <div
              className={`${imagestyles.asset_image_asset__HB8_6} ${styles.asset}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 870 490"
                width="870"
                height="490"
              ></svg>
              <picture>
                <source
                  srcSet="https://cdn.sanity.io/images/8nn8fua5/production/4941bc8f97621b58cc865b7995abb1a126d19c60-870x490.jpg?w=1280&amp;fm=webp&amp;q=65"
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet="https://cdn.sanity.io/images/8nn8fua5/production/4941bc8f97621b58cc865b7995abb1a126d19c60-870x490.jpg?w=1024&amp;fm=webp&amp;q=65"
                  media="(min-width: 720px)"
                />
                <img
                  src="https://cdn.sanity.io/images/8nn8fua5/production/4941bc8f97621b58cc865b7995abb1a126d19c60-870x490.jpg?w=720&amp;fm=webp&amp;q=65"
                  alt=""
                  loading="lazy"
                  style={{ border: "black 2px solid" }}
                />
              </picture>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.case_study_stack_text__Veo_h}>
            <h5>Navigation &amp; Information Architecture</h5>
            <p>
              A new navigation system considers the full scope of the consumer
              journey—from initial interaction to finding exactly what they’re
              looking for. We transformed the experience by organizing content
              in a clear, logical way, and integrating relevant stories when
              appropriate. This gives products more context while seamlessly
              injecting the brand voice throughout the entire journey.
              <br />
              <br />
              The new navigation prioritizes the overall design’s larger goal
              for product and purpose-led storytelling through a simple curation
              strategy. An extensive library of cultural initiatives like
              Patagonia Action Works, The Footprint Chronicles, and more are
              properly showcased for easy discovery.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.case_study_stack_asset__2ThXX}>
            <div
              className={`${videostyles.asset_video_asset__SxT4s} ${styles.asset}`}
            >
              <svg
                style={{ border: "black 2px solid" }}
                xmlns="http://www.w3.org/2000/svg"
                width="1440px"
                height="900px"
                viewBox="0 0 1440 900"
              ></svg>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.case_study_stack_text__Veo_h}>
            <h5>Product Filtration</h5>
            <p>
              To maintain the simplicity of our design, we needed a powerful
              filtration tool that could optimize a complex product catalog. The
              end result was a floating, contextually aware action button that
              becomes the most prominent prompt on any page. This responsive UX
              pattern is designed for approachability and progression, and
              successfully helps users browse.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.case_study_stack_asset__2ThXX}>
            <div
              className={`${videostyles.asset_video_asset__SxT4s} ${styles.asset}`}
            >
              <svg
                style={{ border: "black 2px solid" }}
                xmlns="http://www.w3.org/2000/svg"
                width="1440px"
                height="900px"
                viewBox="0 0 1440 900"
              ></svg>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.case_study_stack_text__Veo_h}>
            <h5>Product Education</h5>
            <p>
              It was essential that this experience was personalized and always
              relevant to the consumer. Our goal was to ultimately guide users
              to the best product for their needs in one simple flow. By
              implementing an in-line Q&amp;A and product comparison overlay, we
              were able to help customers decide which product is right for
              them, saving them the hassle of toggling between product detail
              pages. As a result, users are directly routed through the sales
              funnel in one seamless UX flow.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.case_study_stack_asset__2ThXX}>
            <div
              className={`${videostyles.asset_video_asset__SxT4s} ${styles.asset}`}
            >
              <svg
                style={{ border: "black 2px solid" }}
                xmlns="http://www.w3.org/2000/svg"
                width="1440px"
                height="900px"
                viewBox="0 0 1440 900"
              ></svg>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.case_study_stack_text__Veo_h}>
            <h5></h5>
          </div>
        </div>
      </div>
    </section>
  );
}
