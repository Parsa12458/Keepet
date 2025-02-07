import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextarea from "../../ui/InputTextArea";
import { toPersianDate } from "../../utils/helper";
import toast from "react-hot-toast";

function RequestForm({ title }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  return (
    <div className="text-brown">
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form
        className="grid grid-cols-3 items-start gap-x-10 gap-y-5"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputSelect
          id="requestSelectedPetId"
          label="پت مورد نظر خود را انتخاب کنید*"
          options={["پیکو", "جسی", "ملی"]}
          register={register}
        />
        <InputField
          id="requestStartDate"
          label="تاریخ شروع درخواست*"
          type="text"
          placeholder={`مثال: ${toPersianDate(new Date())}`}
          register={register}
          validationRules={{
            required: "تاریخ شروع درخواست را وارد کنید",
            pattern: {
              value:
                /^(\d{1,2}) (فروردین|اردیبهشت|خرداد|تیر|مرداد|شهریور|مهر|آبان|آذر|دی|بهمن|اسفند) (\d{4})$/,
              message: `فرمت تاریخ باید به شکل 'روز ماه سال' باشد. مثال: ${toPersianDate(new Date())}`,
            },
          }}
        />
        <InputField
          id="requestEndDate"
          label="تاریخ پایان درخواست*"
          type="text"
          placeholder={`مثال: ${toPersianDate(new Date().setDate(new Date().getDate() + 3))}`}
          register={register}
          validationRules={{
            required: "تاریخ پایان درخواست را وارد کنید",
            pattern: {
              value:
                /^(\d{1,2}) (فروردین|اردیبهشت|خرداد|تیر|مرداد|شهریور|مهر|آبان|آذر|دی|بهمن|اسفند) (\d{4})$/,
              message: `فرمت تاریخ باید به شکل 'روز ماه سال' باشد. مثال: ${toPersianDate(new Date())}`,
            },
          }}
        />
        <InputTextarea
          id="requestLocation"
          label="آدرس*"
          register={register}
          validationRules={{
            required: "آدرس خود را وارد کنید",
          }}
        />
        <InputTextarea
          id="requestDescription"
          label="توضیحات"
          register={register}
        />

        <div className="col-span-3 mr-auto mt-6 gap-3">
          <Button
            additionalStyles="flex items-center justify-center gap-2 py-2.5 px-5"
            type="submit"
            variation="primary"
          >
            <img src="/icons/add-icon.svg" className="w-5" />
            <span>ثبت درخواست</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RequestForm;
