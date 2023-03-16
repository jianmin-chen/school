import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";
import { mapData } from "@/manifest";

const inter = Inter({ subsets: ["latin"] });
const map = mapData();

const Interactive = dynamic(() => import("@/components/Interactive"), {
    ssr: false
});

export default function Home() {
    return (
        <div
            className={`${inter.className} h-screen max-h-screen w-screen max-w-screen overflow-hidden relative`}>
            <Interactive data={map} />
        </div>
    );
}
