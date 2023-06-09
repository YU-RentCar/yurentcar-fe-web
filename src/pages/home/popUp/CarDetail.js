import ExCar from "../../../assets/ExCar.png";
import Close from "../../../assets/Close.png";
import { useDispatch, useSelector } from "react-redux";
import { changeCarName, changeCarNum, changeRunDistance } from "../../../store";
import { useNavigate } from "react-router-dom";
/**
 * 차량 상세 정보를 보여주는 팝업
 * @param {setter} props.setIsPopUpShow 부모에게 받아온 팝업 여부를 정해주는 setter
 * @param {state} props.carDetailInfoObj 부모에게 받아온 차량 정보
 * @param {state} props.carInfo 부모에게 받아온 카드뷰 정보
 */
function CarDetail(props) {
  let rentalInfo = useSelector((state) => {
    return state.selectedRentalInfo;
  });

  let baseInfo = useSelector((state) => {
    return state.baseInfo;
  });

  let dispatch = useDispatch();

  let nav = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full">
      <div
        className="fixed w-full h-full opacity-25 bg-slate-600"
        onClick={() => {
          props.setIsPopUpShow(false);
        }}
      ></div>

      <div className="fixed w-[70%] m-auto bg-white border-blue-300 border-2 rounded-[10px] h-[750px] flex justify-around items-center">
        <div className="relative flex items-center justify-around w-full h-full bg-slate-300">
          {/* 닫는 버튼 */}
          <div
            className="absolute p-4 cursor-pointer top-2 right-2"
            onClick={() => {
              props.setIsPopUpShow(false);
            }}
          >
            <img src={Close} alt="Close" />
          </div>
          <div className="w-2/6 h-4/5">
            {/* dsaf */}
            <div className="flex flex-col items-center justify-start p-3 bg-white">
              <div className="mb-5">
                <img src={ExCar} alt="car" />
              </div>
              <div className="w-[90%] h-[80px] bg-blue-300 mb-5 text-3xl text-white font font-extrabold rounded-3xl">
                <div className="flex items-center justify-center w-full h-full rounded-3xl">
                  <del>{props.carDetailInfoObj.price * 1.3}원</del> &nbsp;
                  &nbsp; {props.carDetailInfoObj.price}원
                </div>
              </div>
              <div className=" w-[90%] h-[80px] bg-rose-500 text-4xl text-white font font-extrabold rounded-3xl">
                <button
                  className="flex items-center justify-center w-full h-full rounded-3xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(changeCarNum(props.carInfo[1]));
                    dispatch(changeCarName(props.carInfo[0]));
                    dispatch(changeRunDistance(props.carInfo[2]));

                    nav("/home/reservation");
                  }}
                >
                  예약하기
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-around w-1/2 bg-white h-4/5">
            <div className="flex bg-white w-[96%] h-1/6 justify-around items-center">
              <div className="border-[5px] border-dashed rounded-2xl px-7 py-2 border-slate-200 font-extrabold text-xl">
                예약 기간
              </div>
              <div className="border-[3px] rounded-2xl px-7 py-2 border-blue-500 font-bold">
                {rentalInfo.startDate} / {rentalInfo.startTime} ~{" "}
                {rentalInfo.endDate} / {rentalInfo.endTime}
              </div>
            </div>
            <div className="flex flex-col bg-white w-[96%] h-2/6">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-row items-center justify-start h-1/4">
                  <div className="flex justify-start w-1/3 border-[5px] border-dashed h-full rounded-2xl">
                    <div className="flex items-center justify-center w-full text-xl font-extrabold">
                      기본 정보
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-around h-4/6 border-[3px] border-blue-500 rounded-2xl">
                  <div className="flex flex-col w-1/4 h-3/4 border-[3px] rounded-2xl border-blue-500">
                    <div className="flex items-center justify-center w-full h-1/2 border-b-[3px] bg-blue-300 border-blue-500 rounded-xl font-extrabold">
                      차종
                    </div>
                    <div className="flex items-center justify-center w-full font-bold h-1/2">
                      {props.carInfo[0]}
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4  h-3/4 border-[3px] rounded-2xl border-blue-500">
                    <div className="flex items-center justify-center w-full h-1/2 border-b-[3px] bg-blue-300 border-blue-500 rounded-xl font-extrabold">
                      차 번호
                    </div>
                    <div className="flex items-center justify-center w-full font-bold h-1/2">
                      {props.carInfo[1]}
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 h-3/4 border-[3px] rounded-2xl border-blue-500">
                    <div className="flex items-center justify-center w-full h-1/2 border-b-[3px] bg-blue-300 border-blue-500 rounded-xl font-extrabold">
                      총 주행거리
                    </div>
                    <div className="flex items-center justify-center w-full font-bold h-1/2">
                      {props.carInfo[2]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white w-[96%] h-2/6">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-row items-center justify-start h-1/4">
                  <div className="flex justify-start w-1/3 border-[5px] border-dashed h-full rounded-2xl">
                    <div className="flex items-center justify-center w-full text-xl font-extrabold">
                      차량 옵션
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-around h-4/6 border-[3px] border-blue-500 rounded-2xl">
                  <div className="flex flex-col w-1/5 h-3/4 border-[3px] rounded-2xl border-blue-500">
                    <div className="flex items-center justify-center w-full h-1/2 border-b-[3px] bg-blue-300 border-blue-500 rounded-xl font-extrabold">
                      차량크기
                    </div>
                    <div className="flex items-center justify-center w-full font-bold h-1/2">
                      {props.carDetailInfoObj.carSize}
                    </div>
                  </div>
                  <div className="flex flex-col w-1/5 h-3/4 border-[3px] rounded-2xl border-blue-500">
                    <div className="flex items-center justify-center w-full h-1/2 border-b-[3px] bg-blue-300 border-blue-500 rounded-xl font-extrabold">
                      유종
                    </div>
                    <div className="flex items-center justify-center w-full font-bold h-1/2">
                      {props.carDetailInfoObj.oilType}
                    </div>
                  </div>
                  <div className="flex flex-col w-1/5 h-3/4 border-[3px] rounded-2xl border-blue-500">
                    <div className="flex items-center justify-center w-full h-1/2 border-b-[3px] bg-blue-300 border-blue-500 rounded-xl font-extrabold">
                      트랜스미션
                    </div>
                    <div className="flex items-center justify-center w-full font-bold h-1/2">
                      {props.carDetailInfoObj.transmission}
                    </div>
                  </div>
                  <div className="flex flex-col w-1/5 h-3/4 border-[3px] rounded-2xl border-blue-500">
                    <div className="flex items-center justify-center w-full h-1/2 border-b-[3px] bg-blue-300 border-blue-500 rounded-xl font-extrabold">
                      최소인원
                    </div>
                    <div className="flex items-center justify-center w-full font-bold h-1/2">
                      {props.carDetailInfoObj.maxPassenger}인승
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CarDetail };
