import { CandleVariant } from "./candle_variant";

export interface Candle {
    name: string;
    description: string;
    thumb: string;
    images: string[];
    variants: CandleVariant[];
}