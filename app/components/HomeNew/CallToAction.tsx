import { BsFacebook, BsFillTelephoneFill, BsLine } from "react-icons/bs";

const CallToAction = () => {
    return (
        <div className="w-full h-[74px] fixed bottom-[24px] px-[30px] z-[999] md:hidden">
            <div className="w-[100%] h-[100%] rounded-full">
                <div className="grid grid-cols-3 h-[100%]">
                    <a href="tel://0625399395" target="_blank" className="flex items-center justify-center bg-slate-400 rounded-l-full">
                        <BsFillTelephoneFill style={{ fontSize: 30, color: 'white' }} />
                    </a>
                    <a href="https://line.me/ti/p/~Smiley_season" target="_blank" className="flex items-center justify-center  bg-[#00b900]">
                        <BsLine style={{ fontSize: 35, color: 'white' }} />
                    </a>
                    <a href="https://www.facebook.com/profile.php/?id=61553635442923" target="_blank" className="flex items-center justify-center  bg-[#3c5a99] rounded-r-full">
                        <BsFacebook style={{ fontSize: 35, color: 'white' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
