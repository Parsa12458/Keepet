import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextarea from "../../ui/InputTextArea";
import { toPersianDate } from "../../utils/helper";

function RequestForm({ title }) {
  return (
    <div className="text-brown">
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form className="grid grid-cols-3 items-start gap-x-10 gap-y-5">
        <InputSelect
          id="requestSelectedPetId"
          label="پت مورد نظر خود را انتخاب کنید"
          options={["پیکو", "جسی", "ملی"]}
        />
        <InputField
          id="requestStartDate"
          label="تاریخ شروع درخواست"
          type="text"
          placeholder={`مثال: ${toPersianDate(new Date())}`}
        />
        <InputField id="requestDaysNum" label="تعداد روز" type="number" />
        <InputTextarea id="requestLocation" label="مکان" />
        <InputTextarea id="requestDescription" label="توضیحات" />

        <div className="col-span-3 mr-auto mt-6 gap-3">
          <Button
            additionalStyles="flex items-center justify-center gap-2 py-2.5 px-5"
            type="submit"
            variation="primary"
          >
            <img src="/icons/add-icon.svg" className="w-5" />
            <span>افزودن پت</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RequestForm;
