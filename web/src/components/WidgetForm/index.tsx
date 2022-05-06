
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbacktypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de um balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbacktypes;


export function WidgetForm() {
    const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestarFeedback() {
        setFeedbackSent(false)
        setfeedbackType(null);
    }


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestarFeedback} />
            ): (
                <>
                    {!feedbackType ?(
                <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} />
            ) : (
                <FeedbackContentStep
                 feedbackType={feedbackType} 
                 onFeedbackRestartRequested={handleRestarFeedback}
                 onFeedbackSent={() => setFeedbackSent(true)}
                 />
            )}
                </>
            ) }


            <footer className="text-xs text-neutral-400">
                Feito com raça e dedicação por <a className="underline underline-offset-2" target="_blank" href="https://asalesg.github.io/portfolio/">André Sales</a>
            </footer>

        </div>
    );
}