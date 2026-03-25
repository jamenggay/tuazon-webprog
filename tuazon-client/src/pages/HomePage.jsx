import Button from '../components/Button';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">

            {/* HERO */}
            <section className="border-y border-[#C97B84] bg-[#F5EDE6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C97B84]">
                            Awareness
                        </p>
                        <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#5A2A6E] sm:text-4xl">
                            Raising Awareness on Female Genital Mutilation
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-[#2E2E2E] sm:text-base">
                            Educating, empowering, and advocating for the protection of women and girls worldwide. Together, we can break the silence and promote change.
                        </p>
                        <div className="mt-6">
                            <Button to="/about" variant='primary'>
                                Learn More
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-6">
                        <div className="flex min-h-[65px] items-center justify-center rounded-[1.25rem] bg-[#F5EDE6]">
                            <img src='/src/assets/images/hero.png' style={{width: "750px", height: "200px"}} />
                        </div>
                    </div>
                </div>
            </section>

            {/* KPI */}
            <section className="border-y border-[#C97B84] bg-[#D6C6E1] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5A2A6E]">
                        Awareness Impact
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#5A2A6E]">
                        Global insights
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border border-[#5A2A6E] bg-[#F5EDE6] p-5">
                        <p className="text-2xl font-bold text-[#5A2A6E]">Over 230 Million</p>
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

            {/* key topics */}
            <section className="border-y border-[#C97B84] bg-[#F5EDE6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C97B84]">
                        Learn More
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#5A2A6E]">
                        Explore key topics
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-4">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#F5EDE6]">
                           <img src='/src/assets/images/keytopic1.png' style={{width: "600px", height: "400px", borderRadius: "1.25rem" }}/>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#5A2A6E]">
                            What is FGM?
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
                            Understand the practice, its types, and its global impact.
                        </p>
                        <Button className="mt-4" variant="primary">
                            Learn More
                        </Button>
                    </article>

                    <article className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-4">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#F5EDE6]">
                            <img src='/src/assets/images/keytopics2.jpeg' style={{width: "600px", height: "400px", borderRadius: "1.25rem" }}/>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#5A2A6E]">
                            Health Effects
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
                            Learn about the physical and psychological consequences.
                        </p>
                        <Button className="mt-4" variant="primary">
                            Learn More
                        </Button>
                    </article>

                    <article className="rounded-3xl border border-[#D6C6E1] bg-[#D6C6E1] p-4">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[#F5EDE6]">
                            <img src='/src/assets/images/keytopic3.webp' style={{width: "600px", height: "400px", borderRadius: "1.25rem" }}/>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#5A2A6E]">
                            Take Action
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
                            Discover ways you can help raise awareness and support change.
                        </p>
                        <Button className="mt-4" variant="accent">
                            Get Involved
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;