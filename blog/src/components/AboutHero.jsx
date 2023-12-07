import Eazy from '../assets/images/eazy.png'
import { useTheme } from "../context/ThemeContext";

function Hero() {
    const { theme } = useTheme();

    return (
        <section
            className={`${theme === "dark" ? "bg-primary" : "bg-secondary"
                } gap-[3.12rem] flex-col flex w-full justify-center  py-[1.875rem] px-2 sm:px-8 lg:px-[4rem]`}
        >
            <div className="flex flex-col items-center justify-center  w-full">
                <hr className={`w-full ${theme === "dark" ? 'bg-secondary' : 'bg-primary'}`} />

                <h1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} inter whitespace-nowrap text-[4.5rem] sm:text-[9rem] lg:text-[12.235rem]  font-bold`}>
                    Eazyisreal
                </h1>
                <hr className={`w-full ${theme === "dark" ? 'bg-secondary' : 'bg-primary'}`} />
            </div>
            <img  src={Eazy} alt="image of blog owner" />

            <div className="flex flex-col items-start gap-6 ">
                <h1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} inter text-xl font-semibold`}>About Me</h1>
                <p className={`${theme === "dark" ? 'text-[#C0C5D0]' : 'text-primary'} inter text-base `}>As a dedicated and experienced software engineer, I am committed to crafting efficient and robust solutions that address the unique challenges faced by my clients and users. Possessing a solid grasp of software development principles and utilizing a diverse set of programming languages and tools, I thrive in collaborating with cross-functional teams to successfully deliver projects.</p>
            </div>

            <div className="flex flex-col items-start gap-6 ">
                <h1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} inter text-xl font-semibold`}> Technical Skills:</h1>
                <ol className='flex flex-col gap-4'>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Proficient in programming languages such as Python, JavaScript, and C</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Strong expertise in web development frameworks, including Django and React</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>In-depth knowledge of database management systems, such as PostgreSQL</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Familiarity with version control systems, particularly Git, for efficient code management</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Experience in designing and implementing RESTful APIs for seamless communication between frontend and backend systems</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Skilled in utilizing development tools, including integrated development environments (IDEs) and debugging tools</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Competent in working with cloud platforms like AWS for scalable and secure application deployment</l1>
                </ol>
            </div>

            <div className="flex flex-col items-start gap-6 ">
                <h1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} inter text-xl font-semibold`}> Sof Skills:</h1>
                <ul className='flex flex-col gap-4 list-disc'>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Effective communication skills, enabling clear and concise interaction within development teams</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Strong problem-solving abilities, coupled with a methodical and analytical approacht</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Exceptional attention to detail, ensuring the delivery of high-quality and bug-free code</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Proven ability to work collaboratively in cross-functional teams to achieve project goals</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Continuous learning mindset, staying updated with the latest industry trends and technologies</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Adaptable to dynamic project requirements, showcasing flexibility and versatility</l1>
                    <l1 className={`${theme === "dark" ? 'text-secondary' : 'text-primary'} `}>Adept at conducting thorough system analysis and gathering user requirements for informed software design decisions</l1>
                </ul>
            </div>
        </section>
    );
}

export default Hero;
