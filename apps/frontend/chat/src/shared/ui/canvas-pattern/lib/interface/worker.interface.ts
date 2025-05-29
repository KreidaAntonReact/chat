export interface ICanvasWorkerEvent {
    type: 'init' | 'resize'
    offscreen?: OffscreenCanvas;
    imageBitmap?: ImageBitmap;
    width?: number;
    height?: number;
}
