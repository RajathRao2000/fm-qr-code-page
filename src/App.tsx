function App() {
  return (
    <div className="w-dvw min-h-dvh bg-custom-slate-300 grid place-items-center font-outfit">
      <div className="w-[320px] h-124.75 bg-white rounded-[20px] p-4 flex flex-col gap-6 items-center text-center">
        <div className="size-72 rounded-[10px] overflow-clip">
          <img
            src={import.meta.env.BASE_URL + "/image-qr-code.png"}
            alt="qr-code"
            className="size-full"
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="text-custom-slate-900 text-[22px] font-bold">
            Improve your front-end skills by building projects
          </div>
          <div className="text-[15px] text-custom-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
