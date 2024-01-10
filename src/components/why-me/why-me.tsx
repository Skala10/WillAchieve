import Image from "next/image"
import whyme from "../../../public/whyme.jpg"

export const WhyMe = () => {
  return (
    <section id="whyme" className="max-w-[1440px] mx-auto px-5 py-8 md:py-16">
      <div className="flex justify-center items-center  flex-col-reverse mdlg:flex-row mdlg:justify-around">
        <div className="relative inline-block max-w-[600px] h-[720px]">
          <Image
            src={whyme}
            alt="Image describing why to choose this personal trainer"
            width={0}
            height={0}
            className="w-full h-full object-cover object-center mdlg:pr-7"
          />
        </div>
        <div className="mdlg:max-w-[400px] lg:max-w-[500px]">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-center  mdlg:text-left">
            Why me?
          </h2>
          <h4 className="mb-5 text-xl md:text-2xl text-light-blue font-semibold text-center mdlg:text-left ">
            If you have the WILL, you WILL find the way!
          </h4>
          <p className="text-lg md:text-xl mb-10 mdlg:mb-0 flex flex-col gap-4">
            <span>
              Elevate your fitness journey with me as your Personal Trainer. As
              a Level 3 PT with 5 years of gym experience and a background in
              international sports, I've conquered challenges like losing weight
              and gaining muscle.
            </span>
            <span>
              My 4-year tenure as a TEFL Level 5 English tutor ensures effective
              communication and explanations with whoever I work with. After
              guiding a numerous amount of beginner English speakers to advanced
              levels, I’m confident in my ability at coaching foreign students
              in the fitness sphere too.
            </span>
            <span>
              Fuelling your success, my passion for cooking and nutritional
              knowledge will ensure you eat healthily, but more importantly, in
              an enjoyable way! Join the ranks of those I've already guided to
              achieving their fitness goals.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
