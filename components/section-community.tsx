import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";
import { useEffect } from "react";
import { scrollFadeIn } from "./utils/scroll-fadeIn";
import { useLocale } from "../hooks/useLocale";

type Props = {
  bgColor?: string;
  isFading: boolean;
  title: string;
};

type Content = {
  title: string;
  emoji: string;
  description: string;
};

const SectionCommunity = ({ bgColor, isFading }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  const t = useLocale().t;

  const contents: Content[] = [
    {
      title: t.SUBTITLE_1,
      emoji: "🙎‍♀️",
      description: t.DESCRIPTION_1,
    },
    {
      title: t.SUBTITLE_2,
      emoji: "💗",
      description: t.DESCRIPTION_2,
    },
    {
      title: t.SUBTITLE_3,
      emoji: "💌",
      description: t.DESCRIPTION_3,
    },
  ];

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <h3 className='mb-10 text-center text-4xl font-black text-gray-600 xl:text-[2.5rem]'>
          {t.COMMUNITYTITLE}
        </h3>
        <div className='flex flex-col items-center justify-between text-lg xl:flex-row xl:pl-4'>
          {contents.map((content, index) => {
            return (
              <div
                key={index}
                className='mt-14 flex flex-col items-center justify-center px-5 md:self-start lg:px-10 xl:w-2/5'
              >
                <p className='mb-5 text-5xl'>{content.emoji}</p>
                <h2 className='text-center text-2xl font-bold text-gray-600 lg:text-3xl'>
                  {content.title}
                </h2>
                <p className='mt-5 text-center text-xl lg:text-2xl'>
                  {content.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </SectionFadeIn>
  );
};

export default SectionCommunity;
