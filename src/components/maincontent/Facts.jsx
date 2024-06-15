import React, { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { LuImagePlus } from 'react-icons/lu';
import { PiHeadsetBold } from 'react-icons/pi';
import { RiGroupLine } from 'react-icons/ri';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Facts = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-raleway" name="factsSection">
        <div className="heading">
          <h4 className="text-4xl text-primary py-2 font-semibold"> Facts </h4>
          <div className="border-b-4   border-blue-500 w-12 my-2"></div>
        </div>
        <p className="description my-4 text-base font-raleway">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="factsItems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10">
          <div className="subItem1 p-8 px-3 flex gap-4">
            <div className="itemIcon text-blue-500">
              <BsEmojiSmile className="w-11 h-11" />
            </div>
            <div className="subItemDesc">
              <div className="text-4xl font-bold">
                {counterOn && <CountUp start={0} end={232} />}
              </div>
              <p className="">
                <span className="text-gray-900 font-semibold block"> Happy Clients</span>
                <span className="text-gray-700"> consequuntur quae</span>
              </p>
            </div>
          </div>

          <div className="subItem1 p-8 px-3 flex gap-4">
            <div className="itemIcon text-blue-500">
              <LuImagePlus className="w-11 h-11" />
            </div>
            <div className="subItemDesc">
              <div className="text-4xl font-bold">
                {counterOn && <CountUp start={0} end={521} />}
              </div>
              <p className="">
                <span className="text-gray-900 font-semibold block"> Projects </span>
                <span className="text-gray-700"> adipisci atque cum quia aut</span>
              </p>
            </div>
          </div>

          <div className="subItem1 p-8 px-3 flex gap-4">
            <div className="itemIcon text-blue-500">
              <PiHeadsetBold className="w-11 h-11" />
            </div>
            <div className="subItemDesc">
              <div className="text-4xl font-bold">
                {counterOn && <CountUp start={0} end={1453} />}
              </div>
              <p className="">
                <span className="text-gray-900 font-semibold block"> Hours Of Support</span>
                <span className="text-gray-700"> aut commodi quaerat</span>
              </p>
            </div>
          </div>

          <div className="subItem1 p-8 px-3 flex gap-4">
            <div className="itemIcon text-blue-500">
              <RiGroupLine className="w-11 h-11" />
            </div>
            <div className="subItemDesc">
              <div className="text-4xl font-bold">
                {counterOn && <CountUp start={0} end={32} />}
              </div>
              <p className="">
                <span className="text-gray-900 font-semibold block"> Hard Workers</span>
                <span className="text-gray-700"> rerum asperiores dolor</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Facts;
