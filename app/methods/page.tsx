import { Contact } from "../general";
export default function Page() {
  return (
    <div className="stack">
      <div className="p-4">
        <h2 className="text-[#003587] text-3xl">Our Leading Principles</h2>
        <p>
          A nice little section that describes how we do what we do. What are
          our core beliefs that enable us to create impactful products
        </p>
      </div>
      <Contact />
    </div>
  );
}
