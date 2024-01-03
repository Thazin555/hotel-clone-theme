import React from 'react'
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const BookingForm = () => {
  return (
    <section className="bg-gray-100 mx-auto ">
      <div className="block  md:grid lg:xl:grid grid-cols-12 md:mx-5 md:gap-8 mx-2 lg:xl:2xl:mx-40 lg:xl:2xl:gap-10">
        <div className=" col-span-12 lg:xl:2xl:3xl:col-span-9 md:col-span-7 mt-5 md:mt-20  bg-white mb-16  md:lg:xl:2xl:text-left pb-5  pt-20 px-5 md:p-8 lg:xl:2xl:p-14 ">
          <div>
            <p className="text-[#d77b5d] font-heading font-bold text-xs md:lg:xl:2xl:text-sm tracking-widest mb-3">
              BOOKING FORM{" "}
            </p>
            <h1 className="text-[#24324a] font-san text-2xl  lg:xl:2xl:text-4xl">
              Personal Info
            </h1>
          </div>
          <div className="my-3">
            <p
              className=" leading-7 text-[#24324a] px-0  md:px-0 md:text-xs  lg:text-base text-base md:text-left lg:xl:2xl:3xl:text-left  break-all font-san mb-10"
              style={{ wordSpacing: "0.2em" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget commodo orci. Integer varius nibh eu mattis
              porta. Pellentesque dictum sem eget cursus semper.
            </p>
          </div>
          <div>
            <div className="block md:flex gap-10 justify-between items-center focus-visible:outline-none">
              <Form.Item className="w-full ">
                <DatePicker className="w-full h-10 border-2 text-black border-gray-2 rounded-none" />
              </Form.Item>
              <Form.Item className="w-full ">
                <DatePicker className="w-full h-10  border-2 text-black border-gray-2 rounded-none" />
              </Form.Item>
            </div>
            <div className="block md:flex gap-10 justify-between items-center">
              <Form.Item className="w-full md:w-1/2  ">
                <Select
                  className="h-10 text-[#24324a] text-xs"
                  value={"2 ADULTS"}
                >
                  <Select.Option value="adults">ADULTS</Select.Option>
                  <Select.Option value="a-1">1 ADULT</Select.Option>
                  <Select.Option value="a-2">2 ADULTS</Select.Option>
                  <Select.Option value="a-3"> 3ADULTS</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className="w-full md:w-1/2">
                <Select
                  className="h-10 text-[#24324a] text-xs"
                  value={"2 CHILDREN"}
                >
                  <Select.Option value="children">CHILDREN</Select.Option>
                  <Select.Option value="c-1">1 CHILD</Select.Option>
                  <Select.Option value="c-2">2 CHILDREN</Select.Option>
                  <Select.Option value="c-3"> 3CHILDREN</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className="block md:flex gap-10 justify-between items-center">
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="YOUR NAME"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="YOUR SURNAME"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
            </div>
            <div className="block md:flex gap-10 justify-between items-center">
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="EMAIL ADDRESS"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="YOUR PHONE"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
            </div>
            <div className="block md:flex gap-10 justify-between items-center">
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="ADDRESS LINE 1"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="ADDRESS LINE 2"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
            </div>
            <div className="block md:flex gap-10 justify-between items-center">
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="CITY"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
              <Form.Item className="w-full md:w-1/2 ">
                <Input
                  placeholder="COUNTRY"
                  className="h-10 text-[#24324a] tracking-wider text-sm"
                />
              </Form.Item>
            </div>

            <div className="">
              <Form.Item>
                <TextArea
                  rows={7}
                  className="uppercase font-heading text-sm text-[#24324a] px-5 pt-5"
                  placeholder={"Special Requirement"}
                />
              </Form.Item>
            </div>
            <a className="uppercase block py-5 bg-[#d77b5d] text-white text-center tracking-widest text-sm font-medium md:inline-block md:px-6 lg:xl:2xl:inline-block lg:xl:2xl:px-6 md:py-3 lg:xl:2xl:py-3 cursor-pointer ">
              book now by email
            </a>
          </div>
        </div>

        <div className=" col-span-5 lg:xl:2xl:3xl:col-span-3 ">
          <div className="bg-white font-heading px-10 pt-14 mt-20">
            <div>
              <p className="text-[#d77b5d] font-heading font-bold text-xs md:lg:xl:2xl:text-sm tracking-widest mb-3">
                BOOKING DETAILS{" "}
              </p>
              <h1 className="text-[#24324a] font-san text-2xl  lg:xl:2xl:text-4xl">
                {/* Selected Room */}
                About Contact
              </h1>
            </div>
            <div className="my-3">
              <p
                className=" leading-7 text-[#24324a] px-0  md:pr-28  md:text-xs  lg:text-base text-base md:text-left lg:xl:2xl:3xl:text-left font-san mb-10"
                style={{ wordSpacing: "0.2em" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eget commodo orci. Integer varius nibh eu mattis
                porta. Pellentesque dictum sem eget cursus semper. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque eget
                commodo orci.
              </p>
            </div>
            <a className="uppercase mb-10 block py-5 bg-[#d77b5d] text-white text-center tracking-widest text-xs font-semibold md:inline-block md:px-6 lg:xl:2xl:inline-block lg:xl:2xl:px-8 md:py-3 lg:xl:2xl:py-4 cursor-pointer ">
              online support
            </a>

            {/* <hr className="my-3" />
              <div className="flex justify-start gap-5 text-[#24324a]">
                <img
                  src="https://preview.locotheme.com/grandium-html/assets/img/photo-room-5.jpg"
                  className="lg:xl:2xl:w-[100px] w-[70px] h-[70px]"
                  alt=""
                />
                <div className=" ">
                  <h1 className="lg:xl:2xl:text-3xl text-xl font-san">
                    Single Room
                  </h1>
                  <p className="uppercase text-xs text-gray-400 font-semibold">
                    <span className="text-[#d77b5d] text-base font-bold font-heading">
                      $ 230
                    </span>{" "}
                    per night
                  </p>
                </div>
              </div>
              <hr className="my-3 " />
              <div className="flex justify-between items-center lg:xl:2xl:mr-20 mr-5">
                <div className="font-semibold text-sm uppercase text-gray-400">
                  <h4 className="mb-3">check in</h4>
                  <p className="text-[#24324a]">04/20/2016</p>
                </div>
                <div className="font-semibold text-sm uppercase text-gray-400">
                  <h4 className="mb-3">check out</h4>
                  <p className="text-[#24324a]">04/22/2016</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center lg:xl:2xl:mr-20 mr-5">
                <div className="font-semibold text-sm uppercase text-gray-400">
                  <h4 className="mb-3">adults</h4>
                  <p className="text-[#24324a]">2 person</p>
                </div>
                <div className="font-semibold text-sm uppercase text-gray-400">
                  <h4 className="mb-3">children</h4>
                  <p className="text-[#24324a]">1 child</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center lg:xl:2xl:mr-20 mr-5">
                <div className="font-semibold text-sm uppercase text-gray-400">
                  <h4 className="mb-3">night</h4>
                  <p className="text-[#24324a]">2 night</p>
                </div>
                <div className="font-semibold text-sm uppercase text-gray-400">
                  <h4 className="mb-3">tax(10%)</h4>
                  <p className="text-[#24324a]">$50</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center lg:xl:2xl:mr-20 mr-5">
                <div className="font-semibold text-sm uppercase text-gray-400">
                  <h4 className="mb-3">total price</h4>
                  <p className="text-[#eb925e] text-xl font-semibold font-heading">
                    $ 510
                  </p>
                </div>
              </div>
              <hr className="my-3" /> */}
          </div>
          <div className=" border-[15px] border-white px-10 pt-10  mt-10">
            <div>
              <p className="text-[#d77b5d] font-heading font-bold text-xs md:lg:xl:2xl:text-sm tracking-widest mb-3">
                HELP{" "}
              </p>
              <h1 className="text-[#24324a] font-san text-2xl  lg:xl:2xl:text-4xl">
                Need Booking Help?
              </h1>
            </div>
            <div className="my-3">
              <p
                className=" leading-7 text-[#24324a] px-0  md:px-0 md:text-xs lg:xl:2xl:text-base  text-base md:text-left lg:xl:2xl:3xl:text-left  break-all font-san  lg:xl:2xl:mb-10"
                style={{ wordSpacing: "0.2em" }}
              >
                If you need help with booking, Our advisor team are 24/7 at your
                service to help you.
              </p>
            </div>
            <div>
              <a
                className=" leading-7 text-[#24324a] px-0  md:px-0 lg:xl:2xl:pl-0 lg:xl:2xl:pr-0 text-xs  lg:xl:2xl:text-base md:lg:xl:2xl:3xl:text-left  break-all font-san mb-10"
                href="mailto:www.thegrandiumhotel.com"
              >
                help@thegrandiumhotel.com
              </a>
            </div>
            <div className="my-10 flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                viewBox="0 0 448 512"
              >
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                <path
                  fill="#d77b5d"
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"
                />
              </svg>
              <p className="font-bold lg:xl:2xl:text-3xl text-[17px] font-heading text-[#24324a]">
                1-800-123-45-67
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm