import { Contact } from "../general";
export default function Page() {
  return (
    <>
      <div className="p-4 stack">
        <h2 className="text-[#003587] text-3xl">We are hiring!</h2>
        <p>
          We are looking for a X to join our team. If you are interested, please
          send us an email at...
        </p>
      </div>
      <Contact />
    </>
  );
}
