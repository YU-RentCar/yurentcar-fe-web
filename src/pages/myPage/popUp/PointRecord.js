import { useEffect, useState } from "react";
import Close from "../../../assets/Close.png";
import { getPointRecord } from "../../../api/MyPageAxios";

/**
 * 포인트 사용/적립 내역 상세 조회
 * @param {setter} props.showPopUp 부모에게 받아온 팝업 제어 함수
 * @returns
 */
function PointRecord(props) {
  let [pointRecords, setPointRecords] = useState([{}]);

  useEffect(() => {
    (async () => {
      await getPointRecord()
        .then((response) => {
          if (response.data.length === 0) {
            console.log("shit");
            props.showPopUp(false);
          } else console.log(response.data);
        })
        .catch((error) => console.log(error.response));
    })();
  });

  /* 사용이냐 적립이냐에 따른 표현 방식 제어 */
  let getMent = (item, index) => {
    let color = "";
    /* 적립(+) = blue, 사용(-) = amber */
    item["price"] > 0 ? (color = "text-blue-500") : (color = "text-amber-500");
    return (
      <div
        className="w-[90%] h-[10%] mt-5 bg-slate-100 border-slate-400 border-2 rounded-lg flex justify-center items-center font-bold"
        key={index}
      >
        {item["createdTime"]} &nbsp;
        {item["reason"]} &nbsp;
        <span className={color}>
          {item["price"] > 0 ? "+" : "-"}
          {item["price"] + "원"}
        </span>
      </div>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full">
      {/* 팝업 배경 (클릭시 팝업 off) */}
      <div
        className="fixed w-full h-full opacity-25 bg-slate-600"
        onClick={() => props.showPopUp(false)}
      ></div>

      <div className="fixed w-[60%] m-auto bg-white border-blue-300 border-2 rounded-[10px] h-[700px] flex justify-around items-center">
        {/* 상세 내역들 */}
        <div className="w-[90%] h-[90%] flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-full text-xl font-bold bg-blue-300 rounded-lg h-[10%]">
            포인트 사용/적립 내역
          </div>
          <div className="flex flex-col items-center w-full overflow-y-scroll border-2 border-blue-500 rounded-lg h-[90%]">
            {pointRecords.map((item, index) => {
              return getMent(item, index);
            })}
          </div>
        </div>

        {/* 팝업 off 버튼 */}
        <div className="w-[5%] h-[90%]">
          <img
            src={Close}
            alt="close button"
            className="object-contain w-full"
            onClick={() => props.showPopUp(false)}
          ></img>
        </div>
      </div>
    </div>
  );
}

export { PointRecord };
