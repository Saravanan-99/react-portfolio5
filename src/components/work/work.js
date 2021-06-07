import React from "react";
import Workpanel from "./work-panel";

const Work = (props) => {
  return (
    <div id="work">
      <Workpanel
        color="#F8E0DE"
        bgColor="#2D3548"
        align="copy-left"
        title="Project One"
        id="project1"
        device="phone"
        parallaxDisabled={props.parallaxDisabled}
        bgImage="https://picsum.photos/900?random=1"
        deviceImages={[
          "https://picsum.photos/540/1200?random=1",
          "https://picsum.photos/540/1200?random=2",
          "https://picsum.photos/540/1200?random=3",
        ]}
        copy="I thought today we would make a happy little stream that's just running through the woods here. And I will hypnotize that just a little bit. Only think about one thing at a time. Don't get greedy. Poor old tree. You can do anything your heart can imagine."
        challenges={[
          "Bob Ross Says...",
          "Just take out whatever you don't want. ",
          "It'll change your entire perspective.A page builder system allowing maximum flexibility for the client",
          "Everything is happy if you choose to make it that way.",
        ]}
        role="Lead Dev"
        link="https://github.com"
      />

      <Workpanel
        color="#55C887"
        bgColor="#28493D"
        align="copy-right"
        title="Project"
        id="project2"
        device="laptop"
        parallaxDisabled={props.parallaxDisabled}
        bgImage="https://picsum.photos/900?random=2"
        deviceImages={[
          "https://picsum.photos/600/375?random=4",
          "https://picsum.photos/600/375?random=5",
          "https://picsum.photos/600/375?random=6",
        ]}
        copy="Have fun with it. You can do it. We'll throw some old gray clouds in here just sneaking around and having fun. Each highlight must have it's own private shadow."
        challenges={[
          "Bob Ross Says...",
          "Just take out whatever you don't want. ",
          "It'll change your entire perspective.A page builder system allowing maximum flexibility for the client",
          "Everything is happy if you choose to make it that way.",
        ]}
        link="https://github.com"
      />

      <Workpanel
        color="#EE9A50"
        bgColor="#011E41"
        align="copy-left"
        title="App Dev"
        id="project3"
        device="phone"
        parallaxDisabled={props.parallaxDisabled}
        bgImage="https://picsum.photos/900?random=3"
        deviceImages={[
          "https://picsum.photos/540/1200?random=7",
          "https://picsum.photos/540/1200?random=8",
          "https://picsum.photos/540/1200?random=9",
        ]}
        copy="They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics. No pressure. Just relax and watch it happen. This is truly an almighty mountain. Nature is so fantastic, enjoy it. Let it make you happy. This present moment is perfect simply due to the fact you're experiencing it."
        challenges={[
          "Bob Ross Says...",
          "Just take out whatever you don't want. ",
          "It'll change your entire perspective.A page builder system allowing maximum flexibility for the client",
          "Everything is happy if you choose to make it that way.",
        ]}
        role="Lead Dev"
        link="https://github.com"
      />

      <Workpanel
        color="#D1B8BB"
        bgColor="#6D1227"
        align="copy-right"
        title="Project Two"
        id="project4"
        device="laptop"
        parallaxDisabled={props.parallaxDisabled}
        bgImage="https://picsum.photos/900?random=4"
        deviceImages={[
          "https://picsum.photos/600/375?random=4",
          "https://picsum.photos/600/375?random=5",
          "https://picsum.photos/600/375?random=6",
        ]}
        copy="I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. Trees live in your fan brush, but you have to scare them out. You can't have light without dark. You can't know happiness unless you've known sorrow. The least little bit can do so much."
        challenges={[
          "Bob Ross Says...",
          "Just take out whatever you don't want. ",
          "It'll change your entire perspective.A page builder system allowing maximum flexibility for the client",
          "Everything is happy if you choose to make it that way.",
        ]}
        role="Lead Dev"
      />
    </div>
  );
};

export default Work;
