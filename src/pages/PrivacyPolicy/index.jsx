import React from "react";
import Container from "../../components/Container";

const PrivacyPolicy = () => {
  const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra, felis ut aliquam ultricies, arcu nibh eleifend risus, at
            viverra justo enim non risus. Donec vel tempus nisi. Maecenas
            vestibulum quam et turpis eleifend, vitae consectetur libero
            elementum. Maecenas nec risus accumsan, fringilla est non, vehicula
            odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pharetra, felis ut aliquam ultricies, arcu nibh eleifend
            risus, at viverra justo enim non risus. Donec vel tempus nisi.
            Maecenas vestibulum quam et turpis eleifend, vitae consectetur
            libero elementum. Maecenas nec risus accumsan, fringilla est non,
            vehicula odio.`;
  const heading = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`;
  const heading2 = `Lorem ipsum dolor sit amet`;
  const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra, felis ut aliquam ultricies, arcu nibh eleifend risus, at
            viverra justo enim non risus. Donec vel tempus nisi. Maecenas
            vestibulum quam et turpis eleifend, vitae consectetur libero
            elementum. Maecenas nec risus accumsan, fringilla est non, vehicula
            odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pharetra, felis ut aliquam ultricies, arcu nibh eleifend
            risus, at viverra jus.`;
  const para2 = `A content management system (CMS) is the foundation of every
            website. There are numerous content management systems to choose
            from, including open-source platforms like WordPress and
            beginner-friendly all-in-one website builders like Shopify or
            Squarespace. However, the final choice depends on your budget for
            your online store, experience, and unique e-commerce requirements.`;

  return (
    <Container>
      <div className="max-w-[80%] mx-auto py-12 font-poppins">
        <p className="text1 text-text7">{data}</p>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading}</h1>
          <p className="text1 text-text7">{para}</p>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading2}</h1>
          <p className="text1 text-text7">{para}</p>
        </div>
        <div>
          <h1 className="heading5 py-2">{heading2}</h1>
          <p>{para2}</p>
          <br />
          <p className="text1 text-text7">
            Donec vel tempus nisi. Maecenas vestibulum quam et turpis eleifend,
            vitae consectetur libero.
          </p>
          <p className="text1 text-text7">
            Donec vel tempus nisi. Maecenas vestibulum quam et turpis eleifend,
            vitae consectetur libero elementum.
          </p>
          <p className="text1 text-text7">
            Squarespace: This is one of the best website builders for beginners
            who want to quickly and easi..
          </p>
          <p className="text1 text-text7">
            Donec vel tempus nisi. Maecenas vestibulum quam et turpis eleifend,
            vitae consectetur libero elementum.
          </p>
          <p className="text1 text-text7">
            Donec vel tempus nisi. Maecenas vestibulum quam et turpis eleifend,
            vitae.
          </p>
          <p className="text1 text-text7">
            Donec vel tempus nisi. Maecenas vestibulum quam et turpis eleifend,
            vitae consectetur libero elementum.
          </p>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading}</h1>
          <p className="text1 text-text7">{para}</p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
