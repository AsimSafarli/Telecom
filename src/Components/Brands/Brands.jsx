import React from "react";
function Brands() {
  const heading = "Top Brands Collection";
  const data = [
    {
      id: 1,
      name: "Apple",
      img: "Assets/Apple.png",
      descrb: "Royal Family",
      rate: "4.9",
      star: <ion-icon name="star"></ion-icon>,
    },
    {
      id: 2,
      name: "Samsung",
      img: "Assets/Samsung.png",
      descrb: "Royal Family",
      rate: "4.6",
      star: <ion-icon name="star"></ion-icon>,
    },
    {
      id: 3,
      name: "Huawei",
      img: "Assets/Huawei.png",
      descrb: "Royal Family",
      rate: "4.0",
      star: <ion-icon name="star"></ion-icon>,
    },
    {
      id: 4,
      name: "Oppo",
      img: "Assets/Oppo.png",
      descrb: "Royal Family",
      rate: "3.9",
      star: <ion-icon name="star"></ion-icon>,
    },
    {
        id: 5,
        name: "Infinix",
        img: "Assets/Infinix.png",
        descrb: "Royal Family",
        rate: "3.5",
        star: <ion-icon name="star"></ion-icon>,
      },
  ];
  return (
    <>
      <div className="flex justify-center items-center text-5xl">{heading}</div>
      <div className="flex flex-row justify-evenly gap-10 flex-wrap ">
        {data.map((item) => (
          <div className="flex flex-row justify-around items-center gap-x-8  drop-shadow-2xl bg-slate-50 h-16 w-1/4 ">
            <div>
              <img src={item.img} alt="" width={85} />
            </div>
            <div className="flex  flex-row  justify-center  items-center gap-x-8">
              <div>
                <div>{item.name}</div>
                <div className="text-gray-500">{item.descrb}</div>
              </div>
              <div className="flex flex-row justify-center  items-center gap-x-2">
                <div>{item.rate}</div>
                <div className="text-yellow-300">{item.star}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Brands;
