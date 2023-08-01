import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Osiagniecia from "./Osiagniecia";
import Samouczek from "./Samouczek";
import Tabs from "./Tabs";

function Button(props) {
  if (props.btnValue == "[zablokowane]")
    return (
      <button className="button disabled" id={props.btnId}>
        {props.btnValue}
      </button>
    );
  else {
    return (
      <button
        className="button"
        id={props.btnId}
        onClick={() =>
          handelBtn(
            props.nextVid,
            props.setCurrentVideo,
            props.setRelations,
            props.questionTime,
            props.relations,
            props.zubr,
            props.menel,
            props.slave,
            props.epicGear,
            props.zabilesConana,
            props.quiet,
            props.loud,
            props.amulet,
            props.robot,
            props.bomba,
            props.bluzaKamikaze,
            props.pyl,
            props.conanhit,
            props.tajnaButelka,
            props.mrugacz,
            props.scpAlive,
            props.opoznienie,
            props.Reputacja,
            props.repkaPlus,
            props.repkaMinus
          )
        }
      >
        {props.btnValue}
      </button>
    );
  }
}
// <div className="button-wrapper">
//   <div className="left">
//     <div className="d1" />
//     <div className="d2" />
//     <div className="d3" />
//     <div className="d4" />
//     <button
//       className="button"
//       id={props.btnId}
//       onClick={() =>
//         handelBtn(
//           props.nextVid,
//           props.setCurrentVideo,
//           props.setRelations,
//           props.questionTime,
//           props.relations,
//           props.zubr,
//           props.epicGear,
//           props.zabilesConana,
//           props.quiet,
//           props.loud,
//           props.amulet,
//           props.robot,
//           props.zubrprzezyje,
//           props.bluzaKamikaze
//         )
//       }
//     >
//       {props.btnValue}
//     </button>
//   </div>
//   <div className="right">
//     <div className="d5" />
//     <div className="d6" />
//     <div className="d7" />
//     <div className="d8" />
//     <div>1</div>
//   </div>
// </div>

