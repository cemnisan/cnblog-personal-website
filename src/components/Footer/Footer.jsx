import { iconsData } from "../../data/iconsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const iconItem = iconsData.map((item, index) => {
    return (
      <div key={index}>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={item.title}
        >
          <FontAwesomeIcon
            color={"black"}
            className="px-2"
            icon={[`${item.icon[0]}`, `${item.icon[1]}`]}
            size="3x"
          />
        </a>
      </div>
    );
  });

  return (
    <div className="container icons px-4 py-3 mt-5">
      <div className="title">
        <hr />
        <p className="text-center px-4" id="footerFollow">
          Follow Me
        </p>
      </div>
      <div className="mb-4 d-flex justify-content-center px-1">{iconItem}</div>
    </div>
  );
}

export default Footer;
