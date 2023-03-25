import "./NavBarPage.css";

function NavBarPage() {
  return (
    <div className="h-screen w-screen bg-black text-[rgba(255,255,255,0.6)] font-medium relative">
      <a
        className="absolute text-[rgba(255,255,255,0.8)]  top-0 left-0 text-4xl p-4"
        href="#"
        target={"_blank"}
      >
        posterBoard.edu
      </a>

      <div
        className="absolute top-[50%] left-[50%] w-[40vw] text-6xl"
        id="ksk"
      >
        <a>Events</a>
        <a>About</a>
        <a>Team</a>
      </div>
    </div>
  );
}


export default NavBarPage;