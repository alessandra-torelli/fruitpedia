import icon from "../assets/images/defaultIcon.png"
import image from "../assets/images/defaultImage.png"

export const defaultIcon = (onErrorEvent) => onErrorEvent.target.src = icon;
export const defaultImage = (onErrorEvent) => onErrorEvent.target.src = image;