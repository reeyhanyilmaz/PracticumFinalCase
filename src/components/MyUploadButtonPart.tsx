import React, { useState } from "react";
import { Upload } from "upload-js";
import { setFileUrl, useFileUrl } from "../redux/modalSlice";

import Image from "next/image";

const upload = new Upload({ apiKey: "public_12a1xqKxHyXXSyXNew8hUQWRX2uS" });

const MyUploadButton = () => {
  // const fileUrl = useFileUrl(); //state
  // console.log("fileUrl :>> ", fileUrl);
  const [fileUrl, setFileUrl] = useState("");

  const uploadFile = upload.createFileInputHandler({
    onProgress: ({ bytesSent, bytesTotal }) => {
      console.log(`${bytesSent / bytesTotal}% complete`);
    },
    onUploaded: ({ fileUrl, fileId }) => {
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

  return (
    <>
      {fileUrl === "" ? (
        <div className="generalPosition bg-[#7D4AEA] opacity-[0.1] rounded-[12px] w-[80px] h-[80px] mt-[30px]">
          <Image src="/assets/modal/uploadLogoIn.svg" width={27} height={27} />
        </div>
      ) : (
        <Image loader={() => src} src={fileUrl} width={110} height={80} />
      )}

      <div className="flex flex-row mt-[20px]">
        <input type="file" onChange={uploadFile} />

        {/* <Image src="/assets/modal/uploadIcon.svg" width={18} height={12} /> */}
        {/* <p className="font-normal text-[14px] font-[Inter] ml-[5px]">
              Drop your image here or{" "}
              <button className="underline text-[#7D4AEA]">upload</button>
            </p> */}
      </div>
    </>
  );
};

export default MyUploadButton;
