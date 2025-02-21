/* eslint-disable react/prop-types */
import { useDarkMode } from "../../contexts/DarkModeContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { truncateText } from "../../utils/helper";
import RequestForm from "./RequestForm";
import { useDeleteRequest } from "./useDeleteRequest";

function RequestItem({ request }) {
  const { isDarkMode } = useDarkMode();
  const { deleteRequest, isLoading: isDeleting } = useDeleteRequest();

  const statusStr =
    request.status === "inProgress"
      ? "در حال بررسی"
      : request.status === "approved"
        ? "تایید شده"
        : "رد شده";

  return (
    <div
      key={request.id}
      className="flex w-80 flex-col items-center justify-start gap-10 rounded bg-paleGreen p-7 sm:w-full sm:max-w-72 dark:bg-chocolateBrown dark:text-background"
    >
      <div className="relative h-36 w-48 shrink-0 overflow-hidden rounded border-[10px] border-background outline outline-[6px] outline-brown sm:h-32 sm:w-44">
        <img
          src={request.selectedPet.image}
          alt={request.selectedPet.name}
          className="h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 rounded-md bg-black/50"></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-medium text-white">
          {request.selectedPet.name}
        </span>
      </div>

      <div className="space-y-4 text-sm font-medium text-brown dark:text-background">
        <div className="flex items-start gap-1">
          {isDarkMode ? (
            <img src="/icons/location-dark-icon.svg" className="w-4" />
          ) : (
            <img src="/icons/location-icon.svg" className="w-4" />
          )}
          <span>مکان: {truncateText(request.location, 30)}</span>
        </div>
        <div className="flex items-start gap-1">
          {isDarkMode ? (
            <img src="/icons/calendar-range-dark-icon.svg" className="w-5" />
          ) : (
            <img src="/icons/calendar-range-icon.svg" className="w-5" />
          )}
          <span>تاریخ شروع: {request.startDate}</span>
        </div>
        <div className="flex items-start gap-1">
          {isDarkMode ? (
            <img src="/icons/calendar-range-dark-icon.svg" className="w-5" />
          ) : (
            <img src="/icons/calendar-range-icon.svg" className="w-5" />
          )}
          <span>تاریخ پایان: {request.endDate}</span>
        </div>
        <div className="flex items-start gap-1.5">
          <span className="mt-0.5 h-4 w-4 rounded-full bg-brown dark:bg-background"></span>
          <span>وضعیت درخواست: {statusStr}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Modal>
          <Modal.Open opens="editRequest">
            <Button
              variation="secondary"
              type="button"
              additionalStyles="flex w-36 h-9 items-center justify-center gap-2 text-xs"
            >
              <img src="/icons/edit-icon.svg" className="w-4" />
              <span>ویرایش اطلاعات</span>
            </Button>
          </Modal.Open>
          <Modal.Window name="editRequest">
            <RequestForm
              title={`ویرایش درخواست تاریخ ${request.startDate}`}
              request={request}
              requestOperation="edit"
            />
          </Modal.Window>
        </Modal>

        <Button
          variation="red"
          type="button"
          additionalStyles="flex w-36 h-9 items-center justify-center gap-1 text-xs"
          onClick={() => deleteRequest(request.id)}
          isLoading={isDeleting}
        >
          <img src="/icons/bin-icon.svg" className="w-5 translate-y-[-1px]" />
          <span>لغو درخواست</span>
        </Button>
      </div>
    </div>
  );
}

export default RequestItem;
