import Image from "next/image";
import { useState, useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";

// next.config.jsにURLの登録をしている
const CAT_URL: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg",
];

interface FetchCatDir {
  height: number;
  id: string;
  url: string;
  width: number;
}
type FetchImageType = FetchCatDir[];

const fetchCatImage = async (): Promise<FetchCatDir> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as FetchImageType;
  return result[0];
};

interface IndexPageProps {
  initialCatImageUrl: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  const [catImageUrl, setCatImageUrl] = useState<string>("");
  const handleClick = () => {
    setCatImageUrl(randomCatImage());
  };
  const randomCatImage = (): string => {
    const index = Math.floor(Math.random() * CAT_URL.length);
    return CAT_URL[index];
  };

  const [catImageApi, setCatImageApi] = useState<string>("");
  const handleClickApi = async () => {
    const image = await fetchCatImage();
    setCatImageApi(image.url);
  };

  const [catImageSsr, setCatImageSsr] = useState(initialCatImageUrl);
  return (
    <div className="text-blue">
      <button
        onClick={handleClick}
        className="p-2 bg-slate-200 mt-2 rounded-sm"
      >
        Today Cat From URL....
      </button>
      <Image src={catImageUrl} alt="cat" width={500} height={500} />
      <button
        onClick={handleClickApi}
        className="p-2 bg-slate-200 mt-2 rounded-sm"
      >
        Today Cat From API....
      </button>
      <Image src={catImageApi} alt="cat" width={500} height={500} />
      <h4 className="mt-5 text-red-400">SSR IMAGE</h4>
      <Image src={initialCatImageUrl} alt="cat" width={500} height={500} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};

export default IndexPage;
