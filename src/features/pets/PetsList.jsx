import Button from "../../ui/Button";
import { convertGramsToKilograms, calculateAge } from "../../utils/helper";

const petsData = [
  {
    petId: 1,
    petImgUrl: "/images/placeholder-pet1.jpg",
    petType: "سگ",
    petName: "جسی",
    petBirthYear: 1398,
    petRace: "شپرد استرالیایی",
    petGender: "ماده",
    isPetSterile: true,
    petWeight: 5000,
    petDisease:
      "جسی دچار حساسیت های پوستی شده است و نیاز به مراقبت های ویژه دارد.",
    petDescription:
      "جسی یک سگ شاد و فعال است که عاشق بازی کردن و دویدن است. او به راحتی با سایر حیوانات خانگی و کودکان سازگار می‌شود.",
  },
  {
    petId: 2,
    petImgUrl: "/images/placeholder-pet2.jpg",
    petType: "گربه",
    petName: "ملی",
    petBirthYear: 1400,
    petRace: "پرشین",
    petGender: "نر",
    isPetSterile: false,
    petWeight: 3000,
    petDisease:
      "ملی به کم کاری تیروئید مبتلا است و نیاز به مصرف داروهای منظم دارد.",
    petDescription:
      "ملی یک گربه آرام و دوست داشتنی است که بیشتر اوقات خود را به استراحت و خواب می‌گذراند. او عاشق نوازش شدن و خوابیدن در کنار شما است.",
  },
  {
    petId: 3,
    petImgUrl: "/images/placeholder-pet3.jpg",
    petType: "طوطی",
    petName: "پیکو",
    petBirthYear: 1401,
    petRace: "ماکائو",
    petGender: "ماده",
    isPetSterile: false,
    petWeight: 500,
    petDisease:
      "پیکو در گذشته دچار شکستگی بال شده و بهبودی یافته است، اما نیاز به مراقبت های ویژه دارد.",
    petDescription:
      "پیکو یک طوطی باهوش و اجتماعی است که عاشق صحبت کردن و تقلید صداها است. او از بازی با اسباب بازی های رنگارنگ لذت می‌برد.",
  },
];

function PetsList() {
  return (
    <div className="mt-10 flex flex-col justify-center gap-8">
      {petsData.map((pet) => (
        <div
          key={pet.petId}
          className="flex items-center justify-start gap-10 rounded bg-paleGreen p-7"
        >
          <div className="h-36 w-56 shrink-0 overflow-hidden rounded">
            <img
              src={pet.petImgUrl}
              alt={`${pet.petName}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-x-8 gap-y-4 text-sm font-medium text-brown">
            <div>
              <span>نوع: </span> <span>{pet.petType}</span>
            </div>
            <div>
              <span>نژاد: </span> <span>{pet.petRace}</span>
            </div>
            <div className="col-start-3 col-end-4 row-start-2 row-end-4">
              <span>بیماری: </span> <span>{pet.petDisease}</span>
            </div>
            <div className="col-start-4 col-end-5 row-start-1 row-end-4">
              <span>توضیحات: </span> <span>{pet.petDescription}</span>
            </div>
            <div>
              <span>وزن: </span>{" "}
              <span>{convertGramsToKilograms(pet.petWeight)}</span>
            </div>
            <div>
              <span>اسم: </span> <span>{pet.petName}</span>
            </div>
            <div>
              <span>جنس: </span> <span>{pet.petGender}</span>
            </div>
            <div>
              <span>سن: </span> <span>{calculateAge(pet.petBirthYear)}</span>
            </div>
            <div>
              <span>عقیم: </span>{" "}
              {pet.isPetSterile ? (
                <img src="/icons/tick-icon.svg" className="inline w-5" />
              ) : (
                <img src="/icons/cross-icon.svg" className="inline w-5" />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Button
              variation="primary"
              type="button"
              additionalStyles="flex w-36 h-9 items-center justify-center gap-2 text-xs"
            >
              <img src="/icons/add-envelope-icon.svg" className="w-4" />
              <span>ارسال درخواست</span>
            </Button>
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
              <span>حذف پت</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetsList;
