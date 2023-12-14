export enum MessageType {
    Error = "error",
    Message = "message",
    Notify = "notify",
    Success = "success",
    Warning = "warning",
}

export enum MessagePosition {
    BottomRight = "bottom-right",
    TopRight = "top-right",
    TopCenter = "top-center",
    TopLeft = "top-left",
    BottomCenter = "bottom-center",
    BottomLeft = "bottom-left"
}


export class AlertifyOptions {
    messageType: MessageType;
    messagePosition: MessagePosition;
    delay: number;
}