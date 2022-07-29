import ImageSlider from "./slider/SliderImage";
import { SliderData } from './slider/SliderData';
export default function Main() {
    return (
        <ImageSlider slides={SliderData} />
    )
}
