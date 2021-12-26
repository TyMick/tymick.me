import fs from "fs/promises";
import { join } from "path";
import React from "react";
import { Viewer } from "photo-sphere-viewer";
import { GyroscopePlugin } from "photo-sphere-viewer/dist/plugins/gyroscope";
import PhotoSphereViewer from "../../components/PhotoSphereViewer";

export default function Photo({ id }) {
  return (
    <PhotoSphereViewer
      onceReady={startGyroscopeOrRotate}
      panorama={`/360-photos/${id}.jpg`}
      fisheye={true}
      navbar={["autorotate", "zoom", "gyroscope", "fullscreen"]}
      plugins={[GyroscopePlugin]}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}

async function startGyroscopeOrRotate(viewer: Viewer) {
  const gyroscope = viewer.getPlugin(GyroscopePlugin);
  try {
    await gyroscope.start();
  } catch {
    viewer.startAutorotate();
  }
}

export async function getStaticProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}

export async function getStaticPaths() {
  const photosDirectory = join(process.cwd(), "public/360-photos");
  const photoFiles: string[] = await fs.readdir(photosDirectory);
  const slugs = photoFiles.map((filename) => filename.replace(".jpg", ""));
  return {
    paths: slugs.map((slug) => ({ params: { id: slug } })),
    fallback: false,
  };
}
