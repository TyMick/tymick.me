import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Viewer, ViewerOptions } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import filterProps from "../lib/filterProps";

type ContainerProps = { [propName: string]: any };
type PhotoSphereViewerProps = Omit<ViewerOptions, "container"> &
  ContainerProps & {
    as?: React.ElementType;
    onceReady?: (viewer: Viewer) => Promise<void>;
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
  ({ as: Component = "div", onceReady, ...props }, ref) => {
    const [viewerOptions, containerProps] = filterProps<
      Omit<ViewerOptions, "container">,
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
      if (onceReady)
        viewerRef.current.once(
          "ready",
          async () => await onceReady(viewerRef.current)
        );
      return () => viewerRef.current.destroy();
    }, [onceReady, viewerOptions]);

    return <Component ref={containerRef} {...containerProps} />;
  }
);
export default memo(PhotoSphereViewer);
