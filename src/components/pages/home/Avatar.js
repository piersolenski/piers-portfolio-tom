import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Application,
  Sprite,
  Texture,
  Rectangle,
  // Loader,
  WRAP_MODES,
} from 'pixi.js';
import { AsciiFilter } from '@pixi/filter-ascii';
import { DisplacementFilter } from '@pixi/filter-displacement';
import { GlitchFilter } from '@pixi/filter-glitch';
import styled, { keyframes } from 'styled-components';
// Utils
import lerp from '../../../utils/lerp';
import { inOutQuad } from '../../../utils/easing';
// Images
import avatar from '../../../images/avatar.png';
// import avatar from '../../../images/cat.jpg';
import smoke from '../../../images/smoke.jpg';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 1s ease both;
  /* height: 110%; */
  position: absolute;
  right: 0;
  top: 100px;
  bottom: -500px;
  z-index: -4;
  /* background: red; */
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 799px) {
    width: 100%;
  }
  @media (min-width: 800px) {
    width: 75%;
  }
  @media (min-width: 1000px) {
    width: 62%;
  }
  canvas {
    opacity: 0.4;
  }
`;

export default function Avatar({ className }) {
  // The canvas
  const $wrapper = useRef();
  // Application
  const app = new Application({
    resizeTo: $wrapper.current,
    transparent: true,
    resolution: window.devicePixelRatio,
  });
  const container = new Container(0x00000, true);
  // let container = new Container(0x00000, true);
  // const loader = new Loader();
  // loader.add('avatar', avatar);
  app.ticker.autoStart = false;
  // Filters
  const ascii = new AsciiFilter();
  const glitch = new GlitchFilter();
  const sprite = new Sprite(Texture.from(avatar));
  const displacementSprite = Sprite.from(smoke);

  const displacement = new DisplacementFilter(displacementSprite);
  ascii.size = 10;
  displacement.scale.y = 500;
  sprite.filters = [
    ascii,
    displacement,
    // glitch,
    // thing
  ];

  function setup() {
    $wrapper.current.appendChild(app.view);
    app.renderer.resize(
      $wrapper.current.clientWidth,
      $wrapper.current.clientHeight
    );
    // sprite.y = 0;
    sprite.width = app.screen.width * 0.9;
    sprite.x = app.screen.width - sprite.width;
    // sprite.width = app.screen.width;
    // sprite.height = app.container.screen.width;
    sprite.filterArea = new Rectangle(
      0,
      0,
      app.screen.width,
      app.screen.height
    );
    container.interactiveChildren = false;
    app.stage.addChild(container);
    container.addChild(sprite);
    app.render(container);
    displacementSprite.texture.baseTexture.wrapMode = WRAP_MODES.CLAMP;

    animateIn({ duration: 1000, amount: 500 }).then(() => {
      onScroll();
    });

    // window.addEventListener('resize', resize(app));
    // resize(app)();
  }

  function animateIn({ amount, duration }) {
    return new Promise(resolve => {
      const startTime = app.ticker.lastTime;
      function animate() {
        const runTime = app.ticker.lastTime - startTime;
        const progress = inOutQuad(Math.min(runTime / duration, 1));
        displacement.scale.y = amount - amount * progress;
        if (progress === 1) {
          app.ticker.remove(animate);
          resolve('Intro animation finished');
        }
      }
      window.addEventListener('scroll', () => {
        resolve('Intro animation finished');
      });
      app.ticker.add(animate);
    });
  }

  // function setRestingGlitch() {
  //   glitch.alpha = 1;
  //   glitch.offset = random(20, 30);
  //   glitch.sampleSize = 400;
  //   glitch.seed = random(5, 10);
  //   glitch.slices = random(5, 15);
  // }

  let spriteDisplacement = 0;
  function animateOut() {
    const scrollOffset = window.pageYOffset;
    const scrollPercent = scrollOffset / window.innerHeight;
    // spriteDisplacement += (scrollPercent - spriteDisplacement) * 0.09;
    spriteDisplacement += scrollPercent - spriteDisplacement;
    displacement.scale.y = -500 * spriteDisplacement;
  }

  function onScroll() {
    app.ticker.add(animateOut);
  }

  function cleanup() {
    app.destroy({ removeView: true, stageOptions: true });
    // container.destroy(true);
    // app = null;
    // container = null;
  }

  useEffect(() => {
    setup();
    return () => cleanup();
  });

  return <Wrapper className={className} ref={$wrapper} />;
}

Avatar.propTypes = {
  className: PropTypes.string,
};
