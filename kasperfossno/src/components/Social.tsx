export const Social = () => {
  return (
    <div className="flex flex-col bg-dark-blue text-white font-medium md:flex-row md:content-between w-full">
      <div className="p-7 md:p-24 w-1/2 h-full flex justify-center items-center">
        <div className="w-2/3">
          <div className="text-3xl">Sosiale medium</div>
          <div className="text-xl font-normal p-2">
            <ul className="">
              <li className="p-2 flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                  alt=""
                  className="w-16 mr-5"
                />{" "}
                @kasperrfoss
              </li>
              <li className="p-2 flex items-center">
                {" "}
                <img
                  src="https://cdn.pixabay.com/photo/2020/10/17/13/19/twitter-5662063_960_720.png" alt=""
                  className="w-16 mr-5"
                />
                @Kasper_Foss
              </li>
              <li className="p-2 flex items-center">
                {" "}
                <img
                  src="https://seeklogo.com/images/T/tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png"
                  alt=""
                  className="w-16 mr-5"
                />
                @kasperfoss
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src="https://sumo.cdn.tv2.no/imageapi/v3/img/615da0a2498e4fc2aaf7d2b5-1633536842300?location=list"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
