import Button from "../components/Button";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* HERO */}
      <section className="border-y border-[#C97B84] bg-[#F5EDE6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-[#F5EDE6]">
              <img
                src="/src/assets/images/about.png"
                style={{ borderRadius: "1.25rem" }}
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C97B84]">
              About Us
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#5A2A6E] sm:text-4xl">
              Our mission is to end Female Genital Mutilation through awareness
              and advocacy
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#2E2E2E] sm:text-base">
              We aim to educate communities, support survivors, and amplify
              voices to help eliminate harmful practices and protect the rights
              of women and girls worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Read Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-y border-[#C97B84] bg-[#D6C6E1] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5A2A6E]">
            Our Impact
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#5A2A6E]">
            Why this matters
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-[#5A2A6E] bg-[#F5EDE6] p-5">
            <p className="text-2xl font-bold text-[#5A2A6E]">
              Over 230 Million
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E2E2E]">
              Affected Women
            </p>
          </div>
          <div className="rounded-3xl border border-[#5A2A6E] bg-[#F5EDE6] p-5">
            <p className="text-2xl font-bold text-[#5A2A6E]">Over 30</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E2E2E]">
              Countries
            </p>
          </div>
          <div className="rounded-3xl border border-[#5A2A6E] bg-[#F5EDE6] p-5">
            <p className="text-2xl font-bold text-[#5A2A6E]">4 Million</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E2E2E]">
              At Risk Annually
            </p>
          </div>
          <div className="rounded-3xl border border-[#5A2A6E] bg-[#F5EDE6] p-5">
            <p className="text-2xl font-bold text-[#5A2A6E]">1 in 3 Minors</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E2E2E]">
              have experience
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="border-y border-[#C97B84] bg-[#F5EDE6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C97B84]">
              What We Do
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#5A2A6E]">
              Education, support, and advocacy
            </h2>

            <div className="mt-6 space-y-2">
              <article className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-5">
                <h3 className="text-lg font-semibold text-[#5A2A6E]">
                  Education
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
                  We provide accurate, evidence-based information to communities
                  to raise awareness about harmful practices and their
                  consequences. Through{" "}
                  <strong>
                    workshops, school programs, community seminars, and
                    educational materials
                  </strong>
                  , we aim to empower individuals with knowledge that challenges
                  harmful beliefs and encourages informed decision-making.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2E2E2E]">
                  Our programs cover topics such as{" "}
                  <strong>
                    health, human rights, gender equality, bodily autonomy, and
                    the long-term social and psychological effects of harmful
                    practices
                  </strong>
                  . By educating <strong>children, youth, and adults</strong>,
                  we create a ripple effect where informed individuals can
                  influence families, peers, and communities, ultimately
                  contributing to sustainable cultural change.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2E2E2E]">
                  We also focus on{" "}
                  <strong>
                    training educators, community leaders, and volunteers
                  </strong>
                  , ensuring that knowledge continues to spread locally and
                  sustainably. Participants are encouraged to become{" "}
                  <strong>advocates in their communities</strong>, sharing what
                  they’ve learned, mentoring others, and helping to break cycles
                  of harmful traditions.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2E2E2E]">
                  Education is more than information—it is a tool for{" "}
                  <strong>
                    empowerment, prevention, advocacy, and social transformation
                  </strong>
                  . By equipping communities with knowledge and confidence, we
                  help them build a foundation for long-term health, equality,
                  and human rights awareness.
                </p>
              </article>

              <article className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-5">
                <h3 className="text-lg font-semibold text-[#5A2A6E]">
                  Support
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
                  Creating safe spaces and providing resources for survivors and
                  those at risk is at the heart of our mission. We offer{" "}
                  <strong>
                    counseling, mentorship, peer support groups, and access to
                    healthcare resources
                  </strong>
                  , addressing both immediate needs and long-term well-being.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2E2E2E]">
                  Our approach is <strong>holistic</strong>, focusing on
                  physical, emotional, psychological, and social support.
                  Survivors receive care tailored to their unique experiences,
                  helping them{" "}
                  <strong>
                    heal from trauma, regain agency, and rebuild confidence
                  </strong>
                  .
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2E2E2E]">
                  Support extends to <strong>community engagement</strong>,
                  where we work alongside families, local organizations, and
                  leaders to reduce stigma, raise awareness, and provide
                  guidance. We aim to{" "}
                  <strong>protect vulnerable individuals</strong>, strengthen
                  community resilience, and ensure that survivors feel seen,
                  heard, and empowered.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#2E2E2E]">
                  Additionally, we provide{" "}
                  <strong>practical tools and resources</strong> for navigating
                  legal, educational, and healthcare systems, helping those
                  affected access the services they need. Through consistent
                  care, mentorship, and advocacy, we build a{" "}
                  <strong>network of support</strong> that fosters healing,
                  promotes empowerment, and creates lasting impact within
                  communities.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5A2A6E]">
              Get Involved
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#F5EDE6] overflow-hidden">
                <img
                  src="/src/assets/images/about1.png"
                  alt="about 1"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#F5EDE6] overflow-hidden">
                <img
                  src="/src/assets/images/about2.png"
                  alt="about 2"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#F5EDE6] overflow-hidden">
                <img
                  src="/src/assets/images/about3.png"
                  alt="about 3"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#F5EDE6] overflow-hidden">
                <img
                  src="/src/assets/images/about3.jpg"
                  alt="about 4"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                />
              </div>
            </div>

            <Button className="mt-5" variant="accent">
              Take Action
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
