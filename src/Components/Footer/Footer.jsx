const Footer = () => {
  return (
    <footer className="bg-[#1A1919] py-8">
      <div className="container mx-auto p-10  ">
        <div className="footer text-gray-400">
          <aside>
            <h2 className="text-white text-3xl mb-5 font-extrabold">
              CareerHub
            </h2>
            <p className="text-[#ffffffb3] text-base font-normal md:w-[300px]">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img
              className="mt-5"
              src="../../../public/assets/icons/social.png"
              alt=""
            />
          </aside>
          <nav>
            <header className=" text-xl font-semibold text-white">
              Company
            </header>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              About Us
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Work
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Latest News
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Careers
            </a>
          </nav>
          <nav>
            <header className=" text-xl font-semibold text-white">
              Product
            </header>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Prototype
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Plans & Pricing
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Customers
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Integrations
            </a>
          </nav>
          <nav>
            <header className=" text-xl font-semibold text-white">
              Support
            </header>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Help Desk
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Sales
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Become a Partner
            </a>
            <a className="link link-hover text-base font-normal text-[#ffffffb3]">
              Developers
            </a>
          </nav>
          <nav>
            <header className=" text-xl font-semibold text-[#fff]">
              Contact
            </header>
            <p className="text-[#ffffffb3] text-base font-normal">
              524 Broadway , NYC <br /> <br />
              +1 777 - 978 - 5570
            </p>
          </nav>
        </div>
        <hr className=" my-12 " />
        <div className=" flex justify-between items-center">
          <small className="text-[#ffffff66]">
            @2023 <span className="font-semibold">CareerHub</span>. All Rights
            Reserved
          </small>
          <small className="text-[#ffffff66]">
            Made by<span className="font-semibold">Sarker Fardin Feroz</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
