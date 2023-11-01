import SocialLinks from "./SocialLinks";
function Header()
{
    return (
      <div className="mb-14 ml-24 pt-20 mr-24 flex flex-col text-center items-center">
        <div className="">
          <div className="text-4xl">
            <h1 className="">Thomas Lamb</h1>
            <h1 className="text-2xl">Unreal Engine 5 Programmer</h1>
          </div>

          <div className="flex flex-row text-left ">
            <div className="mt-6 ">
              Game developer with an interest in a wide variety of programming disciplines. 
              <div>
                Currently working on a project in UE5 with C++ and a custom engine in C++
              </div>
              <div className="mt-6 text-sm">
                To view projects, click on the preview gif. To exit the project showcase click the sides.
              </div>
            </div>
            <div className="lg:ml-36 md:ml-24 flex flex-row-reverse justify-end items-center sm:ml-2 ml-2 mt-6 ">
              <SocialLinks />
            </div>
          </div>
        </div>
          <hr className="h-px w-[100%] my-8  border-0 dark:bg-slate-900" />
      </div>
    );
}

export default Header;