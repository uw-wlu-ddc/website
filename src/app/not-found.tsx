export default function NotFound() {
  return (
    <div className="container h-screen w-fit content-center">
      <div className="bg-white bordered p-12 grid gap-12">
        <text className="font-figtree text-title text-black ">
          404 | Page Not Found
        </text>
        <div className="bg-black-100/50 py-2 px-4 w-fit">
          <text className="font-dm text-subtitle text-black  uppercase">
            This is not the page you are looking for
          </text>
        </div>
      </div>
    </div>
  );
}
