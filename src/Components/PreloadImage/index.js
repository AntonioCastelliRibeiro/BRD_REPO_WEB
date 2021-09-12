import React, { Suspense } from "react";
import { SuspenseImg } from "./SuspenseImg";
import images from "./data.js";

const ShowImages = () => {
    return (
        <div sytle={{ height: "inherit", width: "inherit" }}>
            {images.map((data, count) => (
                <div key={count} sytle={{ height: "inherit", width: "inherit" }}>
                    <SuspenseImg alt="" src={data} />
                </div>
            ))}
        </div>
    );
};

export default function PreloadImage() {
    return (
        <Suspense fallback={<h1 children={"carregando..."} />}>
            <ShowImages />
        </Suspense>
    );
}
