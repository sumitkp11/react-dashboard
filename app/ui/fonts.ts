// import the 'Inter' fonet
import { Inter, Lusitana } from 'next/font/google';


// then specify the subset to load - 'latin'
export const inter = Inter(
    {
        subsets: ['latin']
    }
);

export const lusitana = Lusitana(
    {
        weight: "400",
        subsets: ["latin"]

    }
);