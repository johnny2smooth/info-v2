import { Contact } from "../general";
export default function Page() {
  return (
    <>
      <div className="p-4 stack">
        <h2 className="text-[#003587] text-3xl">What our users are saying</h2>
        <p>
          A lot of the work that we have done has been for our users. We have
          gathered a lot of feedback from them and we are proud to share some of
          it with you.
        </p>
      </div>
      <Contact />
    </>
  );
}
