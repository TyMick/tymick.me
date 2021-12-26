import fs from "fs/promises";
import { join } from "path";
import React, { useCallback } from "react";
import { GyroscopePlugin } from "photo-sphere-viewer/dist/plugins/gyroscope";
import PhotoSphereViewer from "../../components/PhotoSphereViewer";
import { Viewer } from "photo-sphere-viewer";

export default function Photo({ id }) {
  const onReady = useCallback((viewer: Viewer) => {
    const gyroscope = viewer.getPlugin(GyroscopePlugin);
    gyroscope.start();
  }, []);
  return (
    <PhotoSphereViewer
      onReady={onReady}
      panorama={`/360-photos/${id}.jpg`}
      fisheye={true}
      navbar={["autorotate", "zoom", "gyroscope", "fullscreen", "caption"]}
      plugins={[GyroscopePlugin]}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
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
