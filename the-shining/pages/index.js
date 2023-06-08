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
        ].filter(q => q !== quote);
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
                    <p>New England news without the unnecessary drama</p>
                    <p>Monday February 8, 1976</p>
                </div>
                <div className="grid grid-cols-2 p-4">
                    <div className="border-r border-neutral-400 px-7">
                        <div className="border-b border-neutral-400 p-7">
                            <h2>
                                Teacher gets fired for allegedly beating up
                                student
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
                                <span className="ml-4" />
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
                                <span className="ml-4" />
                                The hotel is rumored to be notorious for various
                                accidents, including gang altercations in the
                                1940s, although such rumors have not been
                                proved.
                            </p>
                            <p>
                                <span className="ml-4" />
                                According to Stuart Ullman, "No one has been
                                hurt."
                            </p>
                            <p>
                                <i>&gt; More on page A2</i>
                            </p>
                        </div>
                        <div className="note">
                            <img src="/note.png" />
                            <h2>09/11/1975</h2>
                            <p>
                                Searching for a new caretaker at the Overlook
                                Hotel! Please apply in person and ask for Stuart
                                Ullman.
                            </p>
                        </div>
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
                            <h2>07/10/1974</h2>
                            <p>
                                We are sorry to inform you that as of
                                07/10/1974, you'll no longer be employed at
                                Overlook Hotel. As discussed, we think this is
                                the best decision, because [redacted]. You will
                                be given two weeks severance pay to find a new
                                source of employment.
                            </p>
                            <p>
                                <span className="ml-4" /> Per our NDA agreement,
                                you are not allowed to discuss the circumstances
                                under which you have been terminated. Failure to
                                abide by the terms you signed at the start of
                                your employment will lead to legal action.
                            </p>
                            <p className="signature">
                                And we would hate for anything to happen, right?
                                Let's not create any more trouble.
                            </p>
                            <p className="signature text-right">Stuart</p>
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
                                <span className="ml-4" />
                                Weather in the Midwest has been quite terrible,
                                to say the east. Reports warn of another
                                potential blizzard coming to the Midwest, around
                                the Colorado region. Air travel is expected to
                                be delayed, as wind speeds are expected to be
                                abnormally high. Accidents have already been
                                reported among United, American, and other
                                airlines canceling flights to Denver.
                            </p>
                            <p>
                                <span className="ml-4" /> The Southeast, which
                                is typically unaffected by weather in the
                                Midwest, is also seeing slightly abnormal
                                weather, so make to dress warm! This weather is
                                certainly supernatural.
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
                                <span className="ml-4" />
                                "It's the offseason, so that means no one was at
                                the hotel. Thank goodness no accidents happened
                                while we had guests there." When asked about
                                next steps and potential recovery of the
                                Overlook Hotel, Ullman declined to answer,
                                although he has agreed to an interview about
                                "other questions not related to currently
                                unforseeable plans for the future".
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
                                <span className="ml-4" />
                                <i>
                                    Can you tell us more about the legacy of the
                                    hotel?
                                </i>{" "}
                                The Overlook was built in the years 1907 to
                                1909. We've had many people you might consider
                                celebrities or "famous" people stay here for the
                                gorgeous views. Among a long list, the
                                Vanderbilts, Rockefellers, Astors, Du Ponts.
                                We've had four presidents stay in the
                                Presidential Suite, Wilson, Harding, Roosevelt,
                                and Nixon.
                            </p>
                            <p>
                                <span className="ml-4" />
                                <i>That's quite impressive.</i> Certainly.
                            </p>
                            <p>
                                <span className="ml-4" />
                                <i>
                                    However, we've also heard... rumors of
                                    various deaths. And the property has been
                                    transferred quite a few times.
                                </i>{" "}
                                And?
                            </p>
                            <p>
                                <span className="ml-4" />
                                <i>Are they true?</i> We've had many people stay
                                here. Accidents are expected, especially since
                                the closest town we can get emergency help from
                                is quite a few miles away. The winters are quite
                                cruel, too. As for the... insinuations of the
                                rest of your questions, I decline to answer. The
                                records are public.
                            </p>
                            <p>
                                <span className="ml-4" />
                                <i>What do you think happened?</i> Nothing.
                                Nothing happened. Most likely it was a freak
                                accident.
                            </p>
                            <p>
                                <span className="ml-4" />
                                <i>
                                    A blazing fire in the middle of winter?
                                </i>{" "}
                                Like I said, it was a freak accident, and
                                unfortuanately the Overlook Hotel was destroyed
                                in the accident. That's the end of this
                                interview.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-right px-7">A2</p>
            </div>
        </>
    );
}
