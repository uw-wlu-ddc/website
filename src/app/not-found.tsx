import ButtonBox from "@/components/ButtonBox";

export default function NotFound() {
    return (
        
    );
}export default function NotFound() {
  return (
    <>
    <div className="py-60 px-4 m-auto">
            <div className="m-auto text-center">
                <h1 className="mb-4 text-title text-black">404.</h1>
                <p className="mb-4 text-header text-gray-900">This page DNE</p>
                <p className="mb-4 text-body font-light text-gray-500 dark:text-gray-400">
                    This page is like your future co-op, it doesn&#39;t exist. 
                </p>
                <ButtonBox className="w-[17.5rem] h-[3.875rem]" href="/">
                    <text className="font-figtree text-subheader">Back to home</text>
                </ButtonBox>
            </div>
        </div>
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
    </>
  );
}
