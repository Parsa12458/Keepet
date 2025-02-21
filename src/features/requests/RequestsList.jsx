import toast from "react-hot-toast";
import RequestItem from "./RequestItem";
import { useRequests } from "./useRequests";

function RequestsList() {
  const { requests, isLoading, error } = useRequests();

  const sortedRequests = requests?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (error) toast.error("خطایی در دریافت درخواست ها به وجود آمده است");

  return (
    <div className="mt-10 flex flex-wrap gap-8 md:justify-center">
      {isLoading ? (
        <div className="mt-10 w-full text-center text-3xl font-bold text-brown dark:text-white">
          دریافت درخواست ها...
        </div>
      ) : sortedRequests?.length !== 0 ? (
        sortedRequests?.map((request) => (
          <RequestItem request={request} key={request.id} />
        ))
      ) : (
        <div className="mt-10 w-full text-center text-3xl font-bold text-brown dark:text-white">
          اولین درخواست خود را ثبت کنید!
        </div>
      )}
    </div>
  );
}

export default RequestsList;
