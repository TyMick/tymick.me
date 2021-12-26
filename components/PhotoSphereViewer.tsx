import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import {
  Viewer,
  ViewerOptions as PhotoSphereViewerOptions,
} from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import filterProps from "../lib/filterProps";

type ViewerOptions = Omit<PhotoSphereViewerOptions, "container">;
type ContainerProps = { [propName: string]: any };
type PhotoSphereViewerProps = ViewerOptions &
  ContainerProps & {
    as?: React.ElementType;
  };

const viewerOptionNames = [
  "panorama",
  "adapter",
  "caption",
  "loadingImg",
  "loadingTxt",
  "size",
  "fisheye",
  "minFov",
  "maxFov",
  "defaultZoomLvl",
  "defaultLong",
  "defaultLat",
  "sphereCorrection",
  "moveSpeed",
  "zoomSpeed",
  "autorotateDelay",
  "autorotateSpeed",
  "autorotateLat",
  "moveInertia",
  "mousewheel",
  "mousemove",
  "captureCursor",
  "mousewheelCtrlKey",
  "touchmoveTwoFingers",
  "useXmpData",
  "panoData",
  "requestHeaders",
  "canvasBackground",
  "withCredentials",
  "navbar",
  "lang",
  "keyboard",
  "plugins",
];

const PhotoSphereViewer = forwardRef<Viewer, PhotoSphereViewerProps>(
  ({ as: Component = "div", ...props }, ref) => {
    const [viewerOptions, containerProps] = filterProps<
      ViewerOptions,
      ContainerProps
    >(props, viewerOptionNames);

    const containerRef = useRef<HTMLElement>();
    const viewerRef = useRef<Viewer>();
    useImperativeHandle(ref, () => viewerRef.current, []);

    useEffect(() => {
      viewerRef.current = new Viewer({
        container: containerRef.current,
        ...viewerOptions,
      });
      return () => viewerRef.current.destroy();
    }, [viewerOptions]);

    return <Component ref={containerRef} {...containerProps} />;
  }
);
export default memo(PhotoSphereViewer);
