import React, { useRef, useState } from "react";

//nextjs
import Image from "next/image";

//for upload api
import { Upload } from "upload-js";

//loader spinner
import { RotatingLines } from "react-loader-spinner";

import {
  setFileUrl,
  useFileUrl,
  useLoading,
  setLoading,
} from "../redux/modalSlice";

const upload = new Upload({ apiKey: "public_12a1xqKxHyXXSyXNew8hUQWRX2uS" });

const UploadButton = () => {
  // const fileUrl = useFileUrl(); //state
  // console.log("fileUrl :>> ", fileUrl);
  // const loading = useLoading();

  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("loading", loading);

  const uploadFile = upload.createFileInputHandler({
    onProgress: ({ bytesSent, bytesTotal }) => {
      setLoading(true);
      console.log(`${bytesSent / bytesTotal}% complete`);
    },
    onUploaded: ({ fileUrl, fileId }) => {
      setLoading(false);
      setFileUrl(fileUrl);
      // alert(`File uploaded!\n${fileUrl}`);
      console.log("fileUrl", fileUrl);
    },
    onError: (error) => {
      alert(`Error!\n${error.message}`);
    },
  });

  //for image loader
  const src = fileUrl;

  //for click button
  const ref = useRef<any>();
  const handleClick = () => {
    const node: any = ref.current;
    node?.click();
  };

  return (
    <>
      {fileUrl === "" ? (
        <div className="generalPosition bg-[rgba(125,74,234,0.1)] rounded-[12px] w-[80px] h-[80px] mt-[30px]">
          {loading ? (
            <div>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="40"
                visible={true}
              />
            </div>
          ) : (
            <Image src="/assets/modal/uploadLogo.png" width={27} height={27} />
          )}
        </div>
      ) : (
        <Image loader={() => src} src={fileUrl} width={110} height={80} />
      )}

      <div className="flex flex-row mt-[20px]">
        <input ref={ref} type="file" onChange={uploadFile} className="hidden" />

        <Image src="/assets/modal/uploadIcon.svg" width={18} height={12} />
        <p className="font-normal text-[14px] font-[Inter] ml-[5px]">
          Drop your image here or{" "}
          <button onClick={handleClick} className="underline text-[#7D4AEA]">
            upload
          </button>
        </p>
      </div>
    </>
  );
};

export default UploadButton;
