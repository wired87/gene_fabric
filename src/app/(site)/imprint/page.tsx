
const Imprint = () => {
  return(

      <div className="w-full h-full items-start justify-center relative flex flex-col px-10 pt-30 pb-[23px] ">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch relative font-semibold">
            <h2 className="relative pb-8 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Impressum
            </h2>
          </div>
        </div>
        <div className="self-st2retch flex flex-col items-start justify-end gap-[20px] text-base text-dimgray-300">
          <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/images/imprint/comp.svg"
            />
            <div className="flex-1 relative">codingWizard</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-end gap-[20px] text-base text-dimgray-300">
            <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/images/imprint/person.svg"
              />
              <div className="flex-1 relative">Benedikt Sterra</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/images/imprint/bxsphonecall.svg"
              />
              <div className="flex-1 relative">+49 176 73 86 79 52</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/images/imprint/icsharpemail.svg"
              />
              <div className="flex-1 relative">info@botworld.cloud</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[25px]">
              <div className="overflow-hidden flex flex-row items-start justify-start py-0.5 px-1 relative gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/images/imprint/location.svg"
                />
              </div>
              <div className="flex-1 relative">
                Klingestr. 22, 01159 Dresden
                Deutschland
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between relative">
          <div className="w-[138px] h-[138px] flex flex-row items-start justify-start relative">
            <div className="w-[calc(100%_+_131px)] !m-[0] absolute top-[24px] right-[-168px] left-[37px] flex flex-row items-start justify-start z-[0]">
              <div className="w-[269px] relative rounded-[50%] bg-main-colour h-[269px]" />
            </div>
            <div className="w-full !m-[0] absolute top-[calc(50%_-_69px)] right-[0px] left-[0px] flex flex-row items-start justify-start z-[1]">
              <div className="w-[138px] relative rounded-[50%] bg-darkslategray-200 h-[138px]" />
            </div>
          </div>
        </div>
      </div>

  )
}
export default Imprint;