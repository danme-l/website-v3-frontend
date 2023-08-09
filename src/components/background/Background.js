import React from "react";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import Particles from "react-tsparticles";
import { useTheme } from "@mui/material";

const Background = ({inputConfigs}) => {
  const theme = useTheme()

  const getColorBasedOnTheme = (lightColor, darkColor) => {
    return theme.palette.mode === "light" ? lightColor : darkColor;
  };

  const config = {
    name: "Polygon Mask",
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        }
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1
        }
      }
    },
    particles: {
      color: {
        value: getColorBasedOnTheme(theme.palette.primary.dark, theme.palette.primary.main), // Adjust colors here
      },
      links: {
        blink: false,
        color: getColorBasedOnTheme(theme.palette.primary.dark, theme.palette.white), // Adjust colors here
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1
      },
      number: {
        limit: 0,
        value: inputConfigs.numParticles,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 1,
          sync: false
        },
        value: {
          min: 0.05,
          max: 0.4
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 1
      }
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.2)",
        lineWidth: 1
      },
      enable: true,
      move: {
        radius: 10
      },
      position: {
        x: inputConfigs.px,
        y: inputConfigs.py 
      },
      inline: {
        arrangement: "equidistant"
      },
      scale: inputConfigs.scale,
      type: "inline",
      url: process.env.PUBLIC_URL + '/assets/sphere.svg' // "https://particles.js.org/images/smalldeer.svg"
    },
    background: {
      color: "",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  }

  const particlesInit = async (engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  };

  return (
    <div>
      <Particles id="particles" options={config} init={particlesInit} />
    </div>
  );
};

export default Background;
