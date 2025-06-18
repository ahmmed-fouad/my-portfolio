import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import {
  setSubmitting,
  setError,
  setSuccess,
  resetForm,
} from "../store/slices/contactSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import contactAnimation from "../assets/contact.json";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
// import { contactInput } from "@/data/projects";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const dispatch = useDispatch();
  const { form, isSubmitting, error, success } = useSelector(
    (state: RootState) => state.contact
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: form,
  });

  useEffect(() => {
    return () => {
      dispatch(resetForm());
    };
  }, [dispatch]);

  const onSubmit = async (data: ContactFormData) => {
    dispatch(setSubmitting(true));
    dispatch(setError(null));

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Send email using your preferred email service
      // Example using nodemailer (requires backend setup)
      // await sendEmail(data);

      dispatch(setSuccess(true));
      reset();
    } catch (err) {
      dispatch(setError("Failed to send message. Please try again."));
    } finally {
      dispatch(setSubmitting(false));
    }
  };

  const contactInput = [
    {
      htmlFor: "name",
      label: "Name",
      type: "text",
      name: "name" as const,
    },
    {
      htmlFor: "email",
      label: "Email",
      type: "email",
      name: "email" as const,
    },
    {
      htmlFor: "subject",
      label: "Subject",
      type: "text",
      name: "subject" as const,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-[hsl(var(--text))]">
          Contact Me
        </h1>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-[hsl(var(--bgCard))] text-[hsl(var(--subText))] rounded-lg"
          >
            Thank you for your message! I'll get back to you soon.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-[hsl(var(--bgCard))] text-[hsl(var(--text))] rounded-lg"
          >
            {error}
          </motion.div>
        )}
        <div className="w-full flex justify-end">
          <Lottie
            className="w-1/2"
            animationData={contactAnimation}
            loop={true}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1">
          {contactInput.map((item) => (
            <div key={item.name}>
              <label
                htmlFor={item.htmlFor}
                className="block text-lg font-medium mb-2 text-[hsl(var(--text))]"
              >
                {item.label}
              </label>
              <input
                {...register(item.name)}
                type={item.type}
                id={item.htmlFor}
                className="w-full text-[hsl(var(--text))] rounded-md border outline-none border-[hsl(var(--border))] focus:border-[hsl(var(--bordHover))] px-3 py-2"
              />
              {errors[item.name] && (
                <p className="mt-1 text-sm text-red-600">
                  {errors[item.name]?.message}
                </p>
              )}
            </div>
          ))}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={6}
              className="w-full rounded-md border border-[hsl(var(--border))] focus:border-[hsl(var(--bordHover))] px-3 py-2 outline-none"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="border border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))]  bg-[hsl(var(--bgCard))] cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
