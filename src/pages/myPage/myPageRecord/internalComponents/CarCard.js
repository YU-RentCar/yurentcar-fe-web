import { React } from "react";
import ExCar from "../../../../assets/ExCar.png";

/**
 * 최근 본 차량 상세 정보 카드뷰
 * @param {array} props.carInfo 부모에게서 받아온 사용자가 최근 본 특정 차량의 정보 객체
 * @param {setter} props.setIsPopUpShow 부모에게서 받아온 팝업이 보이는지 관리하는 state의 setter
 */
function CarCard(props) {
  return (
    <>
      <div className="flex items-center justify-center w-1/3 rounded-lg h-1/2">
        <div
          className="w-[90%] h-[90%] bg-sky-100 rounded-md flex flex-col justify-around items-center"
          onClick={(e) => {
            e.stopPropagation();
            props.setIsPopUpShow(true);
          }}
        >
          {/* 차량의 사진 */}
          <img src={ExCar} alt="ExCar" className="object-contain h-1/2"></img>

          {/* 차종, 차량 번호*/}
          <div className="w-[80%] h-[10%] flex justify-around">
            <div className="flex items-center justify-center h-full font-bold bg-blue-300 rounded-md w-fit min-w-[30%] text-sm">
              {props.carInfo["carName"]}
            </div>
            <div className="flex items-center justify-center h-full font-bold bg-blue-300 rounded-md w-fit min-w-[50%] text-sm">
              {props.carInfo["carNumber"]}
            </div>
          </div>

          {/* 총 주행 거리, 1일 렌트 비용 */}
          <div className="w-[80%] h-[10%] flex justify-around">
            <div className="h-full bg-blue-300 rounded-md w-fit min-w-[50%] flex justify-center items-center font-bold text-sm">
              총 {props.carInfo["totalDistance"]}km
            </div>
            <div className="h-full bg-amber-500 rounded-md min-w-[40%] w-fit flex justify-center items-center font-bold text-sm">
              100000원
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CarCard };
