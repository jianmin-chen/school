import Head from "next/head";
import { useState } from "react";

function MagicBall() {
    const [quote, setQuote] = useState("");

    const choose = () => {
        const quotes = [
            "Danny... come see... It's under the- stairs. Right under the stairs. The movers put it right ...under...the stairs.",
            "Too deep to get out.",
            "Poison.",
            "Be careful, doc..."
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    return (
        <div className="ball cursor-pointer" onClick={() => choose()}>
            <div className="triangle">
                {quote.length == 0 ? (
                    <span className="text-9xl">8</span>
                ) : (
                    <p className="m-4 text-center">{quote}</p>
                )}
            </div>
        </div>
    );
}

export default function Index() {
    return (
        <>
            <Head>
                <title>The Shining Times</title>
            </Head>
            <div className="page -mb-24">
                <img className="background" src="/background.png" />
                <h1 className="special mt-4">The Shining Times</h1>
                <div className="flex justify-between px-7">
                    <p>News without the unnecessary drama</p>
                    <p>Monday February 8, 1976</p>
                </div>
                <div className="grid grid-cols-2 p-4">
                    <div className="border-r border-neutral-400 px-7">
                        <div className="border-b border-neutral-400 p-7">
                            <h2>
                                Teacher gets fired for allegedly beating up
                                student while drunk
                            </h2>
                            <p>
                                <span className="ml-4" /> A local teacher at
                                Stovington Prep, Jack Torrance, has allegedly
                                been fired after attacking a student. Witnesses
                                report that he attacked the victim, George
                                Hatfield, with a hunting knife, causing a
                                concussion and other minor injuries. Witnesses
                                also tell us that the cause of the altercation
                                was personal and had something to do with
                                "setting a timer ahead".
                            </p>
                            <p>
                                <span className="ml-4" /> George has recently
                                been treated for his injuries, and claims that
                                in addition to attacking him, Torrance also
                                nearly ran him over. "First he tried to run me
                                over while I was on my bike and then he set the
                                timer ahead and tried to stab me to death."
                                George has declined to tell us any more
                                information with regards to what this "timer"
                                is, but Jack Torrance is no longer in town.
                            </p>
                        </div>
                        <div className="border-b border-neutral-400 p-7">
                            <h2>
                                Overlook hotel explodes in mysterious accident
                            </h2>
                            <p>
                                The Overlook hotel, a remote hotel in Colorado
                                popular among celebrities seeking seclusion -
                                such as millionaire Horace Derwent, has
                                mysteriously exploded in an accident. It is
                                believed to have been related to an heating
                                accident, but more inspections must be done on
                                the ruins of the property in order to discern
                                the actual cause.
                            </p>
                            <p>
                                The hotel is rumored to be notorious for various
                                accidents, including gang altercations in the
                                1940s, although such rumors have not been
                                proved.
                            </p>
                            <p>
                                According to Stuart Ullman, "No one has been
                                hurt."
                            </p>
                            <p>
                                <i>&gt; More on page A2</i>
                            </p>
                        </div>
                        <div className="note"></div>
                    </div>
                    <div className="p-7">
                        <div className="p-7 border-b border-neutral-400">
                            <h2>
                                Book review: <b>On Writing</b>
                            </h2>
                            <p>
                                <span className="ml-4" /> <i>On Writing</i> is
                                Stephen King’s part writing guide, part memoir.
                                King keeps it relatively humorous, but
                                occasionally adds some of the dark backstory
                                behind some of the books he’s written. Notably?
                                I can think of two as I write this review:
                                getting hit by a van in 1999 and his addictions.
                                While getting hit by a van may seem like the
                                more interesting of the two, I personally find
                                it fascinating how much of his personal
                                experiences seep into his books, especially{" "}
                                <i>The Shining</i> and <i>Misery</i>.
                            </p>
                            <p>
                                <span className="ml-4" />
                                The protagonist (or perhaps antagonist,
                                depending on how you interpret the
                                characteristics of a protagonist) in{" "}
                                <i>The Shining</i>, Jack Torrance, is an
                                alcoholic who receives a job as an hotel
                                caretaker during the offseason. Jack's addiction
                                to alcohol is eventually what leads to his
                                demise. King was an alcoholic and drug addict
                                during the 80s. In <i>On Writing</i> he
                                describes his addiction in startling detail,
                                explaining how he would snort so much cocaine
                                his nose would not stop bleeding. Jack is
                                intended to be an symbolic representation of him
                                then, a representation of the path to
                                destruction King saw in retrospect.
                            </p>
                            <p className="border-black">
                                <span className="ml-4" />
                                "I was usually pretty good about it. I was able
                                to get up and make the kids breakfast and get
                                them off to school. And I was strong; I had a
                                lot of energy. I would’ve killed myself
                                otherwise. But the books start to show it after
                                a while. Misery is a book about cocaine. Annie
                                Wilkes is cocaine. She was my number-one fan."
                            </p>
                            <p>
                                <span className="ml-4" /> Overall,{" "}
                                <i>On Writing</i> is a good book, albeit missing
                                its goal of actually teaching writing.
                            </p>
                            <p></p>
                        </div>
                        <div className="p-7  note">
                            <img src="/note.png" />
                            <h2></h2>
                        </div>
                    </div>
                </div>
                <p className="text-right px-7">A1</p>
                <img
                    className="mix-blend-darken"
                    src="/border.png"
                    style={{ filter: "sepia(10%)" }}
                />
            </div>
            <div className="page">
                <img className="background" src="/background.png" />
                <div className="grid grid-cols-2 p-4">
                    <div className="border-r border-neutral-400 px-7">
                        <div className="border-b border-neutral-400 p-7">
                            <h2>
                                Weather alert: Midwest continues to be
                                unpredictable
                            </h2>
                            <p>
                                On Writing is Stephen King’s part writing guide,
                                part memoir. King keeps it relatively humorous,
                                but occasionally adds some of the dark backstory
                                behind some of the books he’s written. Notably?
                                I can think of two as I write this book review:
                                getting hit by a van in 1999 and his addictions.
                                While getting hit by a van may seem like the
                                more interesting of the two
                            </p>
                        </div>
                        <div className="border-b border-neutral-400 p-7">
                            <p className="mb-2">
                                <i>&gt; Continued from page A1</i>
                            </p>
                            <h2>
                                Overlook hotel explodes in mysterious accident
                            </h2>
                            <p>
                                "It's the offseason, so that means no one was at
                                the hotel. Thank goodness no accidents happened
                                while we had guests there." When asked about
                                next steps and potential recovery of the
                                Overlook Hotel, Ullman declined to answer,
                                although he has agreed to an interview about
                                "other questions not related to{" "}
                            </p>
                        </div>
                        <div className="p-7">
                            <h2 className="text-center">Ask Tony!</h2>
                            <MagicBall />
                        </div>
                    </div>
                    <div className="p-7">
                        <div className="border border-neutral-400 p-7 mt-7">
                            <h2>The True Knot</h2>
                            <p>
                                Looking to go on a road trip with a group of
                                fellow road travelers? We'll be in New England
                                soon. Join us!
                            </p>
                        </div>
                        <div className="p-7 border-b border-neutral-400">
                            <h2>
                                Interview with Stuart Ullman, manager at
                                Overlook Hotel
                            </h2>
                            <p>
                                On Writing is Stephen King’s part writing guide,
                                part memoir. King keeps it relatively humorous,
                                but occasionally adds some of the dark backstory
                                behind some of the books he’s written. Notably?
                                I can think of two as I write this book review:
                                getting hit by a van in 1999 and his addictions.
                                While getting hit by a van may seem like the
                                more interesting of the twoOn Writing is Stephen
                                King’s part writing guide, part memoir. King
                                keeps it relatively humorous, but occasionally
                                adds some of the dark backstory behind some of
                                the books he’s written. Notably? I can think of
                                two as I write this book review: getting hit by
                                a van in 1999 and his addictions. While getting
                                hit by a van may seem like the more interesting
                                of the two
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-right px-7">A2</p>
            </div>
        </>
    );
}
