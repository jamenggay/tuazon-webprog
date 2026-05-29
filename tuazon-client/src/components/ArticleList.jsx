import { Link } from "react-router-dom";
import Button from "./Button";
import article1Img from "../assets/images/article1.avif";
import article2Img from "../assets/images/article2.jpg";
import article3Img from "../assets/images/article3.jpg";
import article4Img from "../assets/images/article4.jpg";
import keytopic1Img from "../assets/images/keytopic1.png";
import keytopics2Img from "../assets/images/keytopics2.jpeg";
import keytopic3Img from "../assets/images/keytopic3.webp";
import heroImg from "../assets/images/hero.png";

const imageMap = {
  "preserving-gambia-fgm-law": article1Img,
  "fgm-global-concern": article2Img,
  "gambia-fgm-ban-debate": article3Img,
  "gambia-overturn-ban-fgm": article4Img,
  "what-is-fgm": keytopic1Img,
  "health-effects-fgm": keytopics2Img,
  "take-action-fgm": keytopic3Img,
};

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-4 overflow-hidden"
        >
          <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#F5EDE6] overflow-hidden">
            <img
              src={imageMap[article.name] || heroImg}
              alt={article.title}
              className="w-full h-full object-cover object-top rounded-[1.25rem]"
            />
          </div>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C97B84]">
            Article {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-[#5A2A6E]">
            {article.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
            {article.content[0].substring(0, 150)}...
          </p>

          <Link to={`/articles/${article.name}`}>
            <Button className="mt-4" variant="primary">
              Read More
            </Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
