import PetItem from "./PetItem";

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
        <PetItem pet={pet} key={pet.petId} />
      ))}
    </div>
  );
}

export default PetsList;
