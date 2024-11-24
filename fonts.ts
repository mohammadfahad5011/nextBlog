import { Montserrat , Inter} from "next/font/google";
import local from "next/font/local";

const productSansRegular = local({
    src: './styles/fonts/ProductSans/Product-Sans-Regular.ttf',
})

const productSansBold = local({
    src: './styles/fonts/ProductSans/Product-Sans-Bold.ttf',
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight:["300","400", "700"]
})

const inter = Inter({
    subsets: ["latin"],
    weight:["300","400", "700"]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default { productSansRegular,productSansBold , montserrat, inter};