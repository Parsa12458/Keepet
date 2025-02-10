/* eslint-disable react/prop-types */
import { useDarkMode } from "../../contexts/DarkModeContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { truncateText } from "../../utils/helper";
import RequestForm from "./RequestForm";

function RequestItem({ request }) {
  const { isDarkMode } = useDarkMode();

  const requestStatusStr =
    request.requestStatus === "inProgress"
      ? "در حال بررسی"
      : request.requestStatus === "approved"
        ? "تایید شده"
        : "رد شده";

  return (
    <div
      key={request.requestId}
      className="flex w-80 flex-col items-center justify-start gap-10 rounded bg-paleGreen p-7 dark:bg-chocolateBrown dark:text-background"
    >
      <div className="relative h-36 w-48 shrink-0 overflow-hidden rounded border-[10px] border-background outline outline-[6px] outline-brown">
        <img
          src="/images/placeholder-pet2.jpg"
          alt={request.requestSelectedPet.petName}
          className="h-full w-full rounded-md object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-md bg-black/50">
          &nbsp;
        </div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-medium text-white">
          {request.requestSelectedPet.petName}
        </span>
      </div>

      <div className="space-y-4 text-sm font-medium text-brown dark:text-background">
        <div className="flex items-center gap-1">
          {isDarkMode ? (
            <img src="/icons/location-dark-icon.svg" className="-mt-0.5 w-4" />
          ) : (
            <img src="/icons/location-icon.svg" className="-mt-0.5 w-4" />
          )}
          <span>مکان: {truncateText(request.requestLocation, 30)}</span>
        </div>
        <div className="flex items-center gap-1">
          {isDarkMode ? (
            <img
              src="/icons/calendar-range-dark-icon.svg"
              className="-mt-0.5 w-5"
            />
          ) : (
            <img src="/icons/calendar-range-icon.svg" className="-mt-0.5 w-5" />
          )}
          <span>تاریخ شروع: {request.requestStartDate}</span>
        </div>
        <div className="flex items-center gap-1">
          {isDarkMode ? (
            <img
              src="/icons/calendar-range-dark-icon.svg"
              className="-mt-0.5 w-5"
            />
          ) : (
            <img src="/icons/calendar-range-icon.svg" className="-mt-0.5 w-5" />
          )}
          <span>تاریخ پایان: {request.requestEndDate}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-full bg-brown dark:bg-background"></span>
          <span>وضعیت درخواست: {requestStatusStr}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Modal>
          <Modal.Open opens="editPet">
            <Button
              variation="secondary"
              type="button"
              additionalStyles="flex w-36 h-9 items-center justify-center gap-2 text-xs"
            >
              <img src="/icons/edit-icon.svg" className="w-4" />
              <span>ویرایش اطلاعات</span>
            </Button>
          </Modal.Open>
          <Modal.Window name="editPet">
            <RequestForm
              title={`ویرایش درخواست تاریخ ${request.requestStartDate}`}
              request={request}
              requestOperation="edit"
            />
          </Modal.Window>
        </Modal>

        <Button
          variation="red"
          type="button"
          additionalStyles="flex w-36 h-9 items-center justify-center gap-1 text-xs"
        >
          <img src="/icons/bin-icon.svg" className="w-5 translate-y-[-1px]" />
          <span>لغو درخواست</span>
        </Button>
      </div>
    </div>
  );
}

export default RequestItem;
