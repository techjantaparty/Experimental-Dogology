import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-[#262626]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
