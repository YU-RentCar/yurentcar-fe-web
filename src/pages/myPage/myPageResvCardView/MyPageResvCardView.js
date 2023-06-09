import { React, useState, useEffect } from "react";
import ExCar from "../../../assets/ExCar.png";
import { getBaseInfo } from "../../../api/MyPageAxios";

/**
 * 현재 예약 상세 정보 카드뷰
 * @returns
 */
function MyPageResvCardView(props) {
  /* 사용자의 예약 정보 객체 */
  let [resvInfo, setResvInfo] = useState({
    startDate: "tmp",
    endDate: "tmp",
  });

  useEffect(() => {
    (async () => {
      await getBaseInfo()
        .then((response) => {
          setResvInfo(response.data);
          console.log(typeof response.data.startDate);
          console.log();
        })
        .catch((error) => console.log(error.response));
    })();
  }, []);

  /* 예약 정보에 포함된 운전자들을 보여주게됨 */
  let driverList = ["홍", "길", "동"].map((driver, index) => (
    <span key={index}>
      제 {index + 1}운전자 : {driver} &nbsp;
    </span>
  ));

  return (
    <div className="w-full px-10 py-12 bg-white border-2 h-fit border-rose-500 rounded-3xl">
      {/* 예약 정보 멘트 */}
      <div className="text-4xl font-extrabold">
        <span className="text-amber-700">최요하</span> 님이 예약하신 차량이 준비
        중이에요
      </div>

      {/* 예약 세부 정보들 */}
      <div className="flex justify-between w-full mt-10 h-fit">
        {/* 사용자가 예약한 차량 사진 */}
        <img
          src={ExCar}
          alt="Exemple Car"
          className="object-contain w-[30%]"
        ></img>

        {/* 예약 정보 */}
        <div className="w-[50%] text-xl font-bold leading-relaxed flex flex-col justify-center">
          예약 기간 :
          {resvInfo["startDate"].substring(0, 10) +
            " ~ " +
            resvInfo["endDate"].substring(0, 10)}
          <br />
          예약 지점 : {resvInfo["branchName"]}
          <br />
          차량 : {resvInfo["carName"]}
          <br />차 번호 : {resvInfo["carNumber"]}
          <br />
          <div className="flex items-center">{driverList}</div>
        </div>

        {/* 세부 정보를 보기위한 버튼 */}
        <div className="relative w-[15%]">
          <button
            className="absolute bottom-0 flex items-center justify-center w-full text-xl font-bold border-4 border-blue-300 h-1/4 bg-slate-100 rounded-xl"
            onClick={() => {
              props.setShowDetail(true);
            }}
          >
            세부 정보
          </button>
        </div>
      </div>
    </div>
  );
}

export { MyPageResvCardView };