function Video({ videos }) {
  let btn1value = videos[videos.currentVideo].btn1Value;
  let btn2value = videos[videos.currentVideo].btn2Value;
  let btn3value = videos[videos.currentVideo].btn3Value;
  let btn4value = videos[videos.currentVideo].btn4Value;
  console.log(`1: ${btn1value}`);
  console.log(`2: ${btn2value}`);
  console.log(`3: ${btn3value}`);
  console.log(`4: ${btn4value}`);

  let opt1req = videos[videos.currentVideo].opt1req;
  let opt2req = videos[videos.currentVideo].opt2req;
  let opt3req = videos[videos.currentVideo].opt3req;
  let opt4req = videos[videos.currentVideo].opt4req;

  //opt1
  if (typeof opt1req !== "undefined") {
    if (
      opt1req.expression == "==" &&
      videos.relations[opt1req.param] != opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
    if (
      opt1req.expression == ">" &&
      videos.relations[opt1req.param] <= opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
    if (
      opt1req.expression == "<" &&
      videos.relations[opt1req.param] >= opt1req.value
    ) {
      btn1value = "[zablokowane]";
    }
  }

  //opt2
  if (typeof opt2req !== "undefined") {
    if (
      opt2req.expression == "==" &&
      videos.relations[opt2req.param] != opt2req.value
    ) {
      btn2value = "[zablokowane]";
    }
    if (
      opt2req.expression == ">" &&
      videos.relations[opt2req.param] <= opt2req.value
    ) {
      btn2value = "[zablokowane]";
    }
    if (
      opt2req.expression == "<" &&
      videos.relations[opt2req.param] >= opt2req.value
    ) {
      btn2value = "[zablokowane]";
    }
  }

  //opt3
  if (typeof opt3req !== "undefined") {
    if (
      opt3req.expression == "==" &&
      videos.relations[opt3req.param] != opt3req.value
    ) {
      btn3value = "[zablokowane]";
    }
    if (
      opt3req.expression == ">" &&
      videos.relations[opt3req.param] <= opt3req.value
    ) {
      btn3value = "[zablokowane]";
    }
    if (
      opt3req.expression == "<" &&
      videos.relations[opt3req.param] >= opt3req.value
    ) {
      btn3value = "[zablokowane]";
    }
  }
  //opt4
  if (typeof opt4req !== "undefined") {
    if (
      opt4req.expression == "==" &&
      videos.relations[opt4req.param] != opt4req.value
    ) {
      btn4value = "[zablokowane]";
    }
    if (
      opt4req.expression == ">" &&
      videos.relations[opt4req.param] <= opt4req.value
    ) {
      btn4value = "[zablokowane]";
    }
    if (
      opt4req.expression == "<" &&
      videos.relations[opt4req.param] >= opt4req.value
    ) {
      btn4value = "[zablokowane]";
    }
  }

  let buttons = [
    <Button
      btnId="btn1"
      key="btn1"
      nextVid={videos[videos.currentVideo].nextVid1}
      setCurrentVideo={videos.setCurrentVideo}
      setRelations={videos.setRelations}
      questionTime={videos[videos[videos.currentVideo].nextVid1].questionTime}
      relations={videos.relations}
      zubr={videos[videos[videos.currentVideo].nextVid1].zubr}
      menel={videos[videos[videos.currentVideo].nextVid1].menel}
      slave={videos[videos[videos.currentVideo].nextVid1].slave}
      epicGear={videos[videos[videos.currentVideo].nextVid1].epicGear}
      zabilesConana={videos[videos[videos.currentVideo].nextVid1].zabilesConana}
      quiet={videos[videos[videos.currentVideo].nextVid1].quiet}
      loud={videos[videos[videos.currentVideo].nextVid1].loud}
      amulet={videos[videos[videos.currentVideo].nextVid1].amulet}
      robot={videos[videos[videos.currentVideo].nextVid1].robot}
      bomba={videos[videos[videos.currentVideo].nextVid1].bomba}
      bluzaKamikaze={videos[videos[videos.currentVideo].nextVid1].bluzaKamikaze}
      pyl={videos[videos[videos.currentVideo].nextVid1].pyl}
      conanhit={videos[videos[videos.currentVideo].nextVid1].conanhit}
      tajnaButelka={videos[videos[videos.currentVideo].nextVid1].tajnaButelka}
      mrugacz={videos[videos[videos.currentVideo].nextVid1].mrugacz}
      scpAlive={videos[videos[videos.currentVideo].nextVid1].scpAlive}
      opoznienie={videos[videos[videos.currentVideo].nextVid1].opoznienie}
      Reputacja={videos[videos[videos.currentVideo].nextVid1].Reputacja}
      repkaPlus={videos[videos[videos.currentVideo].nextVid1].repkaPlus}
      repkaMinus={videos[videos[videos.currentVideo].nextVid1].repkaMinus}
      btnValue={btn1value}
    />,
  ];
  if (typeof btn2value !== "undefined") {
    buttons[1] = (
      <Button
        key="btn2"
        btnId="btn2"
        nextVid={videos[videos.currentVideo].nextVid2}
        setCurrentVideo={videos.setCurrentVideo}
        setRelations={videos.setRelations}
        questionTime={videos[videos[videos.currentVideo].nextVid2].questionTime}
        relations={videos.relations}
        zubr={videos[videos[videos.currentVideo].nextVid2].zubr}
        menel={videos[videos[videos.currentVideo].nextVid2].menel}
        slave={videos[videos[videos.currentVideo].nextVid2].slave}
        epicGear={videos[videos[videos.currentVideo].nextVid2].epicGear}
        zabilesConana={
          videos[videos[videos.currentVideo].nextVid2].zabilesConana
        }
        quiet={videos[videos[videos.currentVideo].nextVid2].quiet}
        loud={videos[videos[videos.currentVideo].nextVid2].loud}
        amulet={videos[videos[videos.currentVideo].nextVid2].amulet}
        robot={videos[videos[videos.currentVideo].nextVid2].robot}
        bomba={videos[videos[videos.currentVideo].nextVid2].bomba}
        bluzaKamikaze={
          videos[videos[videos.currentVideo].nextVid2].bluzaKamikaze
        }
        pyl={videos[videos[videos.currentVideo].nextVid2].pyl}
        conanhit={videos[videos[videos.currentVideo].nextVid2].conanhit}
        tajnaButelka={videos[videos[videos.currentVideo].nextVid2].tajnaButelka}
        mrugacz={videos[videos[videos.currentVideo].nextVid2].mrugacz}
        scpAlive={videos[videos[videos.currentVideo].nextVid2].scpAlive}
        opoznienie={videos[videos[videos.currentVideo].nextVid2].opoznienie}
        Reputacja={videos[videos[videos.currentVideo].nextVid2].Reputacja}
        repkaPlus={videos[videos[videos.currentVideo].nextVid2].repkaPlus}
        repkaMinus={videos[videos[videos.currentVideo].nextVid2].repkaMinus}
        btnValue={btn2value}
      />
    );
  }
  if (typeof btn3value !== "undefined") {
    buttons[2] = (
      <Button
        btnId="btn3"
        key="btn3"
        nextVid={videos[videos.currentVideo].nextVid3}
        setCurrentVideo={videos.setCurrentVideo}
        setRelations={videos.setRelations}
        questionTime={videos[videos[videos.currentVideo].nextVid3].questionTime}
        relations={videos.relations}
        zubr={videos[videos[videos.currentVideo].nextVid3].zubr}
        menel={videos[videos[videos.currentVideo].nextVid3].menel}
        slave={videos[videos[videos.currentVideo].nextVid3].slave}
        epicGear={videos[videos[videos.currentVideo].nextVid3].epicGear}
        zabilesConana={
          videos[videos[videos.currentVideo].nextVid3].zabilesConana
        }
        quiet={videos[videos[videos.currentVideo].nextVid3].quiet}
        loud={videos[videos[videos.currentVideo].nextVid3].loud}
        amulet={videos[videos[videos.currentVideo].nextVid3].amulet}
        robot={videos[videos[videos.currentVideo].nextVid3].robot}
        bomba={videos[videos[videos.currentVideo].nextVid3].bomba}
        bluzaKamikaze={
          videos[videos[videos.currentVideo].nextVid3].bluzaKamikaze
        }
        pyl={videos[videos[videos.currentVideo].nextVid3].pyl}
        conanhit={videos[videos[videos.currentVideo].nextVid3].conanhit}
        tajnaButelka={videos[videos[videos.currentVideo].nextVid3].tajnaButelka}
        mrugacz={videos[videos[videos.currentVideo].nextVid3].mrugacz}
        scpAlive={videos[videos[videos.currentVideo].nextVid3].scpAlive}
        opoznienie={videos[videos[videos.currentVideo].nextVid3].opoznienie}
        Reputacja={videos[videos[videos.currentVideo].nextVid3].Reputacja}
        repkaPlus={videos[videos[videos.currentVideo].nextVid3].repkaPlus}
        repkaMinus={videos[videos[videos.currentVideo].nextVid3].repkaMinus}
        btnValue={btn3value}
      />
    );
  }
  if (typeof btn4value !== "undefined") {
    buttons[3] = (
      <Button
        btnId="btn4"
        key="btn4"
        nextVid={videos[videos.currentVideo].nextVid4}
        setCurrentVideo={videos.setCurrentVideo}
        setRelations={videos.setRelations}
        questionTime={videos[videos[videos.currentVideo].nextVid4].questionTime}
        relations={videos.relations}
        zubr={videos[videos[videos.currentVideo].nextVid4].zubr}
        menel={videos[videos[videos.currentVideo].nextVid4].menel}
        slave={videos[videos[videos.currentVideo].nextVid4].slave}
        epicGear={videos[videos[videos.currentVideo].nextVid4].epicGear}
        zabilesConana={
          videos[videos[videos.currentVideo].nextVid4].zabilesConana
        }
        quiet={videos[videos[videos.currentVideo].nextVid4].quiet}
        loud={videos[videos[videos.currentVideo].nextVid4].loud}
        amulet={videos[videos[videos.currentVideo].nextVid4].amulet}
        robot={videos[videos[videos.currentVideo].nextVid4].robot}
        bomba={videos[videos[videos.currentVideo].nextVid4].bomba}
        bluzaKamikaze={
          videos[videos[videos.currentVideo].nextVid4].bluzaKamikaze
        }
        pyl={videos[videos[videos.currentVideo].nextVid4].pyl}
        conanhit={videos[videos[videos.currentVideo].nextVid4].conanhit}
        tajnaButelka={videos[videos[videos.currentVideo].nextVid4].tajnaButelka}
        mrugacz={videos[videos[videos.currentVideo].nextVid4].mrugacz}
        scpAlive={videos[videos[videos.currentVideo].nextVid4].scpAlive}
        opoznienie={videos[videos[videos.currentVideo].nextVid4].opoznienie}
        Reputacja={videos[videos[videos.currentVideo].nextVid4].Reputacja}
        repkaPlus={videos[videos[videos.currentVideo].nextVid4].repkaPlus}
        repkaMinus={videos[videos[videos.currentVideo].nextVid4].repkaMinus}
        btnValue={btn4value}
      />
    );
  }

  return (
    <>
      <Tabs />
      <div className="graj">
        <video
          src={`./Videos/${videos.currentVideo}.mp4`}
          width="75%"
          // height="720"
          type="video/mp4"
          id="film"
          // controls
          autoPlay
          // muted
        ></video>
        {/* <div className="temp">{videos.currentVideo}</div> */}
        <br></br>
        <div className="buttons-wrapper" id="buttonswrapper">
          {buttons}
        </div>
        <div className="skip" onClick={skip}>
          SKIP
        </div>
        {/* <button onClick={}></button> */}
      </div>
    </>
  );
}
function skip() {
  document.querySelector("#buttonswrapper").classList.remove("hide");
  clearTimeout(globaltimeoutid);
}
let globaltimeoutid;

function handelBtn(
  nextVideo,
  setCurrentVideo,
  setRelations,
  questionTime,
  relations,
  zubr,
  menel,
  slave,
  epicGear,
  zabilesConana,
  quiet,
  loud,
  amulet,
  robot,
  bomba,
  bluzaKamikaze,
  pyl,
  conanhit,
  tajnaButelka,
  mrugacz,
  scpAlive,
  opoznienie,
  Reputacja,
  repkaPlus,
  repkaMinus,
  timeoutId
) {
  if (typeof questionTime == "undefined") questionTime = 0;
  document.querySelector("#buttonswrapper").classList.add("hide");
  setCurrentVideo(nextVideo);
  // if (zubr == "undefined") zubr = 0;
  if (typeof zubr !== "undefined") {
    setRelations({
      ...relations,
      zubr: relations.zubr + zubr,
    });
  }
  if (typeof menel !== "undefined") {
    setRelations({
      ...relations,
      menel: relations.menel + menel,
    });
  }
  if (typeof slave !== "undefined") {
    setRelations({
      ...relations,
      slave: relations.slave + slave,
    });
  }
  if (typeof bluzaKamikaze !== "undefined") {
    setRelations({
      ...relations,
      bluzaKamikaze: relations.bluzaKamikaze + bluzaKamikaze,
    });
  }
  if (typeof epicGear !== "undefined") {
    setRelations({
      ...relations,
      epicGear: epicGear,
    });
  }
  if (typeof zabilesConana !== "undefined") {
    setRelations({
      ...relations,
      zabilesConana: zabilesConana,
      slave: relations.slave + slave,
    });
  }
  if (typeof quiet !== "undefined") {
    setRelations({
      ...relations,
      quiet: relations.quiet + quiet,
    });
  }
  if (typeof loud !== "undefined") {
    setRelations({
      ...relations,
      loud: relations.loud + loud,
    });
  }
  if (typeof amulet !== "undefined") {
    setRelations({
      ...relations,
      amulet: relations.amulet + amulet,
    });
  }
  if (typeof robot !== "undefined") {
    setRelations({
      ...relations,
      robot: relations.robot + robot,
    });
  }
  if (typeof bomba !== "undefined") {
    setRelations({
      ...relations,
      bomba: relations.bomba + bomba,
    });
  }
  if (typeof pyl !== "undefined") {
    setRelations({
      ...relations,
      pyl: relations.pyl + pyl,
    });
  }
  if (typeof repkaMinus !== "undefined") {
    setRelations({
      ...relations,
      repkaMinus: relations.repkaMinus + repkaMinus,
    });
  }
  if (typeof conanhit !== "undefined") {
    setRelations({
      ...relations,
      conanhit: relations.conanhit + conanhit,
    });
  }
  if (typeof tajnaButelka !== "undefined") {
    setRelations({
      ...relations,
      tajnaButelka: tajnaButelka,
      pyl: relations.pyl + pyl,
    });
  }
  if (typeof mrugacz !== "undefined") {
    setRelations({
      ...relations,
      mrugacz: relations.mrugacz + mrugacz,
    });
  }
  if (typeof scpAlive !== "undefined") {
    setRelations({
      ...relations,
      scpAlive: relations.scpAlive + scpAlive,
    });
  }
  if (typeof opoznienie !== "undefined") {
    setRelations({
      ...relations,
      opoznienie: relations.opoznienie + opoznienie,
    });
  }
  if (typeof Reputacja !== "undefined") {
    setRelations({
      ...relations,
      Reputacja: relations.Reputacja + Reputacja,
    });
  }
  if (typeof repkaPlus !== "undefined") {
    setRelations({
      ...relations,
      repkaPlus: relations.repkaPlus + repkaPlus,
    });
  }

  timeoutId = setTimeout(() => {
    document.querySelector("#buttonswrapper").classList.remove("hide");
  }, 0.1 * 1000);
}

function App() {
  const [currentVideo, setCurrentVideo] = useState("xxx");
  const [relations, setRelations] = useState({
    zubr: 0,
    menel: 0,
    slave: 0,
    epicGear: 0,
    zabilesConana: 0,
    quiet: 0,
    loud: 0,
    amulet: 0,
    robot: 0,
    bomba: 0,
    bluzaKamikaze: 0,
    pyl: 0,
    conanhit: 0,
    tajnaButelka: 0,
    mrugacz: 0,
    scpAlive: 0,
    opoznienie: 0,
    Reputacja: 0,
    repkaPlus: 0,
    repkaMinus: 0,
  });

  let videos = {
    currentVideo: currentVideo,
    relations: relations,
    setCurrentVideo: setCurrentVideo,
    setRelations: setRelations,
    xxx: {
      btn1Value: "[GRAJ]",
      nextVid1: "a1",
    },
    a1: {
      btn1Value: "[Kontynuuj]",
      btn2Value: "MUSISZ ZNAĆ KOD!",
      nextVid1: "aX",
      nextVid2: "trueEnding",
    },
    trueEnding: { btn1Value: "[END]", nextVid1: "trueEnding" },
    aX: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "a2",
    },
    a2: {
      btn1Value: "Daj mu 2zł",
      btn2Value: "'Odczep się!'",
      nextVid1: "a3",
      nextVid2: "a4",
    },
    a3: {
      btn1Value: "[Kontynuuj]",
      menel: 1,
      nextVid1: "a5",
    },
    a4: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "a5",
    },
    a5: {
      btn1Value: "Idź po Conana",
      btn2Value: "Idź po Jagera",
      nextVid1: "a6",
      nextVid2: "a7",
    },
    a6: {
      btn1Value: "Bombimy bazę!",
      btn2Value: "Klepiemy ruskich!",
      btn3Value: "LITTLE TROLAŻ hehe",
      nextVid1: "d1",
      nextVid2: "d2",
      nextVid3: "d3",
    },
    a7: {
      btn1Value: "Złap Mrugacza",
      btn2Value: "Zabij Mrugacza",
      btn3Value: "LITTLE TROLAŻ hehe",
      nextVid1: "b2",
      nextVid2: "b1",
      nextVid3: "b3",
    },

    b2: { btn1Value: "[Kontynuuj]", nextVid1: "e1", mrugacz: 1 },
    b1: { btn1Value: "[Kontynuuj]", nextVid1: "e1", pyl: 1 },
    b3: { btn1Value: "[Kontynuuj]", nextVid1: "c1", scpAlive: 1 },

    c1: {
      btn1Value: "Polska klasyka!",
      btn2Value: "Rock!",
      btn3Value: "Wschodnie rytmy!",
      opt3req: {
        param: "zabilesConana",
        expression: "==",
        value: 1,
      },
      nextVid1: "test1",
      nextVid2: "test2",
      nextVid3: "russiaEnding",
      bomba: 1,
    },
    russiaEnding: { btn1Value: "[END]", nextVid1: "russiaEnding" },
    c2: { btn1Value: "[Kontynuuj]", nextVid1: "c4", repkaMinus: 1 },
    test1: { btn1Value: "[Kontynuuj]", nextVid1: "c4", repkaMinus: 1 },
    test2: { btn1Value: "[Kontynuuj]", nextVid1: "c4", repkaPlus: 1 },
    c3: { btn1Value: "[Kontynuuj]", nextVid1: "c4", repkaPlus: 1 },
    c4: {
      btn1Value: "[Licz na Menela]",
      opt1req: {
        param: "menel",
        expression: "==",
        value: 1,
      },
      btn2Value: "[Kontynuuj]",
      btn3Value: "[Licz na Mrugacza]",
      opt3req: {
        param: "scpAlive",
        expression: "==",
        value: 1,
      },
      nextVid1: "c5",
      nextVid2: "c6",
      nextVid3: "scpEnding",
    },
    scpEnding: {
      btn1Value: "[END]",
      nextVid1: "scpEnding",
    },
    c5: {
      btn1Value: "[Kontynuuj]",
      opt1req: {
        param: "repkaPlus",
        expression: "==",
        value: 1,
      },
      btn2Value: "[Kontynuuj]",
      opt2req: {
        param: "repkaMinus",
        expression: "==",
        value: 1,
      },
      nextVid1: "gaaEnding",
      nextVid2: "baaEnding",
    },
    gaaEnding: {
      btn1Value: "[END]",
      nextVid1: "gaaEnding",
    },
    baaEnding: {
      btn1Value: "[END]",
      nextVid1: "baaEnding",
    },
    c6: {
      btn1Value: "[Kontynuuj]",
      opt1req: {
        param: "repkaPlus",
        expression: "==",
        value: 1,
      },
      btn2Value: "[Kontynuuj]",
      opt2req: {
        param: "repkaMinus",
        expression: "==",
        value: 1,
      },
      nextVid1: "gdaEnding",
      nextVid2: "bdaEnding",
    },
    gdaEnding: {
      btn1Value: "[END]",
      nextVid1: "gdaEnding",
    },
    bdaEnding: {
      btn1Value: "[END]",
      nextVid1: "bdaEnding",
    },

    d1: { btn1Value: "[Kontynuuj]", nextVid1: "e2", slave: 1 },
    d2: { btn1Value: "[Kontynuuj]", nextVid1: "e2", epicGear: 1 },
    d3: { btn1Value: "[Kontynuuj]", nextVid1: "c1", zabilesConana: 1 },

    e1: { btn1Value: "[Kontynuuj]", nextVid1: "f1" },
    e2: { btn1Value: "[Kontynuuj]", nextVid1: "f1" },

    f1: {
      btn1Value: "Wchodzimy po cichu.",
      btn2Value: "Wchodzimy na pełnej!",
      nextVid1: "g1",
      nextVid2: "g2",
    },
    g1: { btn1Value: "[Kontynuuj]", nextVid1: "g3", quiet: 1 },
    g2: { btn1Value: "[Kontynuuj]", nextVid1: "g3", loud: 1 },
    g3: {
      btn1Value: "Amulet",
      btn2Value: "Robot do hackowania",
      nextVid1: "f2",
      nextVid2: "f3",
    },
    f2: { btn1Value: "[Kontynuuj]", nextVid1: "f12", amulet: 1 },
    f3: { btn1Value: "[Kontynuuj]", nextVid1: "f12", robot: 1 },
    f12: {
      btn1Value: "Bomba",
      btn2Value: "Zestaw Kamikaze",
      nextVid1: "f4",
      nextVid2: "f5",
    },
    f4: {
      btn1Value: "[Kontynuuj]",
      opt1req: {
        param: "quiet",
        expression: "==",
        value: 1,
      },
      btn2Value: "[Kontynuuj]",
      opt2req: {
        param: "loud",
        expression: "==",
        value: 1,
      },
      nextVid1: "f6",
      nextVid2: "f8",
      bomba: 1,
    },
    f5: {
      btn1Value: "[Kontynuuj]",
      opt1req: {
        param: "quiet",
        expression: "==",
        value: 1,
      },
      btn2Value: "[Kontynuuj]",
      opt2req: {
        param: "loud",
        expression: "==",
        value: 1,
      },
      nextVid1: "f6",
      nextVid2: "f8",
      bluzaKamikaze: 1,
    },
    f6: {
      btn1Value: "Wchodzimy Wentami",
      btn2Value: "Wchodzimy Bocznym wejściem",
      nextVid1: "v1",
      nextVid2: "v2",
    },
    f8: {
      btn1Value: "Conan",
      btn2Value: "Jager",
      btn3Value: "Broń Ruskich",
      opt3req: {
        param: "epicGear",
        expression: "==",
        value: 1,
      },
      nextVid1: "l1",
      nextVid2: "l2",
      nextVid3: "l3",
    },
    l1: { btn1Value: "[Kontynuuj]", nextVid1: "l4" },
    l2: { btn1Value: "[Kontynuuj]", nextVid1: "l4" },
    l3: { btn1Value: "[Kontynuuj]", nextVid1: "l4" },
    l4: {
      btn1Value: "Robot do hakowania",
      opt1req: {
        param: "robot",
        expression: "==",
        value: 1,
      },
      btn2Value: "Improwizuj",
      btn3Value: "BOMBA!",
      opt3req: {
        param: "bomba",
        expression: "==",
        value: 1,
      },
      nextVid1: "l6",
      nextVid2: "l7",
      nextVid3: "l5",
    },
    l6: { btn1Value: "[Kontynuuj]", nextVid1: "l8" },
    l7: { btn1Value: "[Kontynuuj]", nextVid1: "l9" },
    l5: { btn1Value: "[Kontynuuj]", nextVid1: "l8" },

    l8: { btn1Value: "[Kontynuuj]", nextVid1: "l12" },

    l9: {
      btn1Value: "[Kontynuuj]",
      opt1req: {
        param: "epicGear",
        expression: "==",
        value: 0,
      },
      btn2Value: "[Kontynuuj]",
      opt2req: {
        param: "epicGear",
        expression: "==",
        value: 1,
      },
      nextVid1: "l11",
      nextVid2: "l10",
    },
    l11: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "l12",
      conanhit: 1,
    },
    l10: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "l12",
    },

    l12: {
      btn1Value: "'A po co?'",
      btn2Value: "Dominik Rakcza!",
      btn3Value: "Menel!",
      opt3req: {
        param: "menel",
        expression: "==",
        value: 1,
      },
      btn4Value: "Mrugacz!",
      opt4req: {
        param: "mrugacz",
        expression: "==",
        value: 1,
      },
      nextVid1: "l13",
      nextVid2: "l14",
      nextVid3: "l15",
      nextVid4: "l16",
    },
    l13: { btn1Value: "[Kontynuuj]", nextVid1: "m1" },
    l14: { btn1Value: "[Kontynuuj]", nextVid1: "m1", opoznienie: 1 },
    l15: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "m1",
      tajnaButelka: 1,
      opoznienie: 1,
    },
    l16: { btn1Value: "[Kontynuuj]", nextVid1: "m1", opoznienie: 1 },

    v1: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "v6",
    },
    v2: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "v3",
    },
    v3: {
      btn1Value: "Conan to zrobi",
      btn2Value: "Jager to zrobi",
      opt2req: {
        param: "pyl",
        expression: "==",
        value: 1,
      },
      btn3Value: "Zagadajcie go",
      nextVid1: "v4",
      nextVid2: "v5",
      nextVid3: "prisonEnding",
    },
    v4: { btn1Value: "[Kontynuuj]", nextVid1: "v6" },
    v5: { btn1Value: "[Kontynuuj]", nextVid1: "v6" },
    prisonEnding: {
      btn1Value: "[END]",
      nextVid1: "prisonEnding",
    },
    v6: {
      btn1Value: "Robot do hackowania",
      opt1req: {
        param: "robot",
        expression: "==",
        value: 1,
      },
      btn2Value: "Zaimprowizujemy",
      btn3Value: "Wysadzimy",
      opt3req: {
        param: "bomba",
        expression: "==",
        value: 1,
      },
      nextVid1: "v9",
      nextVid2: "v8",
      nextVid3: "v7",
    },
    v9: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "n2",
      tajnaButelka: 1,
    },
    v8: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "m1",
      conanhit: 1,
    },
    v7: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "l12",
    },
    n1: { btn1Value: "[Kontynuuj]", nextVid1: "n4" },
    n2: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "n3",
    },
    n3: {
      btn1Value: "Poświęć się",
      opt1req: {
        param: "bluzaKamikaze",
        expression: "==",
        value: 1,
      },
      btn2Value: "'Odwróć uwagę Jager!'",
      btn3Value: "'Odwróć uwagę Conan!'",
      btn4Value: "[Napij się eliksiru]",
      opt4req: {
        param: "tajnaButelka",
        expression: "==",
        value: 1,
      },
      nextVid1: "kamikazeSacrificeEnding",
      nextVid2: "jaggerDeadEnding",
      nextVid3: "conanDeadEnding",
      nextVid4: "bizonGrass2Ending",
    },
    kamikazeSacrificeEnding: {
      btn1Value: "[END]",
      nextVid1: "kamikazeSacrificeEnding",
    },
    jaggerDeadEnding: {
      btn1Value: "[END]",
      nextVid1: "jaggerDeadEnding",
    },
    conanDeadEnding: {
      btn1Value: "[END]",
      nextVid1: "conanDeadEnding",
    },
    bizonGrass2Ending: {
      btn1Value: "[END]",
      nextVid1: "bizonGrass2Ending",
    },
    n4: {
      btn1Value: "Uzyj amuletu",
      opt1req: {
        param: "amulet",
        expression: "==",
        value: 1,
      },
      btn2Value: "[KONTYNUUJ]",
      btn3Value: "[Napij się eliksiru]",
      opt3req: {
        param: "tajnaButelka",
        expression: "==",
        value: 1,
      },
      nextVid1: "soloAmuletEnding",
      nextVid2: "hunterDeadEnding",
      nextVid3: "bizonGrass1Ending",
    },
    soloAmuletEnding: {
      btn1Value: "[END]",
      nextVid1: "soloAmuletEnding",
    },
    hunterDeadEnding: {
      btn1Value: "[END]",
      nextVid1: "hunterDeadEnding",
    },
    bizonGrass1Ending: {
      btn1Value: "[END]",
      nextVid1: "bizonGrass1Ending",
    },
    m1: {
      btn1Value: "Jedź dalej",
      nextVid1: "m2",
      btn2Value: "Schowaj się",
      nextVid2: "m3",
    },
    m2: {
      btn1Value: "DRIFT!",
      btn2Value: "JEBNIJ CZOŁóWKĘ!",
      btn3Value: "Oddaj się w ręce policji",
      nextVid1: "m4",
      nextVid2: "m5",
      nextVid3: "betrayalEnding",
    },
    betrayalEnding: {
      btn1Value: "[END]",
      nextVid1: "betrayalEnding",
    },
    m3: {
      btn1Value: "[Kontynuuj]",
      nextVid1: "egzecuteEnding",
      opt1req: {
        param: "opoznienie",
        expression: "==",
        value: 0,
      },
      btn2Value: "[Kontynuuj]",
      nextVid2: "m8",
      opt2req: {
        param: "opoznienie",
        expression: "==",
        value: 1,
      },
    },
    egzecuteEnding: {
      btn1Value: "[END]",
      nextVid1: "egzecuteEnding",
    },

    m4: {
      btn1Value: "[KONTYNUUJ]",
      opt1req: {
        param: "conanhit",
        expression: "==",
        value: 1,
      },
      btn2Value: "[KONTYNUUJ]",
      opt2req: {
        param: "conanhit",
        expression: "==",
        value: 0,
      },
      nextVid1: "n1",
      nextVid2: "n2",
    },
    m5: {
      btn1Value: "'Niech będzie'",
      nextVid1: "thuglifeEnding",
      btn2Value: "'NIGDY!'",
      nextVid2: "m6",
    },
    thuglifeEnding: {
      btn1Value: "[END]",
      nextVid1: "thuglifeEnding",
    },
    m6: {
      btn1Value: "[Wysadź się]",
      opt1req: {
        param: "bluzaKamikaze",
        expression: "==",
        value: 1,
      },
      btn2Value: "[Kontynuuj]",
      btn3Value: "Uzyj Amuletu",
      opt3req: {
        param: "Amulet",
        expression: "==",
        value: 1,
      },
      btn4Value: "[Napij się eliksiru]",
      opt4req: {
        param: "tajnaButelka",
        expression: "==",
        value: 1,
      },
      nextVid1: "sacrificeEnding",
      nextVid2: "deadEnding",
      nextVid3: "amuletEnding",
      nextVid4: "soloHulkEnding",
    },
    sacrificeEnding: {
      btn1Value: "[END]",
      nextVid1: "sacrificeEnding",
    },
    deadEnding: {
      btn1Value: "[END]",
      nextVid1: "deadEnding",
    },
    amuletEnding: {
      btn1Value: "[END]",
      nextVid1: "amuletEnding",
    },
    soloHulkEnding: {
      btn1Value: "[END]",
      nextVid1: "soloHulkEnding",
    },
    m8: {
      btn1Value: "[KONTYNUUJ]",
      opt1req: {
        param: "conanhit",
        expression: "==",
        value: 0,
      },
      btn2Value: "[KONTYNUUJ]",
      opt2req: {
        param: "conanhit",
        expression: "==",
        value: 1,
      },
      nextVid1: "n2",
      nextVid2: "n1",
    },
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/graj" element={<Video videos={videos} />} />
        <Route path="/odbierzprezent" element={<Samouczek />} />
        <Route path="/ogrze" element={<Osiagniecia />} />
      </Routes>
    </Router>
  );
}

export default App;
