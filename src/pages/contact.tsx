import Contain from "components/container";
import Hero from "components/hero";
import Link from "next/link";
import Meta from "components/meta";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import PostBody from "components/post-body";

export const FadeInSample = () => {
  const [toggle, setToggle] = useState(false);
  const styles = useSpring({ opacity: toggle ? 1 : 0 });

  const handleToggle = () => {
    setToggle((_toggle) => !_toggle);
  };

  useEffect(() => {
    handleToggle();
  }, []);

  return (
    <animated.div style={styles}>
      <p>Fade in text</p>
    </animated.div>
  );
};

export default function Contact() {
  return (
    <Contain>
      <Meta
        pageTitle="お問い合わせ"
        pageDesc="依頼や質問をご希望の方はこちらからお問い合わせください"
      />
      <Hero
        title="お問い合わせ"
        subtitle="依頼や質問をご希望の方はこちらからお問い合わせください"
      />
      <PostBody>
        <Link
          href="https://forms.gle/Lv8jb4hf8ruA8Gfi6"
          className="btn btn-flat"
        >
          <span>お問い合わせフォーム</span>
        </Link>
        <div>
          <br />
        </div>
      </PostBody>
    </Contain>
  );
}
