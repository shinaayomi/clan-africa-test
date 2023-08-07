import React from "react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";

export default function PersonalInfo() {
  return (
    <PagesLayout>
      <form className="h-full flex flex-col">
        <Headings
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number."
        />

        <label htmlFor="" className="block text-sm text-marine-blue font-ubuntu-medium mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="e.g  Stephen King"
          className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
        />
        <label htmlFor="" className="block text-sm text-marine-blue font-ubuntu-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="e.g  stephenking@lorem.com"
          className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
        />
        <label htmlFor="" className="block text-sm text-marine-blue font-ubuntu-medium mb-1">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="e.g  +1 234 567 890"
          className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
        />
        <div className="text-end mt-auto">
          <button className="h-12 w-[120px] text-white text-sm bg-marine-blue font-ubuntu-medium rounded-xl">
            Next Step
          </button>
        </div>
      </form>
    </PagesLayout>
  );
}
