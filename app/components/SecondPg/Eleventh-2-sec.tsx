import styles from "@/Stylesheets/Secondpgstyles/Eleventh-2-sec.module.css";
import imagestyles from "@/Stylesheets/image-asset.module.css";
import videostyles from "@/Stylesheets/video-asset.module.css";
import textstyles from "@/Stylesheets/text.module.css";

export default function Eleventh_2_Sec() {
  return (
    <section
      className={styles.case_study_mobile_comp_container__2kpPx}
      data-direction="left"
      // style={{ visibility: 'visible', transform: 'matrix(1, 0, 0, 1, 0, -11251)' }}
    >
      <div className="row">
        <div className="col">
          <div data-sticky="true" className={styles.sticky}>
            <div className={textstyles.text_block_text_block__r6lwJ}>
              <span
                className={textstyles.text_block_text_block__label__4M5QT}
              ></span>
              <h4>OPTIMIZED FOR MOBILE</h4>
              <p>
                We always aim for an equally compelling experience on all screen
                sizes—but, in our partnership with Patagonia we made a point to
                prioritize our design system to be stunning and seamless across
                mobile devices. This ensured that our experience was extremely
                mobile friendly as much of our consumer base would be shopping
                and engaging with the brand and content from their phones. From
                every Footprint Chronicle story to each product detail page, the
                entire system can seamlessly flex between mobile and desktop.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <ul data-aligned="false" style={{ color: "#252422" }}>
            <li>
              <div className={`${videostyles.asset_video_asset__SxT4s} asset`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1124px"
                  height="2000px"
                  viewBox="0 0 1124 2000"
                ></svg>
                <video
                  preload="metadata"
                  loop
                  playsInline
                  src="https://cdn.sanity.io/files/8nn8fua5/production/56faa054dad85cc10aed78154fd8e17e69a63363.mp4"
                  data-can-play="true"
                ></video>
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
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/49d5ae0d5dd11c9e310a1cf093fddd148e60dde6-530x1126.png?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/49d5ae0d5dd11c9e310a1cf093fddd148e60dde6-530x1126.png?w=720&fm=webp&q=65"
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
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/0802923431d8602e267665f0432d50bdce9401eb-530x1126.png?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/0802923431d8602e267665f0432d50bdce9401eb-530x1126.png?w=720&fm=webp&q=65"
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
                  viewBox="0 0 530 1120"
                  width="530"
                  height="1120"
                ></svg>
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/ceab57c9cc89067a22e2098fd382ee1114c460c3-530x1120.jpg?w=1024&fm=webp&q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/ceab57c9cc89067a22e2098fd382ee1114c460c3-530x1120.jpg?w=720&fm=webp&q=65"
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
