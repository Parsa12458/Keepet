import Button from "../../ui/Button";
import { truncateText } from "../../utils/helper";

const requestsData = [
  {
    requestId: 1,
    requestSelectedPetId: 2,
    requestLocation: "آزادگان، بلوار امام رضا، اردلان 4، پلاک 111",
    requestStartDate: "16 دی 1403",
    requestDaysNum: 3,
    requestDescription: "",
  },
  {
    requestId: 2,
    requestSelectedPetId: 1,
    requestLocation: "کرج، چهارراه طالقانی، خیابان آزادی، پلاک 12",
    requestStartDate: "18 دی 1403",
    requestDaysNum: 5,
    requestDescription: "",
  },
];

function RequestsList() {
  return (
    <div className="mt-10 flex flex-wrap gap-8">
      {requestsData.map((request) => (
        <div
          key={request.requestId}
          className="flex w-80 flex-col items-center justify-start gap-10 rounded bg-paleGreen p-7"
        >
          <div className="relative h-36 w-48 shrink-0 overflow-hidden rounded border-[10px] border-background outline outline-4 outline-brown">
            {/* Later we will get the pet information using the database */}
            <img
              src="/images/placeholder-pet2.jpg"
              alt="ملی"
              className="h-full w-full rounded-md object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded-md bg-black/50">
              &nbsp;
            </div>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-medium text-white">
              ملی
            </span>
          </div>

          <div className="space-y-4 text-sm font-medium text-brown">
            <div className="flex items-center gap-1">
              <img src="/icons/location-icon.svg" className="-mt-0.5 w-4" />
              <span>مکان: {truncateText(request.requestLocation, 30)}</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/icons/calendar-range-icon.svg"
                className="-mt-0.5 w-5"
              />
              <span>تاریخ شروع: {request.requestStartDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/icons/calendar-clock-icon.svg"
                className="-mt-0.5 w-4"
              />
              <span>تعداد روز: {request.requestDaysNum} روز</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              variation="secondary"
              type="button"
              additionalStyles="flex w-36 h-9 items-center justify-center gap-2 text-xs"
            >
              <img src="/icons/edit-icon.svg" className="w-4" />
              <span>ویرایش اطلاعات</span>
            </Button>
            <Button
              variation="red"
              type="button"
              additionalStyles="flex w-36 h-9 items-center justify-center gap-1 text-xs"
            >
              <img
                src="/icons/bin-icon.svg"
                className="w-5 translate-y-[-1px]"
              />
              <span>لغو درخواست</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestsList;
