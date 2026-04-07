import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import articles from "../assets/article-content.js";

const imageMap = {
  "preserving-gambia-fgm-law": "/src/assets/images/article1.avif",
  "fgm-global-concern": "/src/assets/images/article2.jpg",
  "gambia-fgm-ban-debate": "/src/assets/images/article3.jpg",
  "gambia-overturn-ban-fgm": "/src/assets/images/article4.jpg",
  "what-is-fgm": "/src/assets/images/keytopic1.png",
  "health-effects-fgm": "/src/assets/images/keytopics2.jpeg",
  "take-action-fgm": "/src/assets/images/keytopic3.webp",
};

function ArticlePage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6 bg-[#F5EDE6]">
        <section className="border-y-2 border-[#5A2A6E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-[#5A2A6E]">
              Article not found
            </h1>
            <Button onClick={() => navigate(-1)} variant="primary">
              Back to Previous Page
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 bg-[#F5EDE6]">
      <section className="border-y-2 border-[#5A2A6E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button onClick={() => navigate(-1)} variant="primary">
              Back to Previous Page
            </Button>
          </div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C97B84]">
            Article
          </p>

          <h1 className="text-3xl font-bold leading-tight text-[#5A2A6E] sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-2 text-sm text-[#2E2E2E]">
            {article.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-[#5A2A6E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#D6C6E1] mb-8 overflow-hidden">
            <img
              src={imageMap[article.name]}
              alt={article.title}
              className="w-full h-full object-cover object-top rounded-[1.25rem]"
            />
          </div>

          <div className="space-y-4">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-[#2E2E2E] whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-[#C97B84] pt-6">
            <Button onClick={() => navigate(-1)} variant="primary">
              Back to Previous Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;

// import Button from "../components/Button";

// const ArticlePage = () => {
//   return (
//     <div className="flex w-full flex-col gap-6 bg-[#F5EDE6]">
//       <section className="border-y-2 border-[#5A2A6E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2E2E2E]">
//           Articles
//         </p>
//         <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#5A2A6E] sm:text-4xl">
//           Understanding Female Genital Mutilation
//         </h1>
//         <p className="mt-4 max-w-lg text-sm leading-7 text-[#2E2E2E] sm:text-base">
//           Explore articles highlighting the impact of FGM on women and girls,
//           global statistics, survivor stories, and initiatives working to end
//           this harmful practice. Learn how communities are advocating for change
//           and protecting the rights of vulnerable individuals.
//         </p>
//         <div className="mt-6">
//           <Button
//             to="/"
//             className="bg-[#5A2A6E] text-white hover:bg-[#C97B84]"
//             variant="primary"
//           >
//             Back Home
//           </Button>
//         </div>
//       </section>

//       <section className="border-y-2 border-[#5A2A6E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
//         <div className="mb-6">
//           <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2E2E2E]">
//             Featured Articles
//           </p>
//           <h2 className="mt-2 text-2xl font-semibold text-[#5A2A6E]">
//             Stories, News, and Updates on FGM
//           </h2>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {[1, 2, 3, 4].map((num) => (
//             <article
//               key={num}
//               className="rounded-3xl border-2 border-[#5A2A6E] bg-[#D6C6E1] p-4"
//             >
//               <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#F5EDE6] overflow-hidden">
//                 <img
//                   src={`/src/assets/images/article${num}.${num === 1 ? "avif" : "jpg"}`}
//                   alt={`article ${num}`}
//                   className="w-full h-full object-cover object-top rounded-[1.25rem]"
//                 />
//               </div>
//               <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E2E2E]">
//                 Article 0{num}
//               </p>
//               <h3 className="mt-2 text-lg font-semibold text-[#5A2A6E]">
//                 {num === 1 &&
//                   "Preserving The Gambia's FGM Law Is Only the Start"}
//                 {num === 2 && "Female Genital Mutilation: A global concern"}
//                 {num === 3 &&
//                   "The Gambia is debating whether to repeal its ban on female genital mutilation"}
//                 {num === 4 &&
//                   "Gambia Votes to Overturn Landmark Ban on Female Genital Cutting"}
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
//                 {num === 1 &&
//                   "The conviction of the three individuals by the magistrates’ court in The Gambia sparked a public debate—one that threatened the advancement of women’s rights. "}
//                 {num === 2 &&
//                   "Released in observance of International Women’s Day, Female Genital Mutilation: A global concern provides an updated data-driven assessment of female genital mutilation (FGM) around the world. "}
//                 {num === 3 &&
//                   "Opponents of the ban on female genital mutilation (FGM) gather outside the National Assembly in Banjul, The Gambia, on March 18, 2024."}
//                 {num === 4 &&
//                   "Protesters in favour of female genital mutilation (FGM) gather outside the National Assembly in Banjul, The Gambia, on March 18, 2024, during a debate on a bill seeking to lift the ban on the practice."}
//               </p>

//               <Button
//                 className="mt-4 bg-[#5A2A6E] text-white hover:bg-[#C97B84]"
//                 variant="primary"
//               >
//                 Read More
//               </Button>
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ArticlePage;
