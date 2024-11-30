import Card from '.';

export default function LoaderCard() {
  return (
    <div className="">
      <div className="animate-pulse grid grid-cols-3 grid-rows-1">
        <div className="col-span-2">
          <Card>
            <div className="lg:flex gap-6 items-center">
              <div className="h-24 w-24 rounded-full bg-[#F9F7F5] lg:block hidden" />
              <div>
                <div className="h-3 bg-slate-700" />
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <div className="text-center">
            <div className="h-1 bg-ivory my-2 rounded col-span-2" />
            <div className="h-5 bg-ivory rounded-full col-span-2" />
          </div>
        </Card>
      </div>
    </div>
  );
}
