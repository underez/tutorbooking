import { Disclosure } from "@headlessui/react";
import React from "react";
import { faq } from "../../constant/images";

const Accordion = () => {
  return (
    <div className="section-padding  bg-white bg-[url('../images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
          <div>
            <div className="mini-title">Frequently Asked Question</div>
            <div className="column-title ">
              General <span className="shape-bg">Questions</span>
            </div>
            <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What does it take excellent author?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Learn at your own pace, move between multiple courses, or
                      switch to a different course. Earn a certificate for every
                      learning program that you complete at no additional cost.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What does it take excellent author?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Learn at your own pace, move between multiple courses, or
                      switch to a different course. Earn a certificate for every
                      learning program that you complete at no additional cost.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure  >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What does it take excellent author?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Learn at your own pace, move between multiple courses, or
                      switch to a different course. Earn a certificate for every
                      learning program that you complete at no additional cost.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What does it take excellent author?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Learn at your own pace, move between multiple courses, or
                      switch to a different course. Earn a certificate for every
                      learning program that you complete at no additional cost.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>


            </ul>
          </div>
          <div>
            <img src={faq} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
