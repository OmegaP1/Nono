import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "../components/YoutubeEmbed.js";

export default function Home() {
  const [letterL, setLetterL] = useState("hidden");
  const [letterE, setLetterE] = useState("hidden");
  const [letterO, setLetterO] = useState("hidden");
  const [letterN, setLetterN] = useState("hidden");
  const [letterO2, setLetterO2] = useState("hidden");
  const [letterR, setLetterR] = useState("hidden");
  const [estetoscopio, setEstetoscopio] = useState("hidden");

  useEffect(() => {
    if (estetoscopio === "") {
      setEstetoscopioOnScreen();
    }
    if (letterL === "") {
      setLetterLOnScreen();
    }
    if (letterE === "") {
      setLetterEOnScreen();
    }
    if (letterO === "") {
      setLetterOOnScreen();
    }
    if (letterN === "") {
      setLetterNOnScreen();
    }
    if (letterO2 === "") {
      setLetterO2OnScreen();
    }
    if (letterR === "") {
      setLetterROnScreen();
    }
  }, [estetoscopio, letterL, letterE, letterO, letterN, letterO2, letterR]);

  const setLetterLOnScreen = useCallback(() => {
    setLetterE("hidden");
    setLetterO("hidden");
    setLetterN("hidden");
    setLetterO2("hidden");
    setLetterR("hidden");
    setEstetoscopio("hidden");
  }, [letterL]);
  const setLetterEOnScreen = useCallback(() => {
    setLetterL("hidden");
    setLetterO("hidden");
    setLetterN("hidden");
    setLetterO2("hidden");
    setLetterR("hidden");
    setEstetoscopio("hidden");
  }, [letterE]);
  const setLetterOOnScreen = useCallback(() => {
    setLetterL("hidden");
    setLetterE("hidden");
    setLetterN("hidden");
    setLetterO2("hidden");
    setLetterR("hidden");
    setEstetoscopio("hidden");
  }, [letterO]);
  const setLetterNOnScreen = useCallback(() => {
    setLetterL("hidden");
    setLetterE("hidden");
    setLetterO("hidden");
    setLetterO2("hidden");
    setLetterR("hidden");
    setEstetoscopio("hidden");
  }, [letterN]);
  const setLetterO2OnScreen = useCallback(() => {
    setLetterL("hidden");
    setLetterE("hidden");
    setLetterO("hidden");
    setLetterN("hidden");
    setLetterR("hidden");
    setEstetoscopio("hidden");
  }, [letterO2]);
  const setLetterROnScreen = useCallback(() => {
    setLetterL("hidden");
    setLetterE("hidden");
    setLetterO("hidden");
    setLetterN("hidden");
    setLetterO2("hidden");
    setEstetoscopio("hidden");
  }, [letterR]);
  const setEstetoscopioOnScreen = useCallback(() => {
    setLetterL("hidden");
    setLetterE("hidden");
    setLetterO("hidden");
    setLetterN("hidden");
    setLetterO2("hidden");
    setLetterR("hidden");
  }, [estetoscopio]);

  return (
    <div className='min-h-screen'>
      <div className='grid md:grid-cols-2 md:grid-cols-2 min-h-screen sm:grid-cols-1'>
        <div className='flex col-start-1 col-end-2 text-center items-end justify-center '>
          <a>
            <span
              className='font-sans text-yellow-300 font-extrabold text-9xl hover:text-blue-700 ml-5'
              onClick={(e) => {
                console.log("L"),
                  setTimeout(() => setLetterL(""), 100),
                  console.log(letterL);
              }}
            >
              L
            </span>
          </a>
          <a>
            <span
              className='font-sans text-yellow-300 font-extrabold text-9xl hover:text-blue-700 ml-5'
              onClick={(e) => {
                console.log("E"),
                  setTimeout(() => setLetterE(""), 100),
                  console.log(letterE);
              }}
            >
              E
            </span>
          </a>
          <a>
            <span
              className='font-sans text-yellow-300 font-extrabold text-9xl hover:text-blue-700 ml-5'
              onClick={(e) => {
                console.log("O"),
                  setTimeout(() => setLetterO(""), 100),
                  console.log(letterO);
              }}
            >
              O
            </span>
          </a>
          <a>
            <span
              className='font-sans text-yellow-300 font-extrabold text-9xl hover:text-blue-700 ml-5'
              onClick={(e) => {
                console.log("N"),
                  setTimeout(() => setLetterN(""), 100),
                  console.log(letterN);
              }}
            >
              N
            </span>
          </a>
          <a>
            <span
              className='font-sans text-yellow-300 font-extrabold text-9xl hover:text-blue-700 ml-5'
              onClick={(e) => {
                console.log("O"),
                  setTimeout(() => setLetterO2(""), 100),
                  console.log(letterO2);
              }}
            >
              O
            </span>
          </a>
          <a>
            <span
              className='font-sans text-yellow-300 font-extrabold text-9xl hover:text-blue-700 ml-5'
              onClick={(e) => {
                console.log("R"),
                  setTimeout(() => setLetterR(""), 100),
                  console.log(letterR);
              }}
            >
              R
            </span>
          </a>
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2  self-center place-self-center hidden `}
        >
          <Image src='/No_Creativity.png' width={1022} height={828} />
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2  self-center place-self-center ${letterL} `}
        >
          <Image src='/L.png' width={817.6} height={662.4} />
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2 self-center place-self-center ${letterE} `}
        >
          <Image src='/E.png' width={817.6} height={662.4} />
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2 self-center place-self-center ${letterO} `}
        >
          <YoutubeEmbed embedId='XC3ahd6Di3M' width='853' height='480' />
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2 self-center place-self-center ${letterN} `}
        >
          <YoutubeEmbed embedId='DDwcMbu8fBI' width='853' height='480' />
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2 self-center place-self-center ${letterO2} `}
        >
          <Image src='/O.png' width={817.6} height={662.4} />
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2  self-center place-self-center ${letterR} `}
        >
          <Image src='/R.png' width={817.6} height={662.4} />
        </div>
        <div
          className={`md:col-start-2 md:col-end-2 md:row-span-2 m-5 self-center place-self-center ${estetoscopio} `}
        >
          <Image src='/No_Creativity.png' width={817.6} height={662.4} />
        </div>

        <div className='col-start-1 col-end-1  self-center place-self-center'>
          <a>
            <Image
              src='/estetoscopio.png'
              width={577}
              height={433}
              onClick={(e) => {
                console.log("estetoscopio"),
                  setTimeout(() => setEstetoscopio(""), 100),
                  console.log(estetoscopio);
              }}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
