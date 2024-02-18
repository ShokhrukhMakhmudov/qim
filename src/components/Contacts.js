"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function Contacts() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isLoading, isSubmitSuccessful },
  } = useForm();
  const onSubmit = async ({ name, phone, text }) => {
    const message = `Murojaat: ${text}` + " | " + `${name}: ${phone}`;
    console.log(message);
    const req = await fetch(
      `https://api.telegram.org/bot6822885139:AAF2qBphlA_8eesauxPTemhZycBlNo4Yh1o/sendMessage?chat_id=-1002093945723&text=${message}`
    );

    if (!req.ok) {
      console.log(errors);
    }

    reset();
  };
  if (isSubmitSuccessful) {
    Toast.fire({
      icon: "success",
      title: "Murojaatingiz qabul qilindi!",
    });
  }
  return (
    <motion.section
      id="about"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-10 md:py-20">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Biz bilan bog'lanish
        </h2>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row justify-between">
          <div className="bg-secondary p-5 sm:p-10 flex flex-col gap-5 w-full lg:w-1/2 ">
            <h4 className="text-white text-center text-2xl">
              Murojaat yuborish
            </h4>
            {/* <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 text-white text-xl sm:text-2xl font-medium">
                <label htmlFor="name">Ismingiz:</label>
                <input
                  className="p-2 text-black rounded-md"
                  id="name"
                  type="text"
                  placeholder="Ismingizni kiriting..."
                  required
                />
              </div>
              <div className="flex flex-col gap-2 text-white text-xl sm:text-2xl font-medium">
                <label htmlFor="tel">Telefon raqamingiz:</label>
                <input
                  className="p-2 text-black rounded-md"
                  id="tel"
                  type="text"
                  placeholder="Telefon raqamingiz..."
                  required
                />
              </div>
              <div className="flex flex-col gap-2 text-white text-xl sm:text-2xl font-medium">
                <label htmlFor="text">Murojaatingiz:</label>
                <textarea
                  className="p-2 text-black resize-none rounded-md"
                  cols="30"
                  rows="5"
                  id="text"
                  type="text"
                  placeholder="Murojaatingiz..."
                  required
                />
              </div>
              <button
                className="px-4 py-2 border-primary border-2 text-white text-xl hover:text-secondary hover:bg-primary active:opacity-70"
                type="submit">
                Yuborish
              </button>
            </form> */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 text-white text-xl sm:text-2xl font-medium">
                <label htmlFor="name">Ismingiz:</label>
                <input
                  className="p-2 text-black rounded-md"
                  id="name"
                  type="text"
                  placeholder="Ismingizni kiriting..."
                  {...register("name", {
                    required: true,
                    min: 3,
                  })}
                />
              </div>
              <div className="flex flex-col gap-2 text-white text-xl sm:text-2xl font-medium">
                <label htmlFor="tel">Telefon raqamingiz:</label>
                <input
                  className="p-2 text-black rounded-md"
                  id="tel"
                  type="tel"
                  placeholder="Telefon raqamingiz..."
                  {...register("phone", {
                    required: true,
                    min: 9,
                    maxLength: 20,
                  })}
                />
              </div>
              <div className="flex flex-col gap-2 text-white text-xl sm:text-2xl font-medium">
                <label htmlFor="text">Murojaatingiz:</label>

                <textarea
                  className="p-2 text-black resize-none rounded-md"
                  cols="30"
                  rows="5"
                  id="text"
                  placeholder="Murojaatingiz..."
                  {...register("text", { required: true })}
                />
              </div>

              <input
                className="px-4 py-2 border-primary border-2 text-white text-xl cursor-pointer hover:text-secondary hover:bg-primary active:opacity-70"
                type="submit"
                value={"Yuborish"}
              />
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              className="w-full h-[300px] sm:h-[600px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.9217166326234!2d71.75993605092437!3d40.44425716238993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9dbc283a5db5%3A0xd65cb458a42c5d39!2z0JrQuNGA0LPQuNC70Lgg0JjRgdGB0LjQuiDQodGD0LIg0YLQsNGK0LzQuNC90L7Rgg!5e1!3m2!1sru!2s!4v1707236792500!5m2!1sru!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contacts;
