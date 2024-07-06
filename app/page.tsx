import Image from "next/image";
import styles from "./page.module.css";
import First_sec from "@/components/first-sec";
import Second_sec from "@/components/second-sec";
import Third_sec from "@/components/third-sec";
import Fourth_sec from "@/components/fourth-sec";
import Fifth_sec from "@/components/fifth-sec";
import Sixth_sec from "@/components/sixth-sec";

export default function Home() {
  return (
    <>
      <First_sec />
      <Second_sec />
      <Third_sec />
      <Fourth_sec />
      <Fifth_sec />
      <Sixth_sec />
    </>
  );
}
