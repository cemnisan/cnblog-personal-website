import styles from "./Info.module.css";
import cemnisan from "../../../../assets/cemnisan.jpg";

function Info() {
  return (
    <>
      <div className={`${styles.container} container`}>
        <div className="row">
          <div className="col-sm-12 order-last order-xs-12 order-sm-12 order-md-12 order-lg-1 col-md-12 col-lg-7">
            <div className="homeTitle">
              <h1>Hi! I'm Cem NİSAN</h1>
              <h4>Full-Stack Web Developer</h4>
            </div>
            <div className="homeParagph mt-4">
              <p className={`${styles.homeParagph} py-3`}>
                Hello 👋 <br /> I'm Cem. I am 21 years old. I am a senior
                student at Çukurova University. I have been dealing with
                software languages ​​for about 1 year. I started my software
                journey with Python and its Framework, Django. After developing
                a few projects with Django, I wanted to devote myself to the web
                space and started learning Javascript. I have learned / continue
                to learn NodeJS and ReactJS along with javascript. I want to
                continue my career as Full-Stack Web Developer.
              </p>
            </div>
          </div>
          <div className="col-sm-12 order-first order-sm-1 order-md-1 order-lg-12 col-md-12 col-lg-5 mb-4 px-5">
            <div className={styles.homeImg}>
              <img src={cemnisan} alt="Cem Nisan" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
