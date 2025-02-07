import RequestItem from "./RequestItem";

const requestsData = [
  {
    requestId: 1,
    requestSelectedPetId: 2,
    requestLocation: "آزادگان، بلوار امام رضا، اردلان 4، پلاک 111",
    requestStartDate: "16 دی 1403",
    requestDaysNum: 3,
    requestDescription: "",
    requestStatus: "inProgress", // inProgress, approved, rejected
  },
  {
    requestId: 2,
    requestSelectedPetId: 1,
    requestLocation: "کرج، چهارراه طالقانی، خیابان آزادی، پلاک 12",
    requestStartDate: "18 دی 1403",
    requestDaysNum: 5,
    requestDescription: "",
    requestStatus: "approved",
  },
];

function RequestsList() {
  return (
    <div className="mt-10 flex flex-wrap gap-8">
      {requestsData.map((request) => (
        <RequestItem request={request} key={request.requestId} />
      ))}
    </div>
  );
}

export default RequestsList;
