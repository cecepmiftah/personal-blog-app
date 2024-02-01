import { ContactForm } from "@/components/contact-form/ContactForm";

const page = () => {
  return (
    <div className="w-full lg:max-w-[1216px] xl:max-w-[1440px] mx-auto mt-4">
      <h1 className="font-bold text-3xl mb-6 mx-5 md:text-4xl text-center border-y-2 border-slate-700 py-6 md:py-10">
        Contact Me
      </h1>
      <ContactForm />
    </div>
  );
};

export default page;
