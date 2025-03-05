import Header from "./_components/Header";

export default async function layout({ children }) {
  return (
    <div>
      <Header />
      <div className="p-4">{children}</div>
    </div>
  );
}
