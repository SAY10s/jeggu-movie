import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Tabs from "./Tabs";
import Samouczek from "./Samouczek";
import Osiagniecia from "./Osiagniecia";

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
            props.zubr
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
//           props.kodnuklearny,
//           props.koddodrzwi,
//           props.ewertzyje,
//           props.pilot,
//           props.dysk,
//           props.zwlokiewerta,
//           props.zubrprzezyje,
//           props.ewert
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
  timeoutId
) {
  if (typeof questionTime == "undefined") questionTime = 0;
  document.querySelector("#buttonswrapper").classList.add("hide");
  setCurrentVideo(nextVideo);
  if (zubr == "undefined") zubr = 0;
  if (typeof zubr !== "undefined") {
    setRelations({
      ...relations,
      zubr: relations.zubr + zubr,
    });
  }

  timeoutId = setTimeout(() => {
    document.querySelector("#buttonswrapper").classList.remove("hide");
  }, questionTime * 1000);
}

function App() {
  const [currentVideo, setCurrentVideo] = useState("xxx");
  const [relations, setRelations] = useState({
    zubr: 0,
  });

  let videos = {
    currentVideo: currentVideo,
    relations: relations,
    setCurrentVideo: setCurrentVideo,
    setRelations: setRelations,
    xxx: {
      btn1Value: "[GRAJ]",
      nextVid1: "makumba23",
      questionTime: 1,
    },
    makumba23: {
      btn1Value: "Jebnij se zuberka",
      btn2Value: "KAMIKAZE",
      nextVid1: "zubr",
      nextVid2: "pierdolsie",
      questionTime: 1,
    },
    zubr: {
      btn1Value: "[END]",
      nextVid1: "zubr",
      questionTime: 1,
    },
    pierdolsie: {
      btn1Value: "[END]",
      nextVid1: "pierdolsie",
      questionTime: 64,
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
