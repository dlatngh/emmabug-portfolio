export default function Divider() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center px-20"
      >
        <div className="w-full border-t border-pink-300" />
      </div>
    </div>
  );
}
