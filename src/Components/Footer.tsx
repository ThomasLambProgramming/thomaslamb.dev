import SocialLinks from "./SocialLinks";
function Footer() {
  return (
    <div>
      <footer className="bg-light_theme-default dark:bg-dark_theme-darker shadow mt-8  min-h-[400px] ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-800  dark:text-gray-400 w-6/12 mt-8">
            <div className="text-center">Get in touch</div>
            
            <form method="POST" action="https://formspree.io/f/mgedvzlk">

              <FooterFormElement formElementName="name" formElementType="name" labelName="Full Name"></FooterFormElement>
              <FooterFormElement formElementName="email" formElementType="email" labelName="Email Address"></FooterFormElement>
              <FooterFormElement formElementName="message" formElementType="text" labelName="Message"></FooterFormElement>
                
              <button
                type="submit"
                className="text-white bg-gray-700 hover:bg-gray-800 
                focus:ring-4 focus:outline-none focus:ring-gray-300 
                font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
                dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Submit
              </button>
            </form>
          </span>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}

const FooterFormElement: React.FC<{formElementType : string, formElementName: string, labelName: string}> = ({formElementType, formElementName, labelName}) =>
{ // "name, Full Name"
  return (
    <div className="relative z-0 w-full mb-6 group">
        <input
          type={formElementType}
          name={formElementName}
          id={formElementName}
          className="text-gray-900 border-gray-800 focus:border-blue-600 peer dark:text-white dark:border-gray-600 dark:focus:border-purple-500 block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 "
          placeholder=" "
          required
        />
        <label className="text-gray-800 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-purple-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            {labelName}
        </label>
      </div>
  );
}

export default Footer;