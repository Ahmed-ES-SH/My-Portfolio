"use client";
import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { usePathname } from "next/navigation";

export default function AnimateBackGround() {
  const [init, setInit] = useState(false);
  const pathName = usePathname();
  const segments = pathName.split("/").filter(Boolean);
  const cleanedPath = "/" + segments.slice(1).join("/");

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container: Container | undefined
  ): Promise<void> => {};

  if (cleanedPath == "/skills" || cleanedPath.includes("/projects"))
    return null;

  return (
    <div
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100vh",
        zIndex: 5,
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#15a6b1",
              },
              links: {
                color: "#15a6b1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                },

                value: 20,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: { min: 3, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
