import Image from "next/image";
import styles from "./page.module.css";
import First_sec from "./components/FirstPg/first-sec";
import Second_sec from "./components/FirstPg/second-sec";
import Third_sec from "./components/FirstPg/third-sec";
import Fourth_sec from "./components/FirstPg/fourth-sec";
import Fifth_sec from "./components/FirstPg/fifth-sec";
import Sixth_sec from "./components/FirstPg/sixth-sec";
import First_2_Sec from "./components/SecondPg/First-2-sec";
import Second_2_sec from "./components/SecondPg/Second-2-sec";
import Third_2_Sec from "./components/SecondPg/Third-2-sec";
import Fourth_2_Sec from "./components/SecondPg/Fourth-2-sec";
import Fifth_2_sec from "./components/SecondPg/Fifth-2-sec";
import Sixth_2_sec from "./components/SecondPg/Sixth-2-sec";

export default function Home() {
  return (
    <>
      <hr></hr>
      <br></br>
      <br></br>

      <br></br>
      <h1 style={{ textAlign: "center" }}>First Page Starts from here</h1>
      <br></br>

      <br></br>
      <br></br>
      <hr></hr>
      <First_sec />
      <Second_sec />
      <Third_sec />
      <Fourth_sec />
      <Fifth_sec />
      <Sixth_sec />

      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>Second Page Starts from here</h1>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>

      <First_2_Sec />
      <Second_2_sec />
      <Third_2_Sec />
      <Fourth_2_Sec />
      <Fifth_2_sec />
      <Sixth_2_sec />
    </>
  );
}
