export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Developer & Creator
                        </h3>

                        <p className="text-muted-foreground">
                            Currently pursing a BS in Computer Science with a minor in math, I specialize
                            in creating responsive, accesible, and preformant applications
                            using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about creating elegant solutions to complex
                            problems, and I am always learning new technologies and
                            techniques to stay at the forefront of the ever-evolving world
                            of software engineering.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 tranition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
        </section>
    );
};